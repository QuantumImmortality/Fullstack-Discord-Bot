
// Initialize express router
let router = require('express').Router();

// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!',
    });
});

// Import contact controller
var memeController = require('./memeController');

// Contact routes
router.route('/memes')
    .get(memeController.index)
    .post(memeController.new);

router.route('/memes/:meme_id')
    .get(memeController.view)
    .patch(memeController.update)
    .put(memeController.update)
    .delete(memeController.delete);

// Export API routes
module.exports = router;
