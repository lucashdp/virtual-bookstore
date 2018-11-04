# Favorites Resources

    POST v1/public/favorites

## Description
Create and return the new favorite book. You can post a book by title or by ISBN. User id is required.

## Parameters

- **favorite** _(required)_ — object
    - **title** _(optional)_ — string
    - **ISBN** _(optional)_ — string
    - **userId** _(required)_ — string

***

## Example
**Request**

    https://virtual-bookstore-lucashdp.herokuapp.com/v1/public/favorites

**Return**
``` json
{
    "_id": ObjectId("5bb0e04a7ca1951a9cb23d50"),
    "bookId": ObjectId("5bb0e0dssca1951a9cb23d50"),
    "userId": ObjectId("5bb0e0ddfsdfsdfa9cb23d50")
}
```