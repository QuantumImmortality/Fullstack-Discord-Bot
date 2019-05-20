// Import meme model
Meme = require('./memeModel');

// Handle index actions
exports.index = function (req, res) {
    Meme.get(function (err, memes) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Meme retrieved successfully",
            data: memes
        });
    });
};

// Handle create meme actions
exports.new = function (req, res) {
    var meme = new Meme();
    meme.name = req.body.name ? req.body.name : meme.name;
    meme.source = req.body.source;

    // save the meme and check for errors
    meme.save(function (err) {
         if (err)
             res.json(err);

        res.json({
            message: 'New meme created!',
            data: meme
        });
    });
};


// Handle view meme info
exports.view = function (req, res) {
    Meme.find({name:req.params.meme_id}, function (err, meme) {
        if (err)
            res.send(err);
        res.json({
            message: 'Meme details loading..',
            data: meme
        });
    });
};

// Handle update meme info
exports.update = function (req, res) {

    Meme.findById(req.params.meme_id, function (err, meme) {
        if (err)
            res.send(err);

        meme.name = req.body.name ? req.body.name : meme.name;
        meme.source = req.body.source

        // save the meme and check for errors
        meme.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Meme Info updated',
                data: meme
            });
        });
    });
};


// Handle delete meme
exports.delete = function (req, res) {
    Meme.remove({
        _id: req.params.meme_id
    }, function (err, meme) {
        if (err)
            res.send(err);

        res.json({
            status: "success",
            message: 'Meme deleted'
        });
    });
}
