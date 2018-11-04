# Publishers Resources

    GET v1/public/publisher/:publisherId/books

## Description
Returns the books of the publisher of reference id.

## Request Parameters

- **publisherId** _(required)_ — string

***

## Example
**Request URI**

    https://virtual-bookstore-lucashdp.herokuapp.com/v1/public/publishers/5bb0e04a7ca1951a/books

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