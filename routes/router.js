const router = require('express').Router();
const controller = require('../controller/function');

router.get('/', controller.home);

router.post('/add/task', controller.addTask);

router.post('/add/call', controller.addCall);

router.post('/delete/task', controller.deleteTask);

router.use('/', controller.error);

module.exports = router;