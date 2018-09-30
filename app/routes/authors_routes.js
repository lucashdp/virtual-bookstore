const ObjectID = require('mongodb').ObjectID;

module.exports = function (app, db) {
    //----------GET----------------------------//
    app.get('/v1/public/authors', (req, res) => {
        db.collection('authors')
            .find()
            .toArray((err, items) => {
                if (err) {
                    res.send({ 'error': 'An error has occurred' });
                } else {
                    res.send(items);
                }
            });
    });
    app.get('/v1/public/authors/:authorId', (req, res) => {
        const id = req.params.authorId;
        const details = { '_id': new ObjectID(id) };
        db.collection('authors').findOne(details, (err, item) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send(item);
            }
        });
    });
    app.get('/v1/public/authors/:authorId/books', (req, res) => {
        const id = req.params.authorId;
        const details = { '_id': new ObjectID(id) };
        db.collection('authors')
            .aggregate(
                [
                    {
                        "$lookup":
                        {
                            "from": "books",
                            "localField": "_id",
                            "foreignField": "authors",
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
    app.put('/v1/public/authors/:authorId', (req, res) => {
        const id = req.params.authorId;
        const details = { '_id': new ObjectID(id) };
        const author = req.body.author;
        db.collection('authors').update(details, author, (err, item) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send(item);
            }
        });
    });

    //----------POST---------------------------//
    app.post('/v1/public/authors', (req, res) => {
        const newAuthor = req.body.author;

        db.collection('authors').insert(newAuthor, (err, result) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send(result.ops[0]);
            }
        });
    });

    //----------DELETE-------------------------//
    app.delete('/v1/public/authors/:authorId', (req, res) => {
        const id = req.params.authorId;
        const details = { '_id': new ObjectID(id) };
        db.collection('authors').remove(details, (err, item) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send('Book ' + id + ' deleted!');
            }
        });
    });
};