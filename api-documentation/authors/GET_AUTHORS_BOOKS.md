# Authors Resources

    GET v1/public/authors/:authorId/books

## Description
Returns the books of the author of reference id.

## Request Parameters

- **authorId** _(required)_ — string

***

## Example
**Request URI**

    https://virtual-bookstore-lucashdp.herokuapp.com/v1/public/authors/5bb0e04a7ca1951a9cb23d50/books

**Request Response**
``` json
[
    {
        "_id": ObjectId("5bb0e043d50"),
        "name": "Aplicações web real-time com Node.js",
        "...": ""
    },
    {
        "_id": ObjectId("5bb0e043d50"),
        "name": "Construindo APIs REST com Node.js",
        "...": ""
    }
]
```