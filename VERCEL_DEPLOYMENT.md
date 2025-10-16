# Vercel Deployment Instructions

## Issue: 404 Error on Vercel

The 404 error occurs because Vercel needs to deploy the frontend folder specifically, not the entire monorepo.

## Solution: Deploy Frontend Subfolder

### Option 1: Vercel Dashboard (Recommended)

1. **Go to Vercel Dashboard**: https://vercel.com/dashboard
2. **Import Project**: Click "Add New..." → "Project"
3. **Select Repository**: Choose `discover_property` from GitHub
4. **Configure Project**:
   - **Framework Preset**: Next.js
   - **Root Directory**: `frontend` (IMPORTANT)
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
   - **Install Command**: `npm install`

5. **Environment Variables** (Optional for now):
   ```
   NEXT_PUBLIC_API_URL=https://api.discover-property.com
   NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN=(your token)
   ```

6. **Deploy**: Click "Deploy"

### Option 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Navigate to frontend folder
cd frontend

# Deploy
vercel --prod

# Follow prompts:
# - Link to existing project? No
# - Project name: discover-property-frontend
# - Directory: ./
```

### Option 3: GitHub Actions (Future)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel
on:
  push:
    branches: [main]
    paths: ['frontend/**']

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
          working-directory: ./frontend
```

## Expected Result

After correct deployment:
- ✅ Homepage loads with AI property search interface
- ✅ Responsive design works on mobile
- ✅ No 404 errors
- ✅ Fast loading with Next.js optimizations

## Troubleshooting

### Still Getting 404?

1. **Check Root Directory**: Must be set to `frontend` in Vercel project settings
2. **Verify Build**: Check build logs in Vercel dashboard
3. **Test Locally**: Run `npm run build` in frontend folder first

### Build Errors?

1. **Dependencies**: Ensure all packages install correctly
2. **Environment**: Check if any environment variables are required
3. **TypeScript**: Verify no type errors in build

### Performance Issues?

1. **Image Optimization**: Already configured in next.config.ts
2. **Bundle Analysis**: Run `npm run build` to see bundle sizes
3. **Core Web Vitals**: Check Vercel Analytics after deployment

## Current Status

- ✅ Frontend builds successfully locally
- ✅ All dependencies installed
- ✅ TypeScript and ESLint passing
- 🔄 Needs proper Vercel project configuration

The key is setting the **Root Directory** to `frontend` in Vercel project settings!