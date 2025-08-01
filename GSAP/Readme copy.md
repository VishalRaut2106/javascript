GSAP (GreenSock Animation Platform) is a powerful JavaScript library for creating **high-performance animations** on the web. It's especially popular for animating HTML, CSS, SVG, and JavaScript objects with smooth control, timelines, and complex sequencing.

---

### ⚡ Basic GSAP Syntax

```js
// Basic tween
gsap.to(".box", {
  duration: 1,
  x: 300,
  rotation: 360,
  scale: 1.5,
  ease: "power2.out"
});
```

```js
// From a starting state
gsap.from(".box", {
  duration: 1,
  opacity: 0,
  y: -100
});
```

```js
// Timeline for sequencing
const tl = gsap.timeline();
tl.to(".box1", { x: 200, duration: 1 })
  .to(".box2", { x: 200, duration: 1 }, "-=0.5") // overlaps previous animation
  .to(".box3", { x: 200, duration: 1 });
```

---

### 🔁 ScrollTrigger Example (Plugin for scroll-based animations)

```js
gsap.registerPlugin(ScrollTrigger);

gsap.to(".section", {
  scrollTrigger: {
    trigger: ".section",
    start: "top center",
    end: "bottom center",
    scrub: true,
    markers: true
  },
  x: 500,
  rotation: 360
});
```

---

### 🧠 Why use GSAP?

* Super smooth animations
* Better performance than CSS transitions in many cases
* Timeline control (like video editors)
* Scroll-based interactions (via ScrollTrigger)
* Works with canvas, SVG, WebGL too

---

### 📦 Installation

#### 1. CDN

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
```

#### 2. NPM

```bash
npm install gsap
```

#### 3. Import in JS

```js
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
```

---

