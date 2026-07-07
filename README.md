# Warrant Tsai — Software Engineer Portfolio

A modern, responsive portfolio website showcasing experience, projects, certifications, and cloud expertise. Built with React, TypeScript, and Tailwind CSS.

## 🌐 Live Demo

Visit the portfolio at: [https://warranttsai.github.io/portfolio-software-engineer/](https://warranttsai.github.io/portfolio-software-engineer/)

## 📋 About

This portfolio represents my journey as an Associate Engineer at Symphony3, with a focus on software engineering, cloud practice, and connected digital experiences. It features my professional experience, AWS certifications, and project highlights across React, TypeScript, AWS, and full-stack development.

## 🛠️ Tech Stack

- **Frontend Framework**: React 19
- **Language**: TypeScript 5.7
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS 3.4
- **Component Library**: Radix UI (Slot), Class Variance Authority
- **Animation**: Framer Motion 12
- **Icons**: Lucide React
- **Utilities**: clsx, tailwind-merge
- **Package Manager**: npm

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/warranttsai/portfolio-software-engineer.git
cd portfolio-software-engineer

# Install dependencies
npm install
```

### Development

```bash
# Start the development server
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
# Build the project
npm run build

# Preview the production build
npm run preview
```

The optimized build will be in the `dist/` folder.

## 📁 Project Structure

```
src/
├── components/          # Reusable React components
│   └── ui/             # UI components (Button, TeamShowcase, etc.)
├── content/            # Portfolio content and constants
│   └── portfolio.ts    # All portfolio data (experience, projects, skills)
├── assets/             # Images and media
│   ├── aws/            # AWS certification images
│   ├── symphony3/      # Symphony3 company photos
│   ├── social-media/   # Social media screenshots
│   └── career/         # Company logos
├── App.tsx             # Main application component
├── main.tsx            # React entry point
├── index.css           # Global styles
└── vite-env.d.ts       # Vite environment types

public/
└── favicon.svg         # Portfolio favicon

dist/                   # Production build (generated)
```

## 🎨 Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Smooth Animations**: Framer Motion for polished interactions
- **Dark Mode Ready**: Clean, modern aesthetic
- **Accessible Components**: Built with Radix UI primitives
- **Fast Performance**: Vite-optimized build and React 19

## 📄 Sections

- **Hero**: Introduction with portfolio photos
- **Experience**: Professional roles at Symphony3, Cleanstormwater, and others
- **Projects**: Featured work and learning paths
- **Certifications**: AWS certifications display
- **Social**: Instagram and project highlights

## 🔧 Configuration

All portfolio content is centralized in `src/content/portfolio.ts` for easy management:

- Profile information
- Navigation links
- Experience history
- Projects
- Certifications
- Social media gallery

## 📦 Build & Deployment

### GitHub Pages Deployment

```bash
# Build the project
npm run build

# Push dist/ folder to your deployment service
```

The `dist/` folder is excluded from git (see `.gitignore`).

### Recommended Deployment Options

- **GitHub Pages**: Free hosting directly from your repository
- **Vercel**: Optimized for Vite projects
- **Netlify**: Automatic deployments from git
- **AWS S3 + CloudFront**: For CDN distribution

## 🙏 Acknowledgments

This portfolio was created with support from:

- **[21st.dev](https://21st.dev)** — Development guidance and resources
- **[Claude AI](https://www.anthropic.com)** — AI-powered development assistance
- **[Kiro](https://kiro.dev)** — Intelligent development environment
- **[CodeX](https://codex.ai)** — Code generation and optimization

Special thanks to the open-source community for the amazing tools and libraries.

## 📝 License

This project is open source and available under the MIT License.

## 📧 Get in Touch

- **LinkedIn**: [warrant-tsai-9211223b8](https://www.linkedin.com/in/warrant-tsai-9211223b8/)
- **GitHub**: [@warranttsai](https://github.com/warranttsai)
- **Instagram**: [@warrant_mr_kaeru](https://www.instagram.com/warrant_mr_kaeru/)

---

**Last Updated**: July 2026
