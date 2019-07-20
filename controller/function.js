const redis = require('redis');
var client = redis.createClient();

client.on('connect', function () {
    console.log('Redis Server Connected...');
});

module.exports.home = (req, res, next) => {
    client.lrange('tasks', 0, -1, (err, reply) => {
        if (err) {
            console.log(`some error occured in home ${err}`);
        } else {

            res.render('home', {
                tasks : reply
            });
        }
    })
};

module.exports.error = (req, res, next) => {
    res.render('error');
};