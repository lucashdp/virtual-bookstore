const ObjectID = require('mongodb').ObjectID;

module.exports = function (app, db) {
    //----------GET----------------------------//
    app.get('/v1/public/favorites', (req, res) => {
        db.collection('favorites')
            .find()
            .toArray((err, items) => {
                if (err) {
                    res.send({ 'error': 'An error has occurred' });
                } else {
                    res.send(items);
                }
            });
    });
    app.get('/v1/public/favorites/:favoriteId', (req, res) => {
        const id = req.params.favoriteId;
        const details = { '_id': new ObjectID(id) };
        db.collection('favorites').findOne(details, (err, item) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send(item);
            }
        });
    });

    //----------PUT----------------------------//

    //----------POST---------------------------//
    app.post('/v1/public/favorites', (req, res) => {
        let newFavorite = req.body.favorite;

        if (!newFavorite.bookId)
            newFavorite.bookId = getBookId(newFavorite);

        if (newFavorite.bookId == 0)
            res.send({ 'error': 'No book found !' });
        else
            db.collection('favorites').insert(newFavorite, (err, result) => {
                if (err) {
                    res.send({ 'error': 'An error has occurred' });
                } else {
                    res.send(result.ops[0]);
                }
            });
    });

    function getBookId(newFavorite) {
        const queryTitle = { 'title': newFavorite.title };
        db.collection('books').findOne(queryTitle, (err, item) => {
            if (!item)
                return item.id
            else {
                const queryIsbn = { 'isbn': newFavorite.isbn };

                db.collection('books').findOne(queryIsbn, (err, item) => {
                    if (!item)
                        return item.id
                    else
                        return 0
                });
            }
        });
    }

    //----------DELETE-------------------------//
    app.delete('/v1/public/favorites/:favoriteId', (req, res) => {
        const id = req.params.favoriteId;
        const details = { '_id': new ObjectID(id) };
        db.collection('favorites').remove(details, (err, item) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send('Favorite ' + id + ' deleted!');
            }
        });
    });
};