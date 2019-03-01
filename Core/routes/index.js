import express from 'express';

const router = express.Router();

//get home page
router.get('*', (req, res) => {
  res.json({ message: 'Connected to ktracker backend.' });
});

export default router;
