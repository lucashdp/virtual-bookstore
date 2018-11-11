module.exports = {
    GetAll,
    Get
}

function GetAll(items, res) {
    var request = require('request');
    request('https://bookstore-data-enrichment.herokuapp.com/v1/public/books',
        function (error, response) {
            if (error)
                res.send(error)
            else {
                const books = JSON.parse(response.body);
                res.send(items.concat(books));
            }
        })
};

function Get(res, id) {
    var request = require('request');

    if (!id)
        id = 0;

    request('https://bookstore-data-enrichment.herokuapp.com/v1/public/books/' + id,
        function (error, response) {
            if (error)
                res.send(error)
            else {
                const book = JSON.parse(response.body);
                res.send(book);
            }
        });
};