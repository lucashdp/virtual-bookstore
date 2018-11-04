# Books Resources

    GET v1/public/books

## Description
Returns a list of books.

## Example
**Request URI**

    https://virtual-bookstore-lucashdp.herokuapp.com/v1/public/books

**Request Response**
``` json
[
    {
        "_id": ObjectId("5bb0e04a7ca1951a9cb23d49"),
        "name": "Construindo APIs REST com Node.js: Caio Ribeiro Pereira",
        "authorId": "5465564546",
        "publisherId": "984615",
        "isbn": "6588880000",
        "price": 100.00,
        "...": ""
    },
    {
        "_id": ObjectId("5bb0e04a7ca1951a9cb23d50"),
        "name": "Aplicações web real-time com Node.js",
        "authorId": "5465564546",
        "publisherId": "984615",
        "isbn": "6588880000",
        "price": 100.00,
        "...": ""
    }
]
```