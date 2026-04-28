const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (CSS, JS, images) from /public
app.use(express.static(path.join(__dirname, "public")));

// ─── ROUTES ───────────────────────────────────────────────────
// Each route serves a separate HTML file from /views

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "about.html"));
});

app.get("/timeline", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "timeline.html"));
});

app.get("/hardware", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "hardware.html"));
});

app.get("/pipeline", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "pipeline.html"));
});

app.get("/ml", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "ml.html"));
});

app.get("/demo", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "demo.html"));
});

app.get("/data", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "data.html"));
});

app.get("/faq", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "faq.html"));
});

// 404 fallback
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

// ─── START SERVER ─────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`\n🧤  Smart Glove site running at http://localhost:${PORT}\n`);
  console.log("  Routes available:");
  console.log("  /          → Home");
  console.log("  /about     → About & Team");
  console.log("  /timeline  → Project Timeline");
  console.log("  /hardware  → Hardware & Wiring");
  console.log("  /pipeline  → System Pipeline");
  console.log("  /ml        → ML / AI");
  console.log("  /demo      → Demo Guide");
   console.log("  /data      → Data");
  console.log("  /faq       → FAQ & Troubleshooting\n");
});
