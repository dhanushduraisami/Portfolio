# 🌟 Dhanush Durai Samy - Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. Features a clean design with dark mode support, smooth animations, and optimal performance.

![Portfolio Preview](https://img.shields.io/badge/React-19.1.0-blue)
![Vite](https://img.shields.io/badge/Vite-7.0.4-purple)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.11-cyan)

## ✨ Features

### Industry-Standard Enhancements

- 🎨 **Modern UI/UX**: Clean, professional design with smooth transitions
- 🌓 **Dark Mode**: Built-in theme toggle for better user experience
- 📱 **Fully Responsive**: Optimized for all device sizes
- ⚡ **Performance Optimized**: 
  - Code splitting with React.lazy()
  - Lazy loading images
  - Optimized bundle size
- ♿ **Accessibility (a11y)**:
  - ARIA labels and roles
  - Semantic HTML
  - Keyboard navigation support
  - Screen reader friendly
- 🔍 **SEO Optimized**:
  - Meta tags and Open Graph tags
  - Structured data (Schema.org)
  - Semantic HTML structure
- ✅ **Form Validation**: Real-time validation with user feedback
- 🎯 **Contact Integration**: EmailJS for contact form functionality
- 📄 **Resume Download**: One-click resume download feature
- 🎭 **Smooth Animations**: Custom CSS animations and transitions

### Sections

- **Hero Section**: Eye-catching introduction with call-to-action
- **About Section**: Professional background and expertise
- **Skills Section**: Interactive skill showcase with filtering
- **Projects Section**: Portfolio of completed projects with live demos
- **Contact Section**: Validated contact form with social links

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/dhanushduraisami/my-portfolio.git
   cd my-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up EmailJS** (for contact form)
   - Create a free account at [EmailJS](https://www.emailjs.com/)
   - Get your Service ID, Template ID, and User ID
   - Update the values in `src/components/ContactSection.jsx`:
     ```javascript
     emailjs.sendForm(
       'YOUR_SERVICE_ID',
       'YOUR_TEMPLATE_ID',
       e.target,
       'YOUR_USER_ID'
     )
     ```

4. **Add your resume**
   - Replace `public/resume.pdf` with your actual resume PDF

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   - Navigate to `http://localhost:5173`

## 📦 Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 🛠️ Tech Stack

- **React 19.1.0**: UI library
- **Vite 7.0.4**: Build tool and dev server
- **Tailwind CSS 4.1.11**: Utility-first CSS framework
- **React Router DOM**: Client-side routing
- **EmailJS**: Email service integration
- **Lucide React**: Icon library
- **Radix UI**: Accessible UI components

## 📁 Project Structure

```
my-portfolio/
├── public/
│   ├── projects/          # Project images
│   └── resume.pdf         # Your resume
├── src/
│   ├── components/        # React components
│   │   ├── HeroSection.jsx
│   │   ├── AboutSection.jsx
│   │   ├── SkillsSection.jsx
│   │   ├── ProjectsSection.jsx
│   │   ├── ContactSection.jsx
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── ui/           # Reusable UI components
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   ├── pages/            # Page components
│   ├── App.jsx           # Main App component
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── index.html            # HTML template
├── package.json          # Dependencies
└── vite.config.js        # Vite configuration
```

## 🎨 Customization

### Update Personal Information

1. **Edit `index.html`** for SEO metadata
2. **Update components** with your information:
   - `HeroSection.jsx`: Name and introduction
   - `AboutSection.jsx`: Background and experience
   - `SkillsSection.jsx`: Skills and proficiency levels
   - `ProjectsSection.jsx`: Your projects
   - `ContactSection.jsx`: Contact details

### Add Projects

Edit the `projects` array in `src/components/ProjectsSection.jsx`:

```javascript
{
  id: 1,
  title: "Project Name",
  description: "Project description...",
  image: "/projects/project-image.jpg",
  tags: ["React", "Node.js", "MongoDB"],
  liveUrl: "https://project-demo.com",
  githubUrl: "https://github.com/username/repo"
}
```

## 🌐 Deployment

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm run build
# Then drag and drop the 'dist' folder to Netlify
```

### Deploy to GitHub Pages

```bash
npm install gh-pages --save-dev
```

Add to `package.json`:
```json
"homepage": "https://yourusername.github.io/my-portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

Run:
```bash
npm run deploy
```

## 📝 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

- **Email**: dhanus6851@gmail.com
- **LinkedIn**: [Dhanush D](https://www.linkedin.com/in/dhanush-d-6b921329a/)
- **GitHub**: [@dhanushduraisami](https://github.com/dhanushduraisami)

---

Made with ❤️ by Dhanush Durai Samy
