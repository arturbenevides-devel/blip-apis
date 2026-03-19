const { Router } = require('express');

const router = Router();

router.get('/:id', (req, res) => {
  const id = req.params.id;

  if (id === '12345') {
    return res.json({ porcentagem: '70%', fase: 4 });
  }

  return res.status(404).json({ error: 'Projeto não encontrado' });
});

module.exports = router;
