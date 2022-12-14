const router = require('express').Router();
const userRoutes = require('./user-routes');
const questionRoutes = require('./question-routes');
const moodRoutes = require('./mood-routes');
const responseRoutes = require('./response-routes');

router.use('/users', userRoutes);
router.use('/question', questionRoutes);
router.use('/moods', moodRoutes);
router.use('/response', responseRoutes);

module.exports = router;