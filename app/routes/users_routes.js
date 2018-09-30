const ObjectID = require('mongodb').ObjectID;

module.exports = function (app, db) {
    //----------GET----------------------------//
    app.get('/v1/public/users', (req, res) => {
        db.collection('users')
            .find()
            .toArray((err, items) => {
                if (err) {
                    res.send({ 'error': 'An error has occurred' });
                } else {
                    res.send(items);
                }
            });
    });
    app.get('/v1/public/users/:userId', (req, res) => {
        const id = req.params.userId;
        const details = { '_id': new ObjectID(id) };
        db.collection('users').findOne(details, (err, item) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send(item);
            }
        });
    });
    app.get('/v1/public/users/:userId/orders', (req, res) => {
        const id = req.params.userId;
        const details = { '_id': new ObjectID(id) };
        db.collection('users')
            .aggregate(
                [
                    {
                        "$lookup":
                        {
                            "from": "orders",
                            "localField": "_id",
                            "foreignField": "users",
                            "as": "orders"
                        }
                    }
                ]
            )
            .findOne(details, (err, item) => {
                if (err) {
                    res.send({ 'error': 'An error has occurred' });
                } else {
                    res.send(item.books);
                }
            });
    });

    //----------PUT----------------------------//
    app.put('/v1/public/users/:userId', (req, res) => {
        const id = req.params.userId;
        const details = { '_id': new ObjectID(id) };
        const user = req.body.user;
        db.collection('users').update(details, user, (err, item) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send(item);
            }
        });
    });

    //----------POST---------------------------//
    app.post('/v1/public/users', (req, res) => {
        const newUser = req.body.user;

        db.collection('users').insert(newUser, (err, result) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send(result.ops[0]);
            }
        });
    });

    //----------DELETE-------------------------//
    app.delete('/v1/public/users/:userId', (req, res) => {
        const id = req.params.userId;
        const details = { '_id': new ObjectID(id) };
        db.collection('users').remove(details, (err, item) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send('User ' + id + ' deleted!');
            }
        });
    });
};