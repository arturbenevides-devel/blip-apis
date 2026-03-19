const { Router } = require('express');

const router = Router();

router.get('/:id', (req, res) => {
  const id = Number(req.params.id);

  if (id === 1) {
    return res.json({ existeNota: true });
  }

  return res.json({ existeNota: false });
});

module.exports = router;
