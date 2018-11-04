# Favorites Resources

    GET v1/public/favorites

## Description
Returns a list of favorites books.


## Example
**Request**

    https://virtual-bookstore-lucashdp.herokuapp.com/v1/public/favorites

**Return**
``` json
[
    {
        "_id": ObjectId("5bb0e04a7ca1951a9cb23d50"),
        "bookId": ObjectId("5bb0e0dssca1951a9cb23d50"),
        "userId": ObjectId("5bb0e0ddfsdfsdfa9cb23d50")
    }
]
```