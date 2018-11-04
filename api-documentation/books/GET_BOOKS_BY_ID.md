# Books Resources

    GET v1/public/books/:bookId

## Description
Returns the book of reference id.

## Request Parameters

- **bookId** _(required)_ — string

***

## Example
**Request URI**

    https://virtual-bookstore-lucashdp.herokuapp.com/v1/public/books/5bb0e04a7ca1951a9cb23d50

**Request Response**
``` json
{
    "_id": ObjectId("5bb0e04a7ca1951a9cb23d50"),
    "name": "Construindo APIs REST com Node.js: Caio Ribeiro Pereira",
    "...": ""
}
```