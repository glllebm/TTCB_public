const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// URL основного бэкенда (задаётся через Railway Variables)
const API_BASE = process.env.MAIN_API_URL || "https://ttcbeograd.up.railway.app";

app.use(express.static(path.join(__dirname, "public")));

// Proxy API requests to main backend
app.use("/api", async (req, res) => {
  try {
    const url = API_BASE + "/api" + req.url;
    const { default: fetch } = await import("node-fetch");
    const response = await fetch(url, {
      method: req.method,
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    res.status(response.status).json(data);
  } catch (err) {
    console.error("API proxy error:", err);
    res.status(502).json({ error: "API unavailable" });
  }
});

app.get("/", (req, res) => res.sendFile(path.join(__dirname, "public", "index.html")));
app.get("*", (req, res) => res.sendFile(path.join(__dirname, "public", "index.html")));

app.listen(PORT, () => console.log(`✅ TTCB Public running on port ${PORT}`));
