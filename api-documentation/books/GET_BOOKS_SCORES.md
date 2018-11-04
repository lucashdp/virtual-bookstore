# Books Resources

    GET v1/public/books/:bookId/scores

## Description
Returns a list of scores of a reference book id.

## Parameters

- **bookId** _(required)_ — string

***

## Example
**Request**

    https://virtual-bookstore-lucashdp.herokuapp.com/v1/public/books/5bb0e04a7ca1951a9cb23d49/scores

**Return**
``` json
[
    {
        "_id": ObjectId("5bb0e04a7ca19"),
        "userId": "5bb0e04a456567ca19",
        "bookId": "5bb0e04a7ca1951a9cb23d49",
        "score": 5
    },
    {
        "_id": ObjectId("5bb0e04a7ca18"),
        "userId": "5bb0e04a456567ca19",
        "bookId": "5bb0e04a7ca1951a9cb23d49",
        "score": 4
    },
]
```