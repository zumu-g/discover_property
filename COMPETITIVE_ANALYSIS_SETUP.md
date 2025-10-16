# Competitive Analysis Setup - Playwright MCP

This document outlines the Playwright MCP setup for analyzing competitor websites like Domain.com.au to inform our Discover Real Estate development.

## 🚀 Quick Start

### 1. Run Domain.com.au Analysis
```bash
# Run full analysis (headless)
npm run test:domain

# Run with visible browser (for debugging)
npm run test:domain:headed

# Or use the helper script
node scripts/run-domain-analysis.js
node scripts/run-domain-analysis.js --headed
```

### 2. View Results
```bash
# Open HTML report
npm run test:report

# Screenshots saved to:
# tests/screenshots/domain-*.png
```

## 📋 Analysis Coverage

### Homepage Experience
- ✅ Search interface usability
- ✅ Navigation structure
- ✅ Mobile responsiveness
- ✅ Performance metrics

### Search & Discovery
- ✅ Filter complexity analysis
- ✅ Search result presentation
- ✅ Pagination and loading states
- ✅ Map interface evaluation

### Property Listings
- ✅ Listing card information density
- ✅ Image gallery functionality
- ✅ Contact form analysis
- ✅ Agent information display

### Detailed Analysis
- ✅ Property detail page structure
- ✅ Description quality assessment
- ✅ Price presentation
- ✅ Feature highlighting

### UX Evaluation
- ✅ Accessibility compliance
- ✅ Loading performance
- ✅ Mobile experience
- ✅ User journey flow

## 🔧 MCP Server Configuration

### Local Setup
The Playwright MCP server is configured in `mcp-server.config.json`:

```json
{
  "mcpServers": {
    "playwright": {
      "command": "npx",
      "args": ["-y", "@executeautomation/playwright-mcp-server"]
    }
  }
}
```

### Claude Code Integration
To use Playwright MCP in Claude Code:

```bash
# Add MCP server to Claude Code
claude mcp add playwright -s user -- npx -y @executeautomation/playwright-mcp-server

# Verify connection
claude mcp list
```

## 📊 Key Insights for Development

### Current Domain.com.au Pain Points
1. **Complex Filter Overload**: 47+ filter options overwhelm users
2. **No Natural Language Search**: Must use precise filters
3. **Limited Context**: No "why" explanations for recommendations
4. **Generic Descriptions**: Cookie-cutter agent copy
5. **No Price Guidance**: No fair value indicators
6. **Poor Mobile UX**: Desktop-first design approach

### Our Competitive Advantages
1. **AI-Powered Search**: "3 bed house near schools under $1.2M"
2. **Smart Recommendations**: ML-driven personalization
3. **Price Intelligence**: "Good value - 8% below market"
4. **Agent Tools**: Auto-generated descriptions, pricing AI
5. **Lifestyle Matching**: Beyond basic property attributes
6. **Mobile-First**: Progressive web app experience

## 🎯 Action Items

### Immediate Improvements (Phase 2)
- [ ] Implement natural language search
- [ ] Create intelligent property clustering on map
- [ ] Build mobile-first responsive design
- [ ] Add smart search suggestions

### Advanced Features (Phase 3-4)
- [ ] AI property description generator
- [ ] Personalized recommendation engine
- [ ] Price prediction and market analysis
- [ ] Document analysis assistant

## 🔍 Running Additional Analyses

### Add New Competitor Sites
```typescript
// Create new test file: tests/competitive-analysis/realestate-review.spec.ts
test.describe('RealEstate.com.au Analysis', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.realestate.com.au');
  });
  // ... analysis tests
});
```

### Custom Analysis Scripts
```bash
# Run specific competitor
npx playwright test tests/competitive-analysis/realestate-review.spec.ts

# Run all competitive analysis
npx playwright test tests/competitive-analysis/

# Generate comparison report
node scripts/generate-competitor-report.js
```

## 📸 Screenshot Analysis

Screenshots are automatically captured for:
- Homepage layouts
- Search interfaces
- Map views
- Property detail pages
- Mobile responsive designs
- Filter systems
- Contact forms

Review these in `tests/screenshots/` to identify:
- Visual design patterns
- Information hierarchy
- User interaction flows
- Responsive breakpoints
- Performance bottlenecks

## 🚧 Troubleshooting

### Common Issues
```bash
# Browsers not installed
npx playwright install

# Network timeouts
# Edit playwright.config.ts timeout settings

# Screenshot failures
# Check disk space and permissions
```

### Debug Mode
```bash
# Run with browser visible
npm run test:domain:headed

# Enable debug logging
DEBUG=pw:api npm run test:domain

# Step-by-step execution
npx playwright test --debug
```

This analysis framework provides data-driven insights to build superior features that address real buyer pain points identified in competitor platforms.