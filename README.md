# Discover Property

AI-powered Australian property marketplace built with Next.js 15, TypeScript, and Tailwind CSS.

## 📂 Project Structure

```
/
├── src/app/           # Next.js App Router pages
├── backend/           # NestJS API server
├── database/          # PostgreSQL configuration
├── tests/             # Playwright test suites
└── scripts/           # Utility scripts
```

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

## 🔧 Development Status

**Phase 1: Complete ✅**
- [x] Project structure setup
- [x] Next.js 15 + TypeScript configuration
- [x] Tailwind CSS styling
- [x] Clean monorepo structure
- [x] Vercel deployment configuration fixed
- [x] Richardson & Wrench design system implementation
- [x] Manrope typography integration
- [x] Professional color palette and spacing system

**Design System Implementation:**
- ✅ R&W color palette (navy, red, cream) applied
- ✅ Manrope font family with complete weight scale
- ✅ Professional spacing system (1px-30px)
- ✅ Component classes for buttons, cards, typography
- ✅ Comprehensive style guide documentation
- ✅ Homepage redesigned with R&W aesthetic

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, TypeScript, Tailwind CSS, shadcn/ui, Manrope font
- **Backend**: NestJS, TypeScript
- **Database**: PostgreSQL
- **Testing**: Playwright
- **Deployment**: Vercel

## 🎨 Design System

The project now implements Richardson & Wrench's professional design system:

- **Typography**: Manrope font family with 7 weight variants
- **Colors**: Navy text (rgb(18,29,40)), red accents (rgb(220,30,53)), cream background (rgb(247,244,234))
- **Spacing**: Professional scale from 1px to 30px
- **Components**: Pre-built classes for buttons, cards, and typography hierarchy
- **Documentation**: Complete style guide at `RANDW_COMPREHENSIVE_STYLE_GUIDE.md`

## 📝 Notes

**Current Status**: Phase 1 complete with R&W design system implemented (commit `21b6d10`).
Ready for Phase 2: Core property search and mapping features.

**Next Steps**: 
- Implement interactive property map with Mapbox
- Add natural language search functionality
- Create property listing system
