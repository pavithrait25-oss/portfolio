# Pavithra — Personal Portfolio Website

A modern, elegant, professional personal portfolio website for **Pavithra**, Aspiring **.NET Developer** and former **Software Trainer**.

Inspired by the design aesthetics and cyber-luxe theme of [Yamuna's Portfolio](https://yam-portfolio-zeta.vercel.app/).

---

## 🌟 Highlights & Features

- **Modern Cyber-Luxe Design System**:
  - Deep obsidian slate theme (`#06080e`) with electric cyan (`#38bdf8`), electric blue (`#3d7fff`), and violet-indigo glow accents (`#6366f1` / `#a855f7`).
  - Glassmorphism surfaces with high-performance CSS `backdrop-filter`.
  - Ambient animated glowing orbs with subtle floating drift.
  - Interactive C# syntax code card (`Pavithra.cs`) with 3D tilt effects on desktop.
- **Dynamic Hero Section**:
  - Live typing subtitle cycling through *"Aspiring .NET Developer"*, *"C# & SQL Server Specialist"*, *"Former Software Trainer (2 Yrs)"*, *"Web Application Developer"*.
  - Status indicator: *"🟢 Open to .NET Developer & IT Opportunities"*.
- **9 Fully Functional Dedicated Sections**:
  1. **Home**: Header greeting, dynamic typing, call-to-actions, and C# developer code card.
  2. **About Me**: Detailed narrative highlighting **2 years of Software Trainer experience** at Apollo Computer Education (Srivilliputhur, Virudhunagar), career goals as an Aspiring .NET Developer, key metrics counters (`2+` Yrs Experience, `100+` Students Mentored, `9+` Core Skills, `100%` Dedication).
  3. **Education**: Dedicated **editable** timeline featuring genuine academic credentials from resume:
     - Master of Science (M.Sc.) — Computer Science & IT (Rajus College, Rajapalayam)
     - Bachelor of Science (B.Sc.) — Computer Science & IT (Ayya Nadar Janaki Ammal College, Sivakasi)
     - Professional Certifications in .NET/C#/ASP.NET, Web Designing, and Software QA.
  4. **Skills**: Features **only** the 9 demonstrable skills requested:
     - **C#**, **.NET**, **ASP.NET**, **SQL Server**, **C++**, **C**, **HTML**, **CSS**, **JavaScript**.
     - Filter tabs: *All Skills*, *.NET & Core Languages*, *Database*, *Web Development*.
     - Animated progress bars triggered upon scrolling into view.
  5. **Projects**:
     - Flagship showcase: **Sri Homemade Cakes Website** with project description, live demo link, and **interactive live preview modal** embedded directly on the page!
     - Editable secondary project placeholders for upcoming .NET & SQL applications.
  6. **Services**: 6 tailored software services: Custom Website Development, .NET & C# Applications, Database Design & SQL Queries, Software Training & Mentorship, Website Testing & QA, and Website Maintenance.
  7. **Resume**: Working instant download button for `resume/Pavithra_Resume.pdf`, in-browser preview button, and qualification summary cards.
  8. **Contact**: Multiple active contact methods:
     - Direct WhatsApp chat link (`+91 9566750694`)
     - Direct Email (`pavithrait25@gmail.com`) with 1-click clipboard copy + toast feedback
     - GitHub profile link (`github.com/pavithra-dev`)
     - LinkedIn profile link (`linkedin.com/in/pavithra-developer`)
     - Interactive validated contact form with option to send via email client or send pre-formatted text directly to WhatsApp.
  9. **Footer**: Social links, quick navigation links, copyright, and smooth Back-to-Top scroll.
- **Mobile Responsive & Accessible**:
  - Touch-friendly sliding navigation drawer on mobile with glass backdrop.
  - Sticky bottom/floating quick-contact WhatsApp button on all viewports.
  - Semantic HTML5, ARIA labels, skip-to-content links, and full `prefers-reduced-motion` compliance.

---

## 📁 Project Directory Structure

```text
cake/
├── index.html                   # Main portfolio webpage
├── style.css                    # Design system, layout, animations & media queries
├── script.js                    # Typing effect, modal preview, drawer & form logic
├── README.md                    # Project documentation
├── assets/
│   └── images/
│       ├── profile-avatar.svg   # Vector developer avatar representation
│       └── sri-cakes-mockup.svg # Browser mockup of Sri Homemade Cakes website
├── resume/
│   └── Pavithra_Resume.pdf      # Actual uploaded PDF resume (working download)
└── sri-homemade-cakes/          # Preserved Sri Homemade Cakes full website
    ├── index.html
    ├── styles.css
    ├── script.js
    ├── three.min.js
    └── README.md
```

---

## 🚀 How to Run Locally

You can run this portfolio on any web browser:

1. Double-click [index.html](file:///c:/Users/Admin/Desktop/cake/index.html) to view directly in your default browser.
2. Or run a local HTTP development server with Python:
   ```powershell
   python -m http.server 8000
   ```
   Open `http://localhost:8000` in your web browser.

---

## ✏️ How to Customize & Edit

All editable sections contain clear comments inside `index.html`:

- **Update Resume PDF**: Place your updated resume inside the `resume/` directory named `Pavithra_Resume.pdf`.
- **Edit Education**: Search for `EDITABLE EDUCATION SECTION` in `index.html` to update years, institutions, or add new certifications.
- **Edit Social Links**: Update the URLs for GitHub (`github.com/pavithra-dev`) and LinkedIn (`linkedin.com/in/pavithra-developer`) with your actual profile links.
- **Add New Projects**: In the Projects section, search for `EDITABLE SECONDARY PROJECTS SECTION` to insert your future GitHub repositories or deployed project URLs.

---

## 🌐 Free One-Click Deployment

You can host this website online for free using:
- **Vercel**: Import this project folder or connect your GitHub repository; framework preset: *Other*.
- **Netlify**: Drag and drop the `cake` folder directly into Netlify Drop.
- **GitHub Pages**: Push this repository to GitHub and enable GitHub Pages in *Repository Settings > Pages*.
