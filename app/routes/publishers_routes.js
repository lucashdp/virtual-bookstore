const ObjectID = require('mongodb').ObjectID;

module.exports = function (app, db) {
    //----------GET----------------------------//
    app.get('/v1/public/publishers', (req, res) => {
        db.collection('publishers')
            .find()
            .toArray((err, items) => {
                if (err) {
                    res.send({ 'error': 'An error has occurred' });
                } else {
                    res.send(items);
                }
            });
    });
    app.get('/v1/public/publishers/:publisherId', (req, res) => {
        const id = req.params.publisherId;
        const details = { '_id': new ObjectID(id) };
        db.collection('publishers').findOne(details, (err, item) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send(item);
            }
        });
    });
    app.get('/v1/public/publishers/:publisherId/books', (req, res) => {
        const id = req.params.publisherId;
        const details = { '_id': new ObjectID(id) };
        db.collection('publishers')
            .aggregate(
                [
                    {
                        "$lookup":
                        {
                            "from": "books",
                            "localField": "_id",
                            "foreignField": "publishers",
                            "as": "books"
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
    app.put('/v1/public/publishers/:publisherId', (req, res) => {
        const id = req.params.publisherId;
        const details = { '_id': new ObjectID(id) };
        const publisher = req.body.publisher;
        db.collection('publishers').update(details, publisher, (err, item) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send(item);
            }
        });
    });

    //----------POST---------------------------//
    app.post('/v1/public/publishers', (req, res) => {
        const newPublisher = req.body.publisher;

        db.collection('publishers').insert(newPublisher, (err, result) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send(result.ops[0]);
            }
        });
    });

    //----------DELETE-------------------------//
    app.delete('/v1/public/publishers/:publisherId', (req, res) => {
        const id = req.params.publisherId;
        const details = { '_id': new ObjectID(id) };
        db.collection('publishers').remove(details, (err, item) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send('Publisher ' + id + ' deleted!');
            }
        });
    });
};