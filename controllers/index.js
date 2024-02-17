const router = require('express').Router();
const apisRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);
router.use('/api', apisRoutes);

module.exports = router;
