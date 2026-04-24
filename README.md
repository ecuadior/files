# Smart Glove — NYIT Senior Design Team #1

Project website for the Inductive Smart Glove — a gesture-controlled robotic arm system.

## Setup

```bash
npm install
node server.js
```

Then open http://localhost:3000

## Routes

| URL | Page |
|-----|------|
| `/` | Home |
| `/about` | About & Team |
| `/timeline` | Project Timeline |
| `/hardware` | Hardware & Wiring |
| `/pipeline` | System Pipeline |
| `/ml` | ML / AI |
| `/demo` | Demo Guide |
| `/faq` | FAQ & Troubleshooting |

## Project Structure

```
smart-glove-site/
  server.js          ← Express server + all routes
  package.json
  .gitignore
  public/
    css/
      style.css      ← shared styles (used by every page)
    js/
      main.js        ← shared JS (nav highlight, FAQ accordion)
  views/
    index.html       ← /
    about.html       ← /about
    timeline.html    ← /timeline
    hardware.html    ← /hardware
    pipeline.html    ← /pipeline
    ml.html          ← /ml
    demo.html        ← /demo
    faq.html         ← /faq
    404.html         ← fallback
```

## Hosting on GitHub + Railway

1. Push this repo to GitHub
2. Go to https://railway.app → New Project → Deploy from GitHub
3. Select your repo — Railway auto-detects Node.js and runs `npm start`
4. Your site gets a public URL like `https://smart-glove-site.up.railway.app`

NYIT EENG 489-491 · Team #1 · Spring 2026
