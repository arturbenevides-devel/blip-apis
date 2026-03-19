const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// ── Auto-load: cada pasta em /apis vira uma rota ──────────────────────
const apisDir = path.join(__dirname, 'apis');

fs.readdirSync(apisDir, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .forEach((dir) => {
    const router = require(path.join(apisDir, dir.name, 'routes'));
    app.use(`/api/${dir.name}`, router);
    console.log(`  ✔  /api/${dir.name}`);
  });

// ── Health check ──────────────────────────────────────────────────────
app.get('/', (_req, res) => {
  res.json({
    status: 'ok',
    apis: fs
      .readdirSync(apisDir, { withFileTypes: true })
      .filter((d) => d.isDirectory())
      .map((d) => `/api/${d.name}`),
  });
});

// ── Start ─────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`\n🚀 Server rodando em http://localhost:${PORT}\n`);
});
