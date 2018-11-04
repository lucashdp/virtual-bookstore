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
        "...": ""
    },
    {
        "_id": ObjectId("5bb0e04a7ca1951a9cb23d50"),
        "name": "Aplicações web real-time com Node.js",
        "...": ""
    }
]
```