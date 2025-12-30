# Jagan Murugaiyan - Portfolio Website

A modern, professional portfolio website built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS** featuring dark/light theme support.

## 🌐 Live Demo

**[https://jaganedits.github.io/portfolio](https://jaganedits.github.io/portfolio)**

## ✨ Features

- **Dark/Light Theme** - Dark theme by default with smooth toggle transitions
- **Modern UI/UX** - Sleek design with neon green accents
- **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile
- **Interactive Components** - Expandable project cards, smooth scrolling, hover effects
- **Optimized Performance** - Built with Vite for fast loading times
- **TypeScript** - Full type safety throughout the codebase
- **Framer Motion** - Smooth animations and scroll-triggered effects
- **Theme Persistence** - Remembers your theme preference

## 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool & dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## 📦 Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/jaganedits/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**: Navigate to `http://localhost:5173`

## 🚀 Deploy to GitHub Pages

The project is pre-configured for GitHub Pages deployment:

```bash
# Build and deploy in one command
npm run deploy
```

This will automatically:
1. Build the production bundle
2. Push to the `gh-pages` branch
3. Deploy to `https://jaganedits.github.io/portfolio`

### First Time Setup

1. Create a new repository named `portfolio` on GitHub
2. Push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/jaganedits/portfolio.git
   git push -u origin main
   ```
3. Deploy:
   ```bash
   npm run deploy
   ```
4. Go to repository Settings → Pages → Select `gh-pages` branch

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx      # Navigation with theme toggle
│   │   ├── Hero.tsx        # Hero section
│   │   ├── About.tsx       # About section
│   │   ├── Skills.tsx      # Skills showcase
│   │   ├── Experience.tsx  # Work experience
│   │   ├── Projects.tsx    # Project showcase
│   │   ├── Education.tsx   # Education section
│   │   ├── Contact.tsx     # Contact form
│   │   └── Footer.tsx      # Footer
│   ├── context/
│   │   └── ThemeContext.tsx # Theme provider
│   ├── data/
│   │   └── resume.ts       # All portfolio data
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css           # Global styles with theme variables
├── index.html
├── tailwind.config.js
├── vite.config.ts          # Configured with base: '/portfolio/'
└── package.json            # Includes deploy scripts
```

## ✏️ Customization

### Update Your Information

Edit `src/data/resume.ts` to update:
- Personal information (name, email, phone, location)
- Skills and technologies
- Work experience
- Projects
- Education

### Change Theme Colors

Edit `src/index.css` CSS variables:

**Dark Theme (`:root`)**:
- `--color-accent: 0 255 136` - Neon green accent

**Light Theme (`.light`)**:
- `--color-accent: 0 180 90` - Darker green for better contrast

## 👤 Author

**Jagan Murugaiyan**
- LinkedIn: [linkedin.com/in/jaganedits](https://linkedin.com/in/jaganedits)
- GitHub: [github.com/jaganedits](https://github.com/jaganedits)
- Email: jaganeditz@gmail.com

## 📄 License

This project is open source and available for personal use.
