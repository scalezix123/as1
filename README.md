# Scalezix Academy - AI Education Platform

A complete, production-ready multi-page website for AI education with modern features, smooth animations, and integrated payment system.

## 🚀 Features

### Core Functionality
- **Multi-page Navigation** with smooth page transitions
- **Responsive Design** for all device sizes
- **SEO Optimization** with meta tags and structured data
- **Accessibility Features** with ARIA labels and keyboard navigation
- **Error Handling** with custom error boundaries and 404 page
- **Payment Integration** with secure checkout modal
- **Form Validation** with real-time feedback
- **Loading States** and user feedback for all actions

### Technical Features
- **Smooth Animations** using Framer Motion
- **Auto Scroll-to-Top** on page navigation
- **Toast Notifications** for user feedback
- **Error Boundaries** for graceful error handling
- **SEO Head Management** with React Helmet
- **Performance Optimized** with lazy loading and code splitting

### Pages
1. **Home** - Hero section with course previews
2. **About** - Company information, team, and values
3. **Courses** - Course catalog with search and filtering
4. **Course Single** - Detailed course pages with enrollment
5. **Admissions** - Application process and requirements
6. **Internships** - Internship opportunities and applications
7. **Workshop** - Workshop listings and registration
8. **Contact** - Contact information and inquiry forms
9. **Testimonials** - Student success stories and reviews
10. **404 Page** - Custom not found page

## 🛠 Technology Stack

- **Frontend**: React 18 with TypeScript
- **Routing**: React Router DOM v6
- **Animations**: Framer Motion
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **SEO**: React Helmet Async
- **Notifications**: React Hot Toast
- **Build Tool**: Vite
- **Package Manager**: npm

## 📦 Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd scalezix-academy
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Build for production**
```bash
npm run build
```

5. **Preview production build**
```bash
npm run preview
```

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:

```env
VITE_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
VITE_API_URL=your_api_url
VITE_SITE_URL=https://your-domain.com
```

### Payment Integration
The payment system is currently set up with a mock implementation. To integrate with a real payment gateway:

1. **Stripe Integration**:
   - Add your Stripe publishable key to environment variables
   - Update `PaymentModal.tsx` to use Stripe Elements
   - Implement server-side payment processing

2. **PayPal Integration**:
   - Install PayPal SDK: `npm install @paypal/react-paypal-js`
   - Replace payment modal with PayPal components
   - Configure PayPal client ID

### SEO Configuration
Update SEO settings in `src/components/SEOHead.tsx`:
- Default meta descriptions
- Open Graph images
- Twitter Card settings
- Canonical URLs

## 🎨 Customization

### Theme Colors
Update colors in `tailwind.config.js`:
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        }
      }
    }
  }
}
```

### Animation Settings
Modify animations in `src/components/PageTransition.tsx`:
```javascript
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 }
};
```

## 🚀 Deployment

### Netlify Deployment
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Configure redirects for SPA routing

### Vercel Deployment
1. Connect your repository to Vercel
2. Set build command: `npm run build`
3. Set output directory: `dist`

### Custom Server
1. Build the project: `npm run build`
2. Serve the `dist` folder with any static file server
3. Configure server for SPA routing

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔒 Security Features

- **Input Validation** on all forms
- **XSS Protection** with proper data sanitization
- **CSRF Protection** for form submissions
- **Secure Headers** configuration
- **Content Security Policy** implementation

## 📊 Performance Optimizations

- **Code Splitting** with React.lazy()
- **Image Optimization** with proper formats and sizes
- **Bundle Analysis** with webpack-bundle-analyzer
- **Caching Strategies** for static assets
- **Lazy Loading** for images and components

## 🧪 Testing

Run tests with:
```bash
npm run test
```

### Test Coverage
- Unit tests for components
- Integration tests for user flows
- E2E tests with Cypress
- Accessibility tests with axe-core

## 📈 Analytics Integration

Add analytics tracking:
```javascript
// Google Analytics
gtag('config', 'GA_MEASUREMENT_ID');

// Facebook Pixel
fbq('track', 'PageView');
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new features
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:
- Email: info@scalezixacademy.com
- Website: scalezixacademy.com
- Contact: Visit our contact page

## 🔄 Updates

### Version 1.0.0
- Initial release with all core features
- Payment integration
- SEO optimization
- Accessibility features
- Performance optimizations

### Roadmap
- [ ] User authentication system
- [ ] Course progress tracking
- [ ] Video streaming integration
- [ ] Mobile app development
- [ ] Advanced analytics dashboard