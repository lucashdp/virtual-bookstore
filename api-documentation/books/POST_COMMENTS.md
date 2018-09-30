# Books Resources

    POST v1/public/books/:bookId/comments

## Description
Create and return the new comment of a book.

## Parameters

- **bookId** _(required)_ — string
- **comment** _(required)_ — object
    - **userId** _(required)_ — string
    - **bookId** _(required)_ — string
    - **description** _(required)_ — string,
    - **Others params...** _(optional)_

***

## Example
**Request**

    https://virtual-bookstore-lucashdp.herokuapp.com/v1/public/books/5bb0e04a7ca1951a9cb23d49/comments

**Return**
``` json
{
    "_id": ObjectId("5bb0e04a7ca1951a9cb23d50"),
    "userId": "5bb0e04a4fdsdca19",
    "bookId": "5bb0e04a7ca1951a9cb23d49",
    "description": "Muito bom !!",
    "...": ""
}
```