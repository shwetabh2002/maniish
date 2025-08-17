# Xetralabs Landing Website

A modern, responsive landing website for Xetralabs built with Next.js, TypeScript, and Tailwind CSS. Features AI-driven intelligent services for next-generation businesses with a clean, minimalistic design inspired by modern tech companies.

## ✨ Features

- **Modern Design**: Clean, minimalistic visual style with large headings and ample whitespace
- **Responsive Layout**: Fully responsive design that works on all devices
- **Smooth Animations**: Animated section entrances and hover effects
- **Sticky Navigation**: Fixed header with smooth scrolling navigation
- **Component-Based Architecture**: Each section built as a separate React component
- **TypeScript Support**: Full TypeScript implementation for type safety
- **Performance Optimized**: Built with Next.js for optimal performance and SEO
- **Static Export**: Configured for static hosting on platforms like Cloudflare Pages

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: CSS animations and Framer Motion
- **Font**: Inter (Google Fonts)

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout component
│   ├── page.tsx             # Main page with all sections
│   └── not-found.tsx        # Custom 404 page
├── components/
│   ├── Header.tsx           # Navigation header with sticky behavior
│   ├── Hero.tsx             # Hero section with CTAs
│   ├── WhyChooseUs.tsx      # Key strengths and statistics
│   ├── Products.tsx         # AI modules and services
│   ├── IndustrySolutions.tsx# Industry-specific solutions
│   ├── Technology.tsx       # Technology stack showcase
│   ├── About.tsx            # Company information
│   ├── Careers.tsx          # Job openings and benefits
│   ├── Contact.tsx          # Contact form and information
│   └── Footer.tsx           # Footer with links and newsletter
public/
├── _redirects               # Cloudflare Pages redirects
└── _headers                 # Cloudflare Pages headers
```

## 🛠️ Installation & Setup

1. **Clone the repository** (or ensure you're in the project directory)
   ```bash
   cd xetralabs-landing
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the website.

## 📄 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production (static export)
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run export` - Build static export for deployment

## 🚀 Deployment

### Cloudflare Pages (Recommended)

This project is optimized for Cloudflare Pages deployment:

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Deploy to Cloudflare Pages"
   git push origin main
   ```

2. **Connect to Cloudflare Pages**
   - Go to [Cloudflare Pages](https://pages.cloudflare.com/)
   - Click "Create a project"
   - Connect your GitHub repository

3. **Build Settings**
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
   - **Root directory**: `/` (leave empty if repository root)

4. **Environment Variables** (if needed)
   - Node.js version: `18` or higher

The project includes:
- `_redirects` file for proper routing
- `_headers` file for security and caching
- Static export configuration
- Custom 404 page

### Other Platforms

#### Vercel
1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

#### Netlify
- Connect GitHub repo and deploy
- Build command: `npm run build`
- Publish directory: `out`

#### AWS Amplify
- Use GitHub integration
- Build settings: same as above

## 🎨 Design Features

### Color Scheme
- **Primary**: Deep blue (`#0066cc` and variations)
- **Secondary**: Light gray (`#f8fafc` to `#0f172a`)
- **Accent**: Primary blue with hover states

### Typography
- **Font Family**: Inter (Google Fonts)
- **Headings**: Bold, large sizes (4xl to 6xl)
- **Body**: Regular weight with good line height for readability

### Layout
- **Max Width**: 7xl (1280px) for main content
- **Spacing**: Consistent padding and margins using Tailwind spacing scale
- **Grid System**: CSS Grid and Flexbox for responsive layouts

## 🔧 Customization

### Updating Content
- Edit component files in `src/components/` to modify section content
- Update company information, services, and contact details as needed
- Modify the color scheme in `tailwind.config.js`

### Adding New Sections
1. Create a new component in `src/components/`
2. Import and add it to `src/app/page.tsx`
3. Add navigation links in `Header.tsx` if needed

### Styling Changes
- Modify `tailwind.config.js` for theme customization
- Update `src/app/globals.css` for global styles
- Use Tailwind utility classes in components for styling

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

All components are fully responsive and adapt to different screen sizes.

## 🌟 Key Sections

1. **Hero**: Bold headline with primary and secondary CTAs
2. **Why Choose Us**: Four key strengths with statistics
3. **Products & Services**: AI modules and comprehensive service offerings
4. **Industry Solutions**: Sector-specific offerings
5. **Technology**: Tech stack and capabilities
6. **About**: Company information and expertise areas
7. **Careers**: Job openings and company benefits
8. **Contact**: Contact form and company details
9. **Footer**: Links, social media, and newsletter signup

## 🐛 Troubleshooting

### 404 Errors on Deployed Site
If you're getting 404 errors on your deployed site:

1. Ensure you're using the static export build: `npm run build`
2. Check that `_redirects` file is in the `public/` directory
3. Verify build output directory is set to `out` in your hosting platform
4. Make sure `output: 'export'` is in your `next.config.js`

### Build Issues
- Ensure all dependencies are installed: `npm install`
- Check Node.js version (18+ recommended)
- Clear cache: `rm -rf .next out node_modules && npm install`

## 📞 Support

For questions or issues related to this website:
- Email: hello@xetralabs.com
- Phone: +1 (555) 123-4567

## 📄 License

This project is proprietary software of Xetralabs. All rights reserved.

---

Built with ❤️ by the Xetralabs team