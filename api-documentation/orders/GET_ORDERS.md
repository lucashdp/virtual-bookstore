# Orders Resources

    GET v1/public/orders

## Description
Returns a list of orders.

## Example
**Request URI**

    https://virtual-bookstore-lucashdp.herokuapp.com/v1/public/orders

**Request Response**
``` json
[
    {
        "_id": ObjectId("5bb0e04a7ca1951a9cb23d49"),
        "userId": "4a7ca1951a9cb2",
        "bookId": "4a7ca1951a9cb2",
        "status": "payed",
        "...": ""
    },
    {
        "_id": ObjectId("5bb0e04a7ca1951a9cb23d50"),
        "userId": "4a7ca1b2",
        "bookId": "4a7ca199cb2",
        "status": "payed",
        "...": ""
    }
]
```