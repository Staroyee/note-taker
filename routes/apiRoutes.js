const router = require('express').Router();

router.get('/notes', (req, res) => {
    res.status(200).json({ok: true})
});

module.exports = router;