const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Main backend URL (set via Railway service variables)
const API_BASE = process.env.MAIN_API_URL || "https://ttcbeograd.up.railway.app";

if (typeof fetch !== "function") {
  // Node 18+ ships a global fetch. If this ever runs on an older runtime,
  // fail loudly instead of silently returning empty data.
  throw new Error("Global fetch is not available - Node 18+ is required (engines.node is set to 20.x).");
}

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// ---- Proxy: forward /api/* to the main backend ----
app.use("/api", async (req, res) => {
  // req.url is relative to the "/api" mount point (e.g. "/players?x=1"),
  // so re-adding "/api" here reconstructs the correct upstream path.
  const url = API_BASE + "/api" + req.url;

  try {
    const hasBody = !["GET", "HEAD"].includes(req.method) && req.body && Object.keys(req.body).length > 0;

    console.log(`[proxy] ${req.method} ${req.originalUrl} -> ${url}`);

    const response = await fetch(url, {
      method: req.method,
      headers: { "Content-Type": "application/json" },
      body: hasBody ? JSON.stringify(req.body) : undefined,
    });

    console.log(`[proxy] ${url} responded ${response.status}`);

    const contentType = response.headers.get("content-type") || "";
    if (contentType.includes("application/json")) {
      const data = await response.json();
      res.status(response.status).json(data);
    } else {
      const text = await response.text();
      res.status(response.status).send(text);
    }
  } catch (err) {
    console.error(`[proxy] failed for ${url}:`, err.message);
    res.status(502).json({ error: "API unavailable", detail: err.message });
  }
});

// ---- Home page ----
// TTCB_Rating.html is the intended landing page (its nav tab is marked active
// by default in the markup). Change the filename below if that's wrong.
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "TTCB_Rating.html"));
});

// ---- 404 for anything else (this is a static multi-page site, not an SPA,
// so we do NOT rewrite unknown routes to a single HTML file) ----
app.use((req, res) => {
  res.status(404).send("Not found");
});

app.listen(PORT, () => console.log(`✅ TTCB Public running on port ${PORT}, proxying /api to ${API_BASE}`));
