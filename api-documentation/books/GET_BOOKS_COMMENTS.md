# Books Resources

    GET v1/public/books/:bookId/comments

## Description
Returns a list of comments of a reference book id.

## Parameters

- **bookId** _(required)_ — string

***

## Example
**Request**

    https://virtual-bookstore-lucashdp.herokuapp.com/v1/public/books/5bb0e04a7ca1951a9cb23d49/comments

**Return**
``` json
[
    {
        "_id": ObjectId("5bb0e04a7ca19"),
        "userId": "5bb0e04a456567ca19",
        "bookId": "5bb0e04a7ca1951a9cb23d49",
        "description": "Excelente livro, recomendo !!",
        "...": ""
    },
    {
        "_id": ObjectId("5bb0e04a7ca19"),
        "userId": "5bb0e04a4fdsdca19",
        "bookId": "5bb0e04a7ca1951a9cb23d49",
        "description": "Muito bom !!",
        "...": ""
    },
]
```