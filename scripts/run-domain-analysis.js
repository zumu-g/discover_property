#!/usr/bin/env node

/**
 * Domain.com.au Competitive Analysis Script
 * 
 * This script runs the Playwright test suite to analyze Domain.com.au
 * from a buyer's perspective and generates a comprehensive report.
 */

const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

async function runDomainAnalysis() {
  console.log('🔍 Starting Domain.com.au Competitive Analysis...\n');

  // Ensure screenshots directory exists
  const screenshotsDir = path.join(__dirname, '../tests/screenshots');
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir, { recursive: true });
  }

  // Run Playwright tests for Domain analysis
  const testProcess = spawn('npx', ['playwright', 'test', 'tests/competitive-analysis/domain-review.spec.ts', '--reporter=line'], {
    cwd: path.join(__dirname, '..'),
    stdio: 'inherit'
  });

  testProcess.on('close', (code) => {
    if (code === 0) {
      console.log('\n✅ Domain.com.au analysis completed successfully!');
      console.log('\n📊 Analysis Results:');
      console.log('- Screenshots saved to: tests/screenshots/');
      console.log('- Test report available at: playwright-report/');
      console.log('\n🚀 Next Steps:');
      console.log('1. Review screenshots for UX insights');
      console.log('2. Run: npm run test:report (to view detailed results)');
      console.log('3. Use findings to enhance Discover Real Estate features');
    } else {
      console.log('\n❌ Analysis failed with code:', code);
      console.log('💡 Try running: npm run test:domain:headed (to see browser)');
    }
  });

  testProcess.on('error', (error) => {
    console.error('❌ Error running analysis:', error.message);
    console.log('\n💡 Troubleshooting:');
    console.log('1. Ensure browsers are installed: npx playwright install');
    console.log('2. Check internet connection');
    console.log('3. Try headed mode: npm run test:domain:headed');
  });
}

// Add helper commands
if (process.argv.includes('--help') || process.argv.includes('-h')) {
  console.log(`
🔍 Domain.com.au Competitive Analysis

Usage:
  node scripts/run-domain-analysis.js [options]

Options:
  --help, -h     Show this help message
  --headed       Run with visible browser
  --debug        Run with debug output

Examples:
  node scripts/run-domain-analysis.js
  node scripts/run-domain-analysis.js --headed
  npm run test:domain
  npm run test:domain:headed

Output:
  - Screenshots: tests/screenshots/domain-*.png
  - HTML Report: playwright-report/index.html
  - Console logs with performance metrics
`);
  process.exit(0);
}

// Run the analysis
runDomainAnalysis().catch(console.error);