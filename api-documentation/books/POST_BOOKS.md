# Books Resources

    POST v1/public/books

## Description
Create and return the new book.

## Request Body

- **book** _(required)_ — object
    - **name** _(required)_ — string
    - **authorId** _(required)_ — string
    - **publisherId** _(required)_ — string
    - **isbn** _(required)_ — string
    - **Others params...** _(optional)_

***

## Example
**Request URI**

    https://virtual-bookstore-lucashdp.herokuapp.com/v1/public/books

**Request Response**
``` json
{
    "_id": ObjectId("5bb0e04a7ca1951a9cb23d50"),
    "name": "Aplicações web real-time com Node.js",
    "authorId": "5465564546",
    "publisherId": "984615",
    "isbn": "6588880000",
    "...": ""
}
```