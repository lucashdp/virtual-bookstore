# Favorites Resources

    GET v1/public/favorites/:favoriteId

## Description
Returns the favorite of reference id.

## Request Parameters

- **favoriteId** _(required)_ — string

***

## Example
**Request URI**

    https://virtual-bookstore-lucashdp.herokuapp.com/v1/public/favorites/5bb0e04a7ca1951a9cb23d50

**Request Response**
``` json
{
    "_id": ObjectId("5bb0e04a7ca1951a9cb23d50"),
    "bookId": ObjectId("5bb0e0dssca1951a9cb23d50"),
    "userId": ObjectId("5bb0e0ddfsdfsdfa9cb23d50")
}
```