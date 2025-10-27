import { test, expect, Page } from '@playwright/test';
import fs from 'fs';
import path from 'path';

interface StyleAnalysis {
  typography: {
    fonts: string[];
    fontSizes: string[];
    fontWeights: string[];
    lineHeights: string[];
  };
  colors: {
    backgrounds: string[];
    textColors: string[];
    borderColors: string[];
    accentColors: string[];
  };
  spacing: {
    margins: string[];
    paddings: string[];
    gaps: string[];
  };
  layout: {
    containers: string[];
    gridSystems: string[];
    flexboxPatterns: string[];
  };
  components: {
    buttons: any[];
    cards: any[];
    navigation: any[];
  };
  breakpoints: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  animations: string[];
}

test.describe('R&W Website Style Analysis', () => {
  let analysisResults: StyleAnalysis;
  let screenshotsDir: string;

  test.beforeAll(async () => {
    // Create directories for screenshots and analysis
    screenshotsDir = path.join(__dirname, '..', 'screenshots', 'randw-analysis');
    fs.mkdirSync(screenshotsDir, { recursive: true });
    
    analysisResults = {
      typography: { fonts: [], fontSizes: [], fontWeights: [], lineHeights: [] },
      colors: { backgrounds: [], textColors: [], borderColors: [], accentColors: [] },
      spacing: { margins: [], paddings: [], gaps: [] },
      layout: { containers: [], gridSystems: [], flexboxPatterns: [] },
      components: { buttons: [], cards: [], navigation: [] },
      breakpoints: { mobile: '', tablet: '', desktop: '' },
      animations: []
    };
  });

  async function extractComputedStyles(page: Page, selector: string) {
    return await page.evaluate((sel) => {
      const element = document.querySelector(sel);
      if (!element) return null;
      
      const computedStyle = window.getComputedStyle(element);
      return {
        fontFamily: computedStyle.fontFamily,
        fontSize: computedStyle.fontSize,
        fontWeight: computedStyle.fontWeight,
        lineHeight: computedStyle.lineHeight,
        color: computedStyle.color,
        backgroundColor: computedStyle.backgroundColor,
        borderColor: computedStyle.borderColor,
        margin: computedStyle.margin,
        padding: computedStyle.padding,
        gap: computedStyle.gap,
        display: computedStyle.display,
        flexDirection: computedStyle.flexDirection,
        gridTemplateColumns: computedStyle.gridTemplateColumns,
        gridTemplateRows: computedStyle.gridTemplateRows,
        width: computedStyle.width,
        maxWidth: computedStyle.maxWidth,
        minWidth: computedStyle.minWidth,
        borderRadius: computedStyle.borderRadius,
        boxShadow: computedStyle.boxShadow,
        transition: computedStyle.transition,
        transform: computedStyle.transform,
        animation: computedStyle.animation
      };
    }, selector);
  }

  async function analyzePageStyles(page: Page, pageName: string) {
    console.log(`Analyzing styles for ${pageName}...`);
    
    // Take full page screenshot
    await page.screenshot({ 
      path: path.join(screenshotsDir, `${pageName}-full.png`), 
      fullPage: true 
    });

    // Extract CSS custom properties (CSS variables)
    const cssVariables = await page.evaluate(() => {
      const styles = window.getComputedStyle(document.documentElement);
      const variables: any = {};
      for (let i = 0; i < styles.length; i++) {
        const property = styles[i];
        if (property.startsWith('--')) {
          variables[property] = styles.getPropertyValue(property);
        }
      }
      return variables;
    });

    // Analyze common elements
    const selectors = [
      'body', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'a',
      'button', '.btn', '[class*="button"]',
      'nav', 'header', 'footer', 'main',
      '[class*="container"]', '[class*="wrapper"]',
      '[class*="card"]', '[class*="property"]',
      '[class*="grid"]', '[class*="flex"]',
      'input', 'form', 'select'
    ];

    for (const selector of selectors) {
      const elements = await page.locator(selector).all();
      for (let i = 0; i < Math.min(elements.length, 3); i++) {
        try {
          const styles = await extractComputedStyles(page, `${selector}:nth-of-type(${i + 1})`);
          if (styles) {
            // Store typography data
            if (styles.fontFamily && !analysisResults.typography.fonts.includes(styles.fontFamily)) {
              analysisResults.typography.fonts.push(styles.fontFamily);
            }
            if (styles.fontSize && !analysisResults.typography.fontSizes.includes(styles.fontSize)) {
              analysisResults.typography.fontSizes.push(styles.fontSize);
            }
            if (styles.fontWeight && !analysisResults.typography.fontWeights.includes(styles.fontWeight)) {
              analysisResults.typography.fontWeights.push(styles.fontWeight);
            }
            if (styles.lineHeight && !analysisResults.typography.lineHeights.includes(styles.lineHeight)) {
              analysisResults.typography.lineHeights.push(styles.lineHeight);
            }

            // Store color data
            if (styles.color && styles.color !== 'rgba(0, 0, 0, 0)' && !analysisResults.colors.textColors.includes(styles.color)) {
              analysisResults.colors.textColors.push(styles.color);
            }
            if (styles.backgroundColor && styles.backgroundColor !== 'rgba(0, 0, 0, 0)' && !analysisResults.colors.backgrounds.includes(styles.backgroundColor)) {
              analysisResults.colors.backgrounds.push(styles.backgroundColor);
            }

            // Store spacing data
            if (styles.margin && styles.margin !== '0px' && !analysisResults.spacing.margins.includes(styles.margin)) {
              analysisResults.spacing.margins.push(styles.margin);
            }
            if (styles.padding && styles.padding !== '0px' && !analysisResults.spacing.paddings.includes(styles.padding)) {
              analysisResults.spacing.paddings.push(styles.padding);
            }

            // Store animation data
            if (styles.animation && styles.animation !== 'none' && !analysisResults.animations.includes(styles.animation)) {
              analysisResults.animations.push(styles.animation);
            }
          }
        } catch (error) {
          // Skip elements that can't be analyzed
          continue;
        }
      }
    }

    return { cssVariables, pageName };
  }

  test('Analyze Homepage', async ({ page }) => {
    await page.goto('https://www.randw.com.au/');
    await page.waitForLoadState('networkidle');
    
    // Wait for potential dynamic content
    await page.waitForTimeout(2000);
    
    const results = await analyzePageStyles(page, 'homepage');
    
    // Take screenshots of key sections
    const sections = await page.locator('section, [class*="section"], main > div').all();
    for (let i = 0; i < Math.min(sections.length, 5); i++) {
      try {
        await sections[i].screenshot({ 
          path: path.join(screenshotsDir, `homepage-section-${i + 1}.png`) 
        });
      } catch (error) {
        console.log(`Could not screenshot section ${i + 1}`);
      }
    }
  });

  test('Analyze Property Listings', async ({ page }) => {
    await page.goto('https://www.randw.com.au/');
    await page.waitForLoadState('networkidle');
    
    // Try to find and navigate to property listings
    const listingsLinks = await page.locator('a[href*="property"], a[href*="listing"], a[href*="search"], a[href*="buy"], a[href*="rent"]').all();
    
    if (listingsLinks.length > 0) {
      try {
        await listingsLinks[0].click();
        await page.waitForLoadState('networkidle');
        await page.waitForTimeout(2000);
        
        await analyzePageStyles(page, 'property-listings');
        
        // Screenshot property cards/listings
        const propertyCards = await page.locator('[class*="property"], [class*="listing"], [class*="card"]').all();
        for (let i = 0; i < Math.min(propertyCards.length, 3); i++) {
          try {
            await propertyCards[i].screenshot({ 
              path: path.join(screenshotsDir, `property-card-${i + 1}.png`) 
            });
          } catch (error) {
            console.log(`Could not screenshot property card ${i + 1}`);
          }
        }
      } catch (error) {
        console.log('Could not navigate to property listings');
      }
    }
  });

  test('Analyze Property Detail Page', async ({ page }) => {
    await page.goto('https://www.randw.com.au/');
    await page.waitForLoadState('networkidle');
    
    // Try to find a property detail link
    const propertyLinks = await page.locator('a[href*="property/"], a[href*="listing/"]').all();
    
    if (propertyLinks.length > 0) {
      try {
        await propertyLinks[0].click();
        await page.waitForLoadState('networkidle');
        await page.waitForTimeout(2000);
        
        await analyzePageStyles(page, 'property-detail');
        
        // Take screenshot of property details sections
        await page.screenshot({ 
          path: path.join(screenshotsDir, 'property-detail-full.png'), 
          fullPage: true 
        });
      } catch (error) {
        console.log('Could not navigate to property detail page');
      }
    }
  });

  test('Analyze Responsive Behavior', async ({ page }) => {
    await page.goto('https://www.randw.com.au/');
    await page.waitForLoadState('networkidle');
    
    // Test different viewport sizes
    const viewports = [
      { name: 'mobile', width: 375, height: 667 },
      { name: 'tablet', width: 768, height: 1024 },
      { name: 'desktop', width: 1440, height: 900 }
    ];

    for (const viewport of viewports) {
      await page.setViewportSize({ width: viewport.width, height: viewport.height });
      await page.waitForTimeout(1000);
      
      await page.screenshot({ 
        path: path.join(screenshotsDir, `responsive-${viewport.name}.png`), 
        fullPage: true 
      });

      // Analyze responsive styles
      const bodyStyles = await extractComputedStyles(page, 'body');
      if (bodyStyles) {
        analysisResults.breakpoints[viewport.name as keyof typeof analysisResults.breakpoints] = 
          `${viewport.width}px - Container width: ${bodyStyles.maxWidth || bodyStyles.width}`;
      }
    }
  });

  test.afterAll(async () => {
    // Save analysis results to JSON file
    const outputPath = path.join(__dirname, '..', 'randw-style-analysis.json');
    fs.writeFileSync(outputPath, JSON.stringify(analysisResults, null, 2));
    
    // Generate a readable report
    const reportPath = path.join(__dirname, '..', 'randw-style-report.md');
    const report = `# R&W Website Style Analysis Report

## Typography
- **Fonts**: ${analysisResults.typography.fonts.join(', ')}
- **Font Sizes**: ${analysisResults.typography.fontSizes.join(', ')}
- **Font Weights**: ${analysisResults.typography.fontWeights.join(', ')}
- **Line Heights**: ${analysisResults.typography.lineHeights.join(', ')}

## Colors
### Text Colors
${analysisResults.colors.textColors.map(color => `- ${color}`).join('\n')}

### Background Colors
${analysisResults.colors.backgrounds.map(color => `- ${color}`).join('\n')}

## Spacing
### Margins
${analysisResults.spacing.margins.map(margin => `- ${margin}`).join('\n')}

### Padding
${analysisResults.spacing.paddings.map(padding => `- ${padding}`).join('\n')}

## Responsive Breakpoints
- **Mobile**: ${analysisResults.breakpoints.mobile}
- **Tablet**: ${analysisResults.breakpoints.tablet}
- **Desktop**: ${analysisResults.breakpoints.desktop}

## Animations
${analysisResults.animations.map(animation => `- ${animation}`).join('\n')}

## Screenshots
Screenshots have been saved to: ${screenshotsDir}
- Homepage sections
- Property listings/cards
- Property detail pages
- Responsive views (mobile, tablet, desktop)
`;

    fs.writeFileSync(reportPath, report);
    
    console.log('Style analysis complete!');
    console.log(`Report saved to: ${reportPath}`);
    console.log(`Screenshots saved to: ${screenshotsDir}`);
    console.log(`Raw data saved to: ${outputPath}`);
  });
});