# GirjaSoft Landing Website

A modern, fully responsive landing website for GirjaSoft - Comprehensive IT infrastructure solutions for modern businesses. Built with Next.js, TypeScript, and TailwindCSS with a focus on mobile-first design and exceptional user experience.

## 🌟 Features

### 📱 **Mobile-First Responsive Design**
- **Optimized for all devices**: Seamless experience across mobile phones, tablets, and desktops
- **Touch-friendly navigation**: Mobile hamburger menu with smooth interactions
- **Adaptive layouts**: Grid systems that reflow beautifully on any screen size
- **Scalable typography**: Text sizes that adjust perfectly across breakpoints
- **Flexible CTAs**: Buttons and forms optimized for touch interactions

### 🎨 **Modern Design System**
- Clean, minimalistic visual style with deep blue (#1e40af) and light gray color scheme
- Large headings, generous whitespace, and intuitive user interface
- Smooth animations and hover effects for enhanced interactivity
- Vector-style illustrations and geometric design elements
- Consistent spacing and typography following design best practices

### 🚀 **Technical Excellence**
- **Next.js 14** with App Router for optimal performance
- **TypeScript** for type safety and better development experience
- **TailwindCSS** for utility-first, responsive styling
- **Static Site Generation (SSG)** for fast loading times
- **Framer Motion** for smooth animations (optional enhancement)
- **Accessibility focused** with proper ARIA labels and keyboard navigation

### 🔧 **Core Sections**
- **Hero Section**: Compelling headline with dual CTAs ("About Us" & "Contact Us")
- **Why Choose Us**: Key value propositions with stats and metrics
- **Products & Services**: Comprehensive showcase of IT infrastructure and support services
- **Industry Solutions**: Targeted solutions for various sectors
- **Technology Stack**: Modern tech capabilities and certifications
- **About Us**: Company story, expertise, and core values
- **Contact**: Multi-channel contact options with responsive form
- **Footer**: Complete site navigation and newsletter subscription

## 🏗️ **Technical Architecture**

### Component Structure
```
src/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout with SEO meta tags
│   ├── page.tsx             # Main page component
│   └── not-found.tsx        # Custom 404 page for static hosting
└── components/
    ├── Header.tsx           # Responsive navigation with mobile menu
    ├── Hero.tsx             # Hero section with animated elements
    ├── WhyChooseUs.tsx      # Value propositions and statistics
    ├── Products.tsx         # Products and services showcase
    ├── IndustrySolutions.tsx # Industry-specific solutions
    ├── Technology.tsx       # Technology stack and capabilities
    ├── About.tsx            # Company information and values
    ├── Careers.tsx          # Career opportunities
    ├── Contact.tsx          # Contact form and information
    └── Footer.tsx           # Site footer with links and newsletter
```

### 📱 **Mobile Responsiveness Features**

#### **Header Component**
- Collapsible hamburger menu for mobile devices
- Sticky navigation with scroll-based background changes
- Touch-optimized button sizes (minimum 44px)
- Responsive logo sizing and proper spacing

#### **Hero Section**
- Stacked layout on mobile, side-by-side on desktop
- Responsive typography (3xl → 6xl across breakpoints)
- Full-width CTAs on mobile, inline on desktop
- Adaptive illustration sizing and positioning

#### **Content Sections**
- Single-column layouts on mobile, multi-column on larger screens
- Responsive card grids (1 col → 2 col → 4 col)
- Touch-friendly spacing and interaction areas
- Optimized image and icon sizing across devices

#### **Forms & Interactions**
- Stack form fields on mobile, grid layout on desktop
- Large, touch-friendly input fields and buttons
- Responsive form validation and error states
- Accessible focus management and keyboard navigation

## 🚀 **Getting Started**

### Prerequisites
- Node.js 18+ and npm
- Git for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd manii
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

```bash
npm run dev      # Start development server with hot reload
npm run build    # Create production build with static export
npm run start    # Start production server (after build)
npm run lint     # Run ESLint for code quality checks
npm run export   # Generate static files for deployment
```

## 📦 **Deployment**

### Cloudflare Pages (Recommended)

1. **Configure Build Settings**:
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
   - **Node.js version**: 18.x or higher

2. **Custom Domain Setup** (Optional):
   - Add your custom domain in Cloudflare Pages dashboard
   - Update DNS records to point to Cloudflare

3. **Environment Variables** (if needed):
   ```bash
   NODE_ENV=production
   NEXT_TELEMETRY_DISABLED=1
   ```

### Other Static Hosting Platforms

**Vercel:**
```bash
npm run build
# Deploy the 'out' directory
```

**Netlify:**
- Build command: `npm run build`
- Publish directory: `out`
- Node version: 18.x

**GitHub Pages:**
- Enable GitHub Actions
- Deploy from 'out' directory after build

## 🎨 **Customization**

### Color Scheme
The website uses a deep blue and light gray color palette defined in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#eff6ff',   // Light blue backgrounds
    100: '#dbeafe',  // Icon backgrounds
    600: '#2563eb',  // Primary buttons, links
    700: '#1d4ed8',  // Hover states
    800: '#1e40af'   // Headers, dark text
  }
}
```

### Typography
- **Font Family**: Inter (Google Fonts)
- **Responsive Scaling**: `text-sm` to `text-6xl` across breakpoints
- **Mobile-first approach**: Base sizes optimized for mobile, scaled up for desktop

### Layout Breakpoints
```css
sm: '640px'   /* Small tablets and large phones */
md: '768px'   /* Tablets */
lg: '1024px'  /* Small laptops */
xl: '1280px'  /* Desktops */
```

## 🛠️ **Development Guidelines**

### **Mobile-First Development**
1. Start with mobile styles (no prefix)
2. Add responsive prefixes (`sm:`, `md:`, `lg:`, `xl:`) for larger screens
3. Test on multiple device sizes regularly
4. Ensure touch targets are minimum 44px

### **Component Best Practices**
- Use semantic HTML elements
- Include proper ARIA labels for accessibility
- Implement loading states and error handling
- Follow TypeScript strict mode guidelines

### **Performance Optimization**
- Lazy load images and heavy components
- Use Next.js Image optimization where applicable
- Minimize bundle size with tree shaking
- Implement proper caching strategies

## 🔧 **Troubleshooting**

### **Common Build Issues**

**TypeScript Errors:**
```bash
npm run lint
# Fix any TypeScript or ESLint issues
```

**Build Failures:**
```bash
rm -rf .next out node_modules
npm install
npm run build
```

**Mobile Layout Issues:**
- Check responsive breakpoints in browser dev tools
- Verify Tailwind classes are applied correctly
- Test on actual devices, not just browser simulation

### **Deployment Issues**

**Cloudflare Pages 404 Errors:**
- Ensure build output directory is set to `out`
- Verify `_redirects` file is in place for SPA routing
- Check build logs for any compilation errors

## 📄 **Browser Support**

- **Mobile**: iOS Safari 12+, Chrome Mobile 80+, Samsung Internet 10+
- **Desktop**: Chrome 80+, Firefox 75+, Safari 13+, Edge 80+
- **Touch Support**: Full touch and gesture support on mobile devices
- **Accessibility**: WCAG 2.1 AA compliance for screen readers and keyboard navigation

## 📝 **License**

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 **Contributing**

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

**Built with ❤️ using Next.js, TypeScript, and TailwindCSS**

For questions or support, please contact [info@girjasoft.com](mailto:info@girjasoft.com)