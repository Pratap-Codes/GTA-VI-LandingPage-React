# GTA VI Inspired Landing Page 🎮

A **GTA VI-themed animated landing page** built with **React** and **GSAP**, created as a hands-on learning project to explore advanced animation techniques — SVG masking, timeline sequencing, and mouse/scroll-based parallax effects.

> ⚠️ **Disclaimer:** This is a fan-made, non-commercial project built purely for learning purposes. "Grand Theft Auto VI" and all related assets, names, and trademarks belong to **Rockstar Games / Take-Two Interactive**. This project is not affiliated with, endorsed by, or connected to Rockstar Games in any way.

## 🚀 Live Demo
[Add your Vercel deployment link here]

## ✨ Features

- **Animated intro loader** — SVG text mask ("VI") reveal animation using GSAP timelines
- **Smooth timeline sequencing** — chained `rotate → scale → fade` animation with custom easing (`Power4`, `Expo`)
- **Mouse-based parallax effect** — background layers (sky, bg, text) move at different speeds based on cursor position for a layered depth effect
- **Conditional rendering** — main content only renders after the intro animation completes
- **Responsive hero section** — full-screen landing with layered character/background imagery
- **Tailwind CSS styling** — utility-first responsive layout and design

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| [React](https://react.dev/) | UI library / component structure |
| [GSAP](https://gsap.com/) | Core animation engine |
| [@gsap/react](https://gsap.com/resources/React/) | `useGSAP()` hook for React-safe GSAP animations |
| [Tailwind CSS](https://tailwindcss.com/) | Styling and layout |
| [Vite](https://vitejs.dev/) | Build tool / dev server |
| [Vercel](https://vercel.com/) | Deployment |

## 📚 What I Learned

This project was built to strengthen my understanding of:

- Using `useGSAP()` (the React-safe wrapper for GSAP) instead of raw `useEffect` for animations
- Building **GSAP timelines** and chaining multiple `.to()` calls with negative `delay` overlaps
- **SVG `<mask>` elements** combined with GSAP to create a reveal/wipe intro effect
- Tracking animation progress with `onUpdate` and `this.progress()` to trigger state changes mid-animation
- Implementing **parallax mouse-tracking** using `mousemove` events and `gsap.to()` for layered motion
- Managing conditional rendering based on animation completion state (`showContent`)
- Structuring a visually complex landing page using Tailwind's utility classes (absolute positioning, `translate`, `scale`, gradients)

## 📂 Project Structure

```
src/
├── App.jsx          # Main component — intro animation + landing page
├── assets/
│   ├── bg.png
│   ├── sky.png
│   ├── boy.png
│   ├── ps5.png
│   └── pose.png
└── ...
```

## 🏃 Getting Started

```bash
# Clone the repository
git clone https://github.com/your-username/your-repo-name.git

# Navigate into the project
cd your-repo-name

# Install dependencies
npm install

# Run the development server
npm run dev
```

## 🔮 Future Improvements

- [ ] Add scroll-triggered animations (`ScrollTrigger`) for the second section
- [ ] Improve mobile responsiveness (currently optimized for desktop)
- [ ] Add loading state for images before intro animation starts
- [ ] Replace placeholder Lorem Ipsum text with real content

## 🙏 Acknowledgements

- Inspired by the official GTA VI trailer aesthetic (fan tribute only)
- Built while learning GSAP fundamentals and React animation patterns

## 📄 License

This project is for educational/portfolio purposes only. Not for commercial use.
