# Orders Resources

    GET v1/public/orders/:orderId

## Description
Returns the order of reference id.

## Request Parameters

- **orderId** _(required)_ — string

***

## Example
**Request URI**

    https://virtual-bookstore-lucashdp.herokuapp.com/v1/public/orders/5bb0e04a7ca1951a9cb23d50

**Request Response**
``` json
{
    "_id": ObjectId("5bb0e04a7ca1951a9cb23d50"),
    "userId": "4a7ca1951a9cb2",
    "bookId": "4a7ca1951a9cb2",
    "status": "payed",
    "...": ""
}
```