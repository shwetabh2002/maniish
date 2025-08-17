# Cloudflare Pages Deployment Troubleshooting

## Current Issue: 404 Errors

If you're still getting 404 errors on Cloudflare Pages, here are step-by-step troubleshooting instructions:

### 1. Verify Cloudflare Pages Settings

In your Cloudflare Pages dashboard:

**Build Configuration:**
- Build command: `npm run build`
- Build output directory: `out`
- Root directory: `/` (leave empty)
- Node.js version: `18` or `20`

### 2. Check Build Logs

Look at the build logs in Cloudflare Pages to ensure:
- All dependencies installed successfully
- Build completed without errors
- Files were deployed to the correct directory

### 3. Verify Generated Files

The `out/` directory should contain:
- `index.html` (main page)
- `404.html` (error page)
- `_redirects` (routing rules)
- `_headers` (security headers)
- `_next/` directory (static assets)
- `functions/` directory (middleware)

### 4. Test Different URLs

Try accessing:
- `https://your-site.pages.dev/` (root)
- `https://your-site.pages.dev/index.html` (direct file)
- `https://your-site.pages.dev/404.html` (error page)

### 5. Check Developer Tools

Open browser developer tools (F12) and check:
- **Console tab**: Look for JavaScript errors
- **Network tab**: Check if resources are loading (CSS, JS)
- **Sources tab**: Verify files are accessible

### 6. Alternative Deployment Methods

If the issue persists, try these alternatives:

#### Option A: Manual Upload
1. Download the `out/` folder
2. In Cloudflare Pages, create a new project
3. Upload the `out/` folder directly

#### Option B: Different Hosting Platform
```bash
# Deploy to Vercel (alternative)
npm i -g vercel
vercel --prod

# Deploy to Netlify
npm i -g netlify-cli
netlify deploy --prod --dir=out
```

### 7. Common Issues & Solutions

#### Issue: "Cannot GET /" error
**Solution**: Ensure `index.html` exists in root of `out/` directory

#### Issue: CSS/JS not loading
**Solution**: Check if `_next/static/` files are being served properly

#### Issue: Routing not working
**Solution**: Verify `_redirects` file is in the `out/` directory

#### Issue: Functions not working
**Solution**: Ensure `functions/_middleware.js` is deployed

### 8. Debug Commands

Run these locally to verify the build:

```bash
# Clean rebuild
rm -rf .next out node_modules
npm install
npm run build

# Verify files exist
ls -la out/
cat out/_redirects
cat out/_headers

# Test locally with a static server
npx serve out
```

### 9. Contact Information

If issues persist:
- Check Cloudflare Pages status page
- Review Cloudflare Pages documentation
- Try deploying a simple HTML file first to test the setup

### 10. Working Configuration Summary

This is what should work:

**File Structure:**
```
out/
├── index.html          # Main page
├── 404.html           # Error page
├── _redirects         # Routing rules
├── _headers           # Security headers
├── functions/
│   └── _middleware.js # Routing middleware
└── _next/
    └── static/        # CSS, JS, fonts
```

**_redirects content:**
```
# Handle client-side routing
/* /index.html 200

# Specific routes (if needed)
/products /index.html 200
/industries /index.html 200
/technology /index.html 200
/about /index.html 200
/careers /index.html 200
/contact /index.html 200
```

**Build settings:**
- Build command: `npm run build`
- Build output directory: `out`
- Environment variables: None required
- Node.js version: 18+

If you're still having issues, the problem might be with:
1. GitHub repository permissions
2. Cloudflare account settings
3. DNS/domain configuration
4. Build environment differences

Try creating a minimal test deployment first with just a simple HTML file to verify the Cloudflare Pages setup is working correctly. 