const router = require('express').Router();
const userRoutes = require('./userRoutes');
const commentRoutes = require('./commentRoutes');

router.use('/user', userRoutes);
router.use('/comment', commentRoutes);
router.use('/blog', blogRoutes);

module.exports = router;
