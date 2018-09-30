# Users Resources

    GET v1/public/user/:userId/orders

## Description
Returns the orders of the user of reference id.

## Parameters

- **userId** _(required)_ — string

***

## Example
**Request**

    https://virtual-bookstore-lucashdp.herokuapp.com/v1/public/users/5bb0e04a7ca1951a/orders

**Return**
``` json
[
    {
        "_id": ObjectId("5bb0e04a7ca1951a9cb23d49"),
        "userId": "5bb0e04a7ca1951a",
        "bookId": "4a7ca1a9cb2",
        "status": "payed",
        "...": ""
    },
    {
        "_id": ObjectId("5bb0e04a7ca1951a9cb23d50"),
        "userId": "5bb0e04a7ca1951a",
        "bookId": "4a7ca1xx99cb2",
        "status": "payed",
        "...": ""
    }
]
```