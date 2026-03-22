# Vindhyachal Resume Maker - Digital VCard

A modern, interactive digital vCard built with React. Features a 3D flip card animation that responds to scroll direction, smooth transitions, and a beautiful glassmorphism UI.

## Features

- 🎴 3D flip card animation with scroll-based navigation
- 📱 Responsive design for all devices (phone, tablet, desktop)
- 🎨 Modern glassmorphism UI with translucent backgrounds
- ⚡ Smooth infinite scroll loop
- 📞 Social media integration (WhatsApp, Instagram, LinkedIn, Facebook, Email, Call)
- 🎯 QR code integration
- 🖼️ Profile picture support

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to the URL shown in the terminal (usually `http://localhost:5173`)

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
vrm-cvard/
├── public/
│   └── images/          # Static images (profile pic, QR code)
├── src/
│   ├── components/
│   │   ├── Card.jsx     # Main flip card component
│   │   ├── ScrollIndicators.jsx  # Scroll hint indicators
│   │   └── ContactModal.jsx      # Social links modal
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # React entry point
│   └── styles.css       # Global styles
├── index.html
├── package.json
└── vite.config.js
```

## Configuration

Update the following in `src/App.jsx`:
- Website URL (card click handler)
- Social media links in `src/components/ContactModal.jsx`
- Phone numbers and email addresses

## Technologies Used

- React 18
- Vite
- Font Awesome Icons
- CSS3 (3D transforms, animations)

## License

MIT



