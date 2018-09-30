const ObjectID = require('mongodb').ObjectID;

module.exports = function (app, db) {
    //----------GET----------------------------//
    app.get('/v1/public/orders', (req, res) => {
        db.collection('orders')
            .find()
            .toArray((err, items) => {
                if (err) {
                    res.send({ 'error': 'An error has occurred' });
                } else {
                    res.send(items);
                }
            });
    });
    app.get('/v1/public/orders/:orderId', (req, res) => {
        const id = req.params.orderId;
        const details = { '_id': new ObjectID(id) };
        db.collection('orders').findOne(details, (err, item) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send(item);
            }
        });
    });

    //----------PUT----------------------------//
    app.put('/v1/public/orders/:orderId', (req, res) => {
        const id = req.params.orderId;
        const details = { '_id': new ObjectID(id) };
        const order = req.body.order;
        db.collection('orders').update(details, order, (err, item) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send(item);
            }
        });
    });

    //----------POST---------------------------//
    app.post('/v1/public/orders', (req, res) => {
        const newOrder = req.body.order;

        db.collection('orders').insert(newOrder, (err, result) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send(result.ops[0]);
            }
        });
    });

    //----------DELETE-------------------------//
    app.delete('/v1/public/orders/:orderId', (req, res) => {
        const id = req.params.orderId;
        const details = { '_id': new ObjectID(id) };
        db.collection('orders').remove(details, (err, item) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send('Order ' + id + ' deleted!');
            }
        });
    });
};