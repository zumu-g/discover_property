# Richardson & Wrench Website - Comprehensive Style Guide

*Based on detailed analysis of https://www.randw.com.au/ using Playwright automation and web scraping*

## Executive Summary

Richardson & Wrench employs a professional, heritage-focused design system that emphasizes trust, clarity, and user-friendly property discovery. The design balances modern web standards with traditional real estate industry expectations.

## 1. Typography System

### Primary Font Family
- **Main Font**: "Manrope", sans-serif
- **Icon Font**: "icomoon" (custom icon font)
- **Fallback**: sans-serif

### Font Size Scale
```css
/* Extracted font sizes */
font-size: 11.9px;  /* Small labels/captions */
font-size: 16px;    /* Body text */
font-size: 17px;    /* Primary body text */
font-size: 21px;    /* Subheadings */
font-size: 34px;    /* Section headings */
font-size: 36px;    /* Large headings */
font-size: 96px;    /* Hero/display text */
```

### Font Weights
```css
font-weight: 100;   /* Ultra light */
font-weight: 200;   /* Light */
font-weight: 300;   /* Light */
font-weight: 400;   /* Regular/Normal */
```

### Line Heights
```css
line-height: normal;    /* Default */
line-height: 25.5px;    /* Body text */
line-height: 34px;      /* Subheadings */
line-height: 35px;      /* Headings */
line-height: 44px;      /* Large headings */
line-height: 124.8px;   /* Display text */
```

### Typography Hierarchy
1. **Hero Text**: 96px, light weight, 124.8px line-height
2. **Page Headings**: 36px, normal weight, 44px line-height
3. **Section Headings**: 34px, normal weight, 35px line-height
4. **Subheadings**: 21px, normal weight, 34px line-height
5. **Body Text**: 17px, normal weight, 25.5px line-height
6. **Secondary Text**: 16px, normal weight
7. **Small Text/Labels**: 11.9px, light weight

## 2. Color System

### Primary Color Palette
```css
/* Background Colors */
--background-primary: rgb(247, 244, 234);    /* Warm off-white */

/* Text Colors */
--text-primary: rgb(18, 29, 40);             /* Dark navy */
--text-white: rgb(255, 255, 255);            /* Pure white */
--text-accent: rgb(220, 30, 53);             /* Brand red */
--text-muted: rgb(247, 244, 234);            /* Light background color used as text */
```

### Color Usage Guidelines
- **Primary Text**: Dark navy (rgb(18, 29, 40)) for main content
- **Accent Color**: Brand red (rgb(220, 30, 53)) for CTAs and highlights
- **Background**: Warm off-white (rgb(247, 244, 234)) for main background
- **Contrast Text**: White text on dark backgrounds

### Brand Colors (Inferred)
- **Primary Brand**: Navy blue (18, 29, 40)
- **Secondary Brand**: Red accent (220, 30, 53)
- **Neutral**: Warm off-white (247, 244, 234)

## 3. Spacing System

### Margin Values
```css
/* Common margin patterns */
margin: 0px 0px 30px;        /* Bottom margin for sections */
margin: auto;                /* Centered elements */
margin: 0px 10px 0px 0px;    /* Right margin */
margin: 25.5px auto 17px;    /* Complex vertical spacing */
margin: 1px;                 /* Minimal margin */
```

### Padding Values
```css
/* Common padding patterns */
padding: 0px 8.5px;          /* Horizontal padding */
padding: 15px;               /* All-around padding */
```

### Spacing Scale (Recommended)
```css
/* Derived spacing system */
--spacing-xs: 1px;
--spacing-sm: 8.5px;
--spacing-md: 15px;
--spacing-lg: 17px;
--spacing-xl: 25.5px;
--spacing-xxl: 30px;
```

## 4. Layout System

### Grid System
- **Property Cards**: 2-column fluid grid layout
- **Container Class**: `fluidgrid-cell`, `fluidgrid-cell-2`
- **Responsive**: Mobile-first approach with responsive breakpoints

### Layout Patterns
```css
/* Layout classes observed */
.fluidgrid-cell        /* Grid cell container */
.fluidgrid-cell-2      /* 2-column grid cell */
.box-light            /* Light background box */
.box-link             /* Interactive box component */
.hidden-phone         /* Hide on mobile devices */
```

### Container Widths
- **Desktop**: Full width with max-width constraints
- **Tablet**: Responsive scaling
- **Mobile**: Single column, full width

## 5. Component Patterns

### Property Cards
```css
/* Property card structure */
.property-card {
  display: grid;
  grid-template-columns: 1fr 1fr; /* 2-column on desktop */
  gap: 15px;
  padding: 15px;
  background: rgb(247, 244, 234);
  border-radius: /* Not captured but likely small radius */;
}

@media (max-width: 768px) {
  .property-card {
    grid-template-columns: 1fr; /* Single column on mobile */
  }
}
```

### Navigation
- **Structure**: Dual-level menu system
- **Mobile**: Responsive dropdown/accordion
- **Styling**: Clean, minimal design

### Buttons
- **Primary**: Red accent color (rgb(220, 30, 53))
- **Secondary**: White background with dark text
- **Hover States**: Implemented but not captured in analysis

### Cards/Boxes
- **Background**: Light background (rgb(247, 244, 234))
- **Interactive**: `box-link` class for clickable cards
- **Spacing**: 15px padding standard

## 6. Responsive Design

### Breakpoints (Estimated)
```css
/* Mobile First Approach */
@media (min-width: 375px)  { /* Mobile */ }
@media (min-width: 768px)  { /* Tablet */ }
@media (min-width: 1440px) { /* Desktop */ }
```

### Responsive Patterns
- **Navigation**: Collapsible menu on mobile
- **Grid**: 2-column to 1-column property cards
- **Typography**: Scalable font sizes
- **Images**: Responsive image scaling

## 7. Interactive Elements

### Animations & Transitions
- **Navigation**: Smooth menu transitions
- **Cards**: Hover state effects
- **Scrolling**: Smooth scrolling behavior
- **Image Galleries**: Lightbox-style overlays

### Hover States
- Property cards have hover effects
- Navigation items have interactive states
- Buttons have hover transitions

## 8. Component Library Recommendations

### Button Components
```css
.btn-primary {
  background-color: rgb(220, 30, 53);
  color: white;
  padding: 15px;
  font-family: "Manrope", sans-serif;
  font-weight: 400;
  border: none;
  border-radius: 4px; /* Estimated */
}

.btn-secondary {
  background-color: rgb(247, 244, 234);
  color: rgb(18, 29, 40);
  padding: 15px;
  font-family: "Manrope", sans-serif;
  font-weight: 400;
  border: 1px solid rgb(18, 29, 40);
  border-radius: 4px;
}
```

### Card Components
```css
.card {
  background-color: rgb(247, 244, 234);
  padding: 15px;
  margin-bottom: 30px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(18, 29, 40, 0.1);
}

.card-interactive {
  cursor: pointer;
  transition: all 0.3s ease;
}

.card-interactive:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(18, 29, 40, 0.15);
}
```

### Typography Components
```css
.heading-hero {
  font-family: "Manrope", sans-serif;
  font-size: 96px;
  font-weight: 100;
  line-height: 124.8px;
  color: rgb(18, 29, 40);
}

.heading-page {
  font-family: "Manrope", sans-serif;
  font-size: 36px;
  font-weight: 400;
  line-height: 44px;
  color: rgb(18, 29, 40);
  margin-bottom: 30px;
}

.text-body {
  font-family: "Manrope", sans-serif;
  font-size: 17px;
  font-weight: 400;
  line-height: 25.5px;
  color: rgb(18, 29, 40);
}

.text-accent {
  color: rgb(220, 30, 53);
}
```

## 9. Design Principles

### Visual Hierarchy
1. **Heritage & Trust**: Professional, established brand presence
2. **Clarity**: Clean typography and ample whitespace
3. **User-Friendly**: Intuitive navigation and search functionality
4. **Image-Driven**: Property photos are prominently featured
5. **Responsive**: Mobile-first, accessible design

### Brand Guidelines
- **Tone**: Professional, trustworthy, heritage-focused
- **Colors**: Muted, sophisticated palette
- **Typography**: Clean, modern sans-serif
- **Imagery**: High-quality property photography
- **Layout**: Grid-based, organized, systematic

## 10. Implementation Guidelines

### CSS Custom Properties
```css
:root {
  /* Colors */
  --color-primary: rgb(18, 29, 40);
  --color-accent: rgb(220, 30, 53);
  --color-background: rgb(247, 244, 234);
  --color-white: rgb(255, 255, 255);
  
  /* Typography */
  --font-family-primary: "Manrope", sans-serif;
  --font-family-icons: "icomoon";
  
  /* Font Sizes */
  --font-size-xs: 11.9px;
  --font-size-sm: 16px;
  --font-size-base: 17px;
  --font-size-lg: 21px;
  --font-size-xl: 34px;
  --font-size-2xl: 36px;
  --font-size-hero: 96px;
  
  /* Line Heights */
  --line-height-tight: 34px;
  --line-height-normal: 35px;
  --line-height-relaxed: 44px;
  --line-height-loose: 124.8px;
  
  /* Spacing */
  --spacing-xs: 1px;
  --spacing-sm: 8.5px;
  --spacing-md: 15px;
  --spacing-lg: 17px;
  --spacing-xl: 25.5px;
  --spacing-2xl: 30px;
  
  /* Breakpoints */
  --breakpoint-mobile: 375px;
  --breakpoint-tablet: 768px;
  --breakpoint-desktop: 1440px;
}
```

## 11. Files Generated

### Analysis Assets
- **Screenshots**: `/screenshots/randw-analysis/`
  - Homepage full page and sections
  - Property listings page
  - Responsive views (mobile, tablet, desktop)
- **Raw Data**: `/randw-style-analysis.json`
- **Initial Report**: `/randw-style-report.md`
- **This Comprehensive Guide**: `/RANDW_COMPREHENSIVE_STYLE_GUIDE.md`

### Key Screenshots Available
- `homepage-full.png` - Complete homepage
- `homepage-section-1.png` to `homepage-section-5.png` - Individual sections
- `property-listings-full.png` - Property search page
- `responsive-mobile.png`, `responsive-tablet.png`, `responsive-desktop.png` - Responsive views

## 12. Recommendations for Similar Property Marketplace

### Core Design Elements to Implement
1. **Clean Typography**: Use Manrope or similar professional sans-serif
2. **Muted Color Palette**: Implement the navy/red/cream color scheme
3. **Grid-Based Layout**: 2-column property cards with responsive behavior
4. **Professional Imagery**: High-quality property photography
5. **User-Friendly Navigation**: Clear, hierarchical menu structure
6. **Trust Indicators**: Professional styling that conveys reliability
7. **Mobile-First Design**: Responsive, touch-friendly interface

### Technical Implementation
- Use CSS Grid for property listings
- Implement CSS Custom Properties for consistent theming
- Ensure accessibility with proper color contrast
- Use semantic HTML for better SEO
- Implement smooth transitions and hover states
- Progressive enhancement for interactive features

This comprehensive style guide provides all the necessary information to recreate or adapt the Richardson & Wrench design system for a similar property marketplace website.