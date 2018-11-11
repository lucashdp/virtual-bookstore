const ObjectID = require('mongodb').ObjectID;
const DataEnrichmentService = require('../data-enrichment-service');

module.exports = function (app, db) {
    //----------GET----------------------------//
    app.get('/v1/public/books', (req, res) => {
        db.collection('books')
            .find()
            .toArray((err, items) => {
                if (err) {
                    res.send({ 'error': 'An error has occurred' });
                } else {
                    DataEnrichmentService.GetAll(items, res);
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
                if (!item)
                    DataEnrichmentService.Get(res, id);
                else
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
    app.get('/v1/public/books/:bookId/scores', (req, res) => {
        const id = req.params.bookId;
        const details = { '_id': new ObjectID(id) };
        db.collection('books').findOne(details, (err, item) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send(item.scores);
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

    app.put('/v1/public/books/:bookId/scores/:scoreId', (req, res) => {
        const bookId = req.params.bookId;
        const scoreId = req.params.scoreId;
        const scoreEdited = req.params.scores;
        const bookDetails = { '_id': new ObjectID(bookId) };
        const scoresObjectId = new ObjectID(scoreId);

        db.collection('books').findOne(bookDetails, (err, item) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                item.scores.map((score) => {
                    if (score._id == scoresObjectId)
                        score = scoreEdited;
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
    app.post('/v1/public/books/:bookId/comments', (req, res) => {
        const bookId = req.params.bookId;
        const newComment = req.body.comment;
        const bookDetails = { '_id': new ObjectID(bookId) };

        db.collection('books').findOne(bookDetails, (err, item) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                item.comments.push(newComment);

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
    app.post('/v1/public/books/:bookId/scores', (req, res) => {
        const scoreId = req.params.scoreId;
        const newScore = req.body.score;
        const scoreDetails = { '_id': new ObjectID(scoreId) };

        db.collection('books').findOne(scoreDetails, (err, item) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                item.scores.push(newScore);

                db.collection('books').update(scoreDetails, item, (err, item) => {
                    if (err) {
                        res.send({ 'error': 'An error has occurred' });
                    } else {
                        res.send(item);
                    }
                });
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