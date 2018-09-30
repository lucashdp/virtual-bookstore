const ObjectID = require('mongodb').ObjectID;

module.exports = function (app, db) {
    //----------GET----------------------------//
    app.get('/v1/public/books', (req, res) => {
        db.collection('books')
            .find()
            .toArray((err, items) => {
                if (err) {
                    res.send({ 'error': 'An error has occurred' });
                } else {
                    res.send(items);
                }
            });
    });
    app.get('/v1/public/books/:bookId', (req, res) => {
        const id = req.params.bookId;
        const details = { '_id': new ObjectID(id) };
        db.collection('books').findOne(details, (err, item) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send(item);
            }
        });
    });
    app.get('/v1/public/books/:bookId/comments', (req, res) => {
        const id = req.params.bookId;
        const details = { '_id': new ObjectID(id) };
        db.collection('books').findOne(details, (err, item) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send(item.comments);
            }
        });
    });

    //----------PUT----------------------------//
    app.put('/v1/public/books/:bookId', (req, res) => {
        const id = req.params.bookId;
        const details = { '_id': new ObjectID(id) };
        const book = req.body.book;
        db.collection('books').update(details, book, (err, item) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send(item);
            }
        });
    });
    app.put('/v1/public/books/:bookId/comments/:commentId', (req, res) => {
        const bookId = req.params.bookId;
        const commentId = req.params.commentId;
        const commentEdited = req.params.comment;
        const bookDetails = { '_id': new ObjectID(bookId) };
        const commentObjectId = new ObjectID(commentId);

        db.collection('books').findOne(bookDetails, (err, item) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                item.comments.map((comment) => {
                    if (comment._id == commentObjectId)
                        comment = commentEdited;
                });

                db.collection('books').update(bookDetails, item, (err, item) => {
                    if (err) {
                        res.send({ 'error': 'An error has occurred' });
                    } else {
                        res.send(item);
                    }
                });
            }
        });
    });

    //----------POST---------------------------//
    app.post('/v1/public/books', (req, res) => {
        const newBook = req.body.book;

        db.collection('books').insert(newBook, (err, result) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send(result.ops[0]);
            }
        });
    });

    //----------DELETE-------------------------//
    app.delete('/v1/public/books/:bookId', (req, res) => {
        const id = req.params.bookId;
        const details = { '_id': new ObjectID(id) };
        db.collection('books').remove(details, (err, item) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send('Book ' + id + ' deleted!');
            }
        });
    });
    app.delete('/v1/public/books/:bookId/comments/:commentId', (req, res) => {
        const bookId = req.params.bookId;
        const commentId = req.params.commentId;
        const bookDetails = { '_id': new ObjectID(bookId) };
        const commentObjectId = new ObjectID(commentId);

        db.collection('books').findOne(bookDetails, (err, item) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                item.comments.filter((comment) => {
                    return (comment._id != commentObjectId)
                });

                db.collection('books').update(bookDetails, item, (err, item) => {
                    if (err) {
                        res.send({ 'error': 'An error has occurred' });
                    } else {
                        res.send(item);
                    }
                });
            }
        });
    });
};