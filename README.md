# Identity Page

[![MIT license](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE.md)

A **modern, responsive, single-page website** featuring a large image, introductory text, and social media links. Perfect as a digital business card or personal identity page.

## 🚀 Features

- **Modern Build System**: Vite with Hot Module Replacement
- **Responsive Design**: Mobile-first approach with CSS Grid/Flexbox
- **Performance Optimized**: Modern image formats (WebP, AVIF), lazy loading
- **Accessibility**: ARIA labels, focus management, screen reader support
- **Progressive Web App**: Web app manifest, service worker ready
- **Modern JavaScript**: ES modules, no jQuery dependency
- **Security**: Content Security Policy headers, secure defaults
- **SEO Optimized**: Open Graph, Twitter Cards, structured data

## 🛠️ Technology Stack

- **Build Tool**: Vite 5.x
- **Styling**: Sass with modern CSS features
- **JavaScript**: Vanilla ES2022+ modules
- **Linting**: ESLint + Prettier
- **Legacy Support**: Babel transpilation for older browsers

## 📋 Prerequisites

- Node.js 18+ and npm
- Modern browser with ES6+ support

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Format code
npm run format

# Lint code
npm run lint
```

## 📁 Project Structure

```
├── public/
│   ├── manifest.json       # Web app manifest
│   └── favicon.ico        # Favicon
├── src/
│   ├── js/
│   │   └── main.js        # Modern vanilla JavaScript
│   └── sass/
│       ├── base.scss      # Main stylesheet
│       ├── _hero.scss     # Hero section styles
│       ├── _mixins.scss   # Sass mixins
│       ├── constant.scss  # Design tokens
│       ├── reset.scss     # CSS reset
│       └── font.scss      # Typography
├── index.html             # Modern HTML5 structure
├── vite.config.js         # Vite configuration
└── package.json           # Dependencies and scripts
```

## 🎨 Customization

### Personal Information

Edit the content in `index.html`:

1. **Meta tags**: Update title, description, and social media info
2. **Hero content**: Modify name, bio, and description
3. **Social links**: Update href attributes and icons
4. **Images**: Replace hero images in `/images` directory

### Styling

Customize design tokens in `src/sass/constant.scss`:

```scss
// Color palette
$color-background: #101111;
$color-action: #ff00aa;
$color-text: #ffffff;

// Typography
$font-family: system-ui, sans-serif;

// Spacing and breakpoints
$breakpoint-md: 768px;
```

### Modern Image Formats

The template supports modern image formats. Optimize your hero images:

1. **WebP format**: Better compression than JPEG
2. **AVIF format**: Next-gen image format (when supported)
3. **Responsive images**: Multiple sizes with `srcset`

## 🔧 Development

### Hot Reload

The development server includes:
- Sass compilation with source maps
- ES module transpilation
- Auto-refresh on file changes
- Error overlay

### Code Quality

- **ESLint**: Modern JavaScript linting
- **Prettier**: Consistent code formatting
- **Sass linting**: Stylesheet best practices

## 🚀 Deployment

### Build Output

The production build creates:
- Minified and optimized assets
- Legacy browser support bundles
- Source maps for debugging
- Compressed static files

### Hosting Options

Deploy the `dist/` folder to any static hosting service:
- **Netlify**: `npm run build && netlify deploy --prod --dir=dist`
- **Vercel**: `npm run build && vercel --prod`
- **GitHub Pages**: Configure GitHub Actions workflow
- **Traditional hosting**: Upload `dist/` folder contents

## 🔒 Security

- Content Security Policy headers
- Secure external link handling (`rel="noopener noreferrer"`)
- Privacy-focused analytics configuration
- No client-side secrets or API keys

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- Color contrast compliance
- Reduced motion preferences

## 📱 Progressive Web App

- Web app manifest for installability
- Responsive design for all devices
- Offline-ready architecture
- App-like experience on mobile

## 🎯 Browser Support

- **Modern browsers**: Full ES6+ features
- **Legacy browsers**: Babel transpilation and polyfills
- **Mobile browsers**: Optimized touch interactions
- **Screen readers**: Full accessibility support

## 📈 Performance

- Lazy loading images
- CSS and JS minification
- Tree shaking and dead code elimination
- Modern image format support
- Critical resource preloading

## 👥 Contributing

1. Fork the repository
2. Create a feature branch
3. Follow the existing code style
4. Run linting and tests
5. Submit a pull request

## 🔄 Migration from v0.x

If upgrading from the old Gulp-based version:

1. **Dependencies**: Run `npm install` for new packages
2. **Build system**: Use `npm run dev` instead of `gulp watch`
3. **JavaScript**: jQuery removed - modern vanilla JS used
4. **Styling**: Sass modules with CSS custom properties
5. **Images**: Update to use `<picture>` element for better performance

## 📄 License

MIT License - see [LICENSE.md](LICENSE.md) for details.

## 🌟 Showcase

Sites using this template:

- [Fränz Friederes](https://fraenz.frieder.es/)
- [Daniel Zat](http://danielzat.com/)
- [Patrick Hummel](https://patrickhummel.com/)
- [Lisa Friederes](https://lisa.frieder.es/)
- [Oleg Klassen](http://www.ol3g.de/)
- [Tu-Phuong Ly](https://tuphuongly.com/)

---

**Built with ❤️ using modern web technologies**