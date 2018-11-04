# Books Resources

    POST v1/public/books/:bookId/scores

## Description
Create and return the new score of a book.

## Parameters

- **score** _(required)_ — object
    - **userId** _(required)_ — string
    - **bookId** _(required)_ — string
    - **score** _(required)_ — number

***

## Example
**Request**

    https://virtual-bookstore-lucashdp.herokuapp.com/v1/public/books/5bb0e04a7ca1951a9cb23d49/scores

**Return**
``` json
{
    "_id": ObjectId("5bb0e04a7ca18"),
    "userId": "5bb0e04a456567ca19",
    "bookId": "5bb0e04a7ca1951a9cb23d49",
    "score": 4
}
```