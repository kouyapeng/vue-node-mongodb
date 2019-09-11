var Router = require('koa-router');
var router = new Router();

const user_controller = require('../controllers/user.js');

router.get('/login',user_controller.queryUserById)
router.get('/deleteUserById',user_controller.deleteUserById)
router.get('/getUsers',user_controller.getUsers)
router.post('/addUser',user_controller.addUser)
router.post('/updateUser',user_controller.updateUser)

module.exports = router;