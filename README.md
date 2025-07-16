# Portfolio SDE - Modern Portfolio Website

A stunning portfolio website built with Next.js, React, TypeScript, and Framer Motion. This project showcases modern web development practices with beautiful animations, responsive design, and cutting-edge UI/UX.

## 🚀 Features

- **Modern Design**: Dark theme with gradient accents and glassmorphism effects
- **Smooth Animations**: Powered by Framer Motion for fluid scroll-triggered animations
- **Responsive Layout**: Mobile-first design that works on all devices
- **Interactive Components**: Hover effects, animated buttons, and dynamic content
- **Performance Optimized**: Built with Next.js 15 for fast loading and SEO
- **TypeScript**: Fully typed for better development experience
- **Accessibility**: WCAG compliant with proper semantic HTML

## 📂 Project Structure

```
portfolio_sde/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── Navbar.tsx        # Navigation with scroll effects
│   │   │   ├── Hero.tsx          # Hero section with animated background
│   │   │   ├── About.tsx         # About section with skill cards
│   │   │   ├── Experience.tsx    # Work experience timeline
│   │   │   ├── Projects.tsx      # Project showcase with hover effects
│   │   │   └── Contact.tsx       # Contact form with animations
│   │   ├── globals.css          # Global styles and animations
│   │   ├── layout.tsx           # Root layout component
│   │   └── page.tsx             # Main page component
│   └── ...
├── public/                      # Static assets
├── requirements.txt            # Project dependencies
└── README.md                  # This file
```

## 🛠️ Technologies Used

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Development**: ESLint, Prettier
- **Deployment**: Vercel (recommended)

## 🚀 Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/portfolio_sde.git
   cd portfolio_sde
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Personal Information
Update the following files with your personal information:
- `src/app/components/Hero.tsx` - Name, title, and social links
- `src/app/components/About.tsx` - Bio, skills, and experience
- `src/app/components/Experience.tsx` - Work history
- `src/app/components/Projects.tsx` - Your projects
- `src/app/components/Contact.tsx` - Contact information

### Styling
- Colors and gradients can be customized in `tailwind.config.js`
- Custom animations are defined in `src/app/globals.css`
- Component-specific styles use Tailwind classes

### Adding New Sections
1. Create a new component in `src/app/components/`
2. Import and add it to `src/app/page.tsx`
3. Add navigation link to `src/app/components/Navbar.tsx`

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically on every push

### Other Platforms
- **Netlify**: Drag and drop the `out` folder after running `npm run build`
- **GitHub Pages**: Use GitHub Actions for automated deployment
- **AWS Amplify**: Connect your repository for continuous deployment

## 📱 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for LCP, CLS, and FID
- **Bundle Size**: Optimized with Next.js automatic code splitting
- **Images**: Optimized with Next.js Image component

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/portfolio_sde/issues).

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**
- Portfolio: [https://your-portfolio-url.com](https://your-portfolio-url.com)
- GitHub: [@yourusername](https://github.com/yourusername)
- Email: your.email@example.com

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [Tailwind CSS](https://tailwindcss.com/) for utility-first CSS
- [Lucide](https://lucide.dev/) for beautiful icons
- [Vercel](https://vercel.com/) for seamless deployment

---

⭐ If you like this project, please give it a star on GitHub!
