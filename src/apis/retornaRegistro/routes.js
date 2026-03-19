const { Router } = require('express');

const router = Router();

router.get('/:id', (req, res) => {
  const id = Number(req.params.id);

  if (id === 1) {
    return res.json({ usuarioRegistrado: true });
  }

  if (id === 2) {
    return res.json({ usuarioRegistrado: false });
  }

  return res.status(404).json({ error: 'Registro não encontrado' });
});

module.exports = router;
