import { test, expect } from '@playwright/test';

test.describe('Domain.com.au Competitive Analysis', () => {
  
  test.beforeEach(async ({ page }) => {
    // Navigate to domain.com.au
    await page.goto('https://www.domain.com.au');
    
    // Wait for page to fully load
    await page.waitForLoadState('networkidle');
  });

  test('Homepage Search Experience', async ({ page }) => {
    // Take screenshot of homepage
    await page.screenshot({ 
      path: 'tests/screenshots/domain-homepage.png',
      fullPage: true 
    });

    // Analyze search interface
    const searchForm = page.locator('[data-testid="search-form"], form:has-text("Search")').first();
    await expect(searchForm).toBeVisible();

    // Check for search input
    const searchInput = page.locator('input[placeholder*="suburb"], input[placeholder*="Search"], input[type="search"]').first();
    if (await searchInput.isVisible()) {
      await searchInput.fill('Melbourne VIC');
      await page.screenshot({ path: 'tests/screenshots/domain-search-filled.png' });
    }

    // Look for search suggestions/autocomplete
    const suggestions = page.locator('[data-testid="suggestions"], .autocomplete, .search-suggestions');
    if (await suggestions.isVisible()) {
      await page.screenshot({ path: 'tests/screenshots/domain-search-suggestions.png' });
    }
  });

  test('Property Search Results', async ({ page }) => {
    // Search for properties in Melbourne
    const searchInput = page.locator('input[placeholder*="suburb"], input[placeholder*="Search"], input[type="search"]').first();
    await searchInput.fill('Melbourne VIC');
    await page.keyboard.press('Enter');
    
    // Wait for results to load
    await page.waitForLoadState('networkidle');
    await page.screenshot({ 
      path: 'tests/screenshots/domain-search-results.png',
      fullPage: true 
    });

    // Analyze filter options
    const filters = page.locator('[data-testid="filters"], .filters, .search-filters');
    if (await filters.isVisible()) {
      await page.screenshot({ path: 'tests/screenshots/domain-filters.png' });
    }

    // Count property listings
    const propertyCards = page.locator('[data-testid="listing"], .listing, .property-card, article');
    const count = await propertyCards.count();
    console.log(`Found ${count} property listings`);

    // Check for pagination
    const pagination = page.locator('[data-testid="pagination"], .pagination, nav:has-text("Next")');
    if (await pagination.isVisible()) {
      await page.screenshot({ path: 'tests/screenshots/domain-pagination.png' });
    }
  });

  test('Map Interface Analysis', async ({ page }) => {
    // Navigate to map view if available
    const mapButton = page.locator('button:has-text("Map"), [data-testid="map-toggle"], .map-view');
    if (await mapButton.isVisible()) {
      await mapButton.click();
      await page.waitForTimeout(3000); // Wait for map to load
      
      await page.screenshot({ 
        path: 'tests/screenshots/domain-map-view.png',
        fullPage: true 
      });

      // Analyze map controls
      const mapControls = page.locator('.mapboxgl-ctrl, .leaflet-control, .map-controls');
      if (await mapControls.isVisible()) {
        await page.screenshot({ path: 'tests/screenshots/domain-map-controls.png' });
      }

      // Check for property pins/markers
      const propertyPins = page.locator('.mapboxgl-marker, .leaflet-marker, .map-pin, .property-marker');
      const pinCount = await propertyPins.count();
      console.log(`Found ${pinCount} property pins on map`);
    }
  });

  test('Property Detail Page Analysis', async ({ page }) => {
    // Search and click on first property
    const searchInput = page.locator('input[placeholder*="suburb"], input[placeholder*="Search"], input[type="search"]').first();
    await searchInput.fill('Melbourne VIC');
    await page.keyboard.press('Enter');
    
    await page.waitForLoadState('networkidle');
    
    // Click on first property listing
    const firstProperty = page.locator('[data-testid="listing"], .listing, .property-card, article').first();
    if (await firstProperty.isVisible()) {
      await firstProperty.click();
      await page.waitForLoadState('networkidle');
      
      await page.screenshot({ 
        path: 'tests/screenshots/domain-property-detail.png',
        fullPage: true 
      });

      // Analyze property images
      const imageGallery = page.locator('[data-testid="gallery"], .image-gallery, .property-images');
      if (await imageGallery.isVisible()) {
        await page.screenshot({ path: 'tests/screenshots/domain-image-gallery.png' });
      }

      // Check for agent contact form
      const contactForm = page.locator('[data-testid="contact"], .contact-form, form:has-text("Contact")');
      if (await contactForm.isVisible()) {
        await page.screenshot({ path: 'tests/screenshots/domain-contact-form.png' });
      }

      // Look for property description
      const description = page.locator('[data-testid="description"], .property-description, .listing-description');
      if (await description.isVisible()) {
        const descText = await description.textContent();
        console.log(`Property description length: ${descText?.length} characters`);
      }

      // Check for price and features
      const priceElement = page.locator('[data-testid="price"], .price, .property-price');
      if (await priceElement.isVisible()) {
        const price = await priceElement.textContent();
        console.log(`Property price: ${price}`);
      }
    }
  });

  test('Mobile Responsiveness Check', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('https://www.domain.com.au');
    
    await page.screenshot({ 
      path: 'tests/screenshots/domain-mobile-homepage.png',
      fullPage: true 
    });

    // Test mobile search
    const mobileSearchInput = page.locator('input[placeholder*="suburb"], input[placeholder*="Search"], input[type="search"]').first();
    if (await mobileSearchInput.isVisible()) {
      await mobileSearchInput.fill('Melbourne VIC');
      await page.screenshot({ path: 'tests/screenshots/domain-mobile-search.png' });
    }

    // Check mobile navigation
    const mobileMenu = page.locator('[data-testid="mobile-menu"], .mobile-menu, button:has-text("Menu")');
    if (await mobileMenu.isVisible()) {
      await mobileMenu.click();
      await page.screenshot({ path: 'tests/screenshots/domain-mobile-menu.png' });
    }
  });

  test('Performance and UX Analysis', async ({ page }) => {
    // Measure page load performance
    const startTime = Date.now();
    await page.goto('https://www.domain.com.au');
    await page.waitForLoadState('networkidle');
    const loadTime = Date.now() - startTime;
    
    console.log(`Page load time: ${loadTime}ms`);

    // Check for loading states
    const loadingElements = page.locator('[data-testid="loading"], .loading, .spinner, .skeleton');
    if (await loadingElements.isVisible()) {
      await page.screenshot({ path: 'tests/screenshots/domain-loading-states.png' });
    }

    // Test search performance
    const searchStartTime = Date.now();
    const searchInput = page.locator('input[placeholder*="suburb"], input[placeholder*="Search"], input[type="search"]').first();
    await searchInput.fill('Melbourne VIC');
    await page.keyboard.press('Enter');
    await page.waitForLoadState('networkidle');
    const searchTime = Date.now() - searchStartTime;
    
    console.log(`Search response time: ${searchTime}ms`);
  });

  test('Accessibility Analysis', async ({ page }) => {
    // Check for accessibility features
    await page.goto('https://www.domain.com.au');
    
    // Check for alt text on images
    const images = page.locator('img');
    const imageCount = await images.count();
    let imagesWithAlt = 0;
    
    for (let i = 0; i < Math.min(imageCount, 10); i++) {
      const alt = await images.nth(i).getAttribute('alt');
      if (alt && alt.trim()) imagesWithAlt++;
    }
    
    console.log(`Images with alt text: ${imagesWithAlt}/${Math.min(imageCount, 10)}`);

    // Check for ARIA labels
    const ariaElements = page.locator('[aria-label], [aria-labelledby], [role]');
    const ariaCount = await ariaElements.count();
    console.log(`Elements with ARIA attributes: ${ariaCount}`);

    // Check heading structure
    const headings = page.locator('h1, h2, h3, h4, h5, h6');
    const headingCount = await headings.count();
    console.log(`Total headings: ${headingCount}`);
  });

});