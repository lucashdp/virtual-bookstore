# Books Resources

    PUT v1/public/books/:bookId/scores/:scoreId

## Description
Edit and return a score of a book.

## Parameters

- **bookId** _(required)_ — string
- **scoreId** _(required)_ — string
- **score** _(required)_ — object
    - **userId** _(required)_ — string
    - **bookId** _(required)_ — string
    - **score** _(required)_ — number

***

## Example
**Request**

    https://virtual-bookstore-lucashdp.herokuapp.com/v1/public/books/5bb0e04a7ca1951a9cb23d49/score/5bb0e04acb23d50

**Return**
``` json
{
    "_id": ObjectId("5bb0e04a7ca18"),
    "userId": "5bb0e04a456567ca19",
    "bookId": "5bb0e04a7ca1951a9cb23d49",
    "score": 4
}
```