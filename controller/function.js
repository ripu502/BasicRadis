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
                tasks: reply
            });
        }
    })
};

module.exports.error = (req, res, next) => {
    res.render('error');
};

module.exports.addTask = (req, res, next) => {
    const task = req.body.task;
    // console.log(task);
    client.rpush('tasks', task, (err, reply) => {
        if (err) {
            console.log(`some err is occured in addTask ${err}`);
        }else{
            console.log('task is added to Redis');
        }

    })
    res.redirect('/');
};