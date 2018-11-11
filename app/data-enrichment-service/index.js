module.exports = function (items, res) {
    var request = require('request');
    request('https://bookstore-data-enrichment.herokuapp.com/v1/public/books',
        function (error, response) {
            if (error)
                res.send(error)
            else {
                const books = JSON.parse(response.body);
                res.send(items.concat(books));
            }
        });
}