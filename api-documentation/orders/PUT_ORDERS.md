# Orders Resources

    PUT v1/public/orders/:orderId

## Description
Edit and return the order of reference id.

## Request Parameters

- **orderId** _(required)_ — string

## Request Body

- **order** _(required)_ — object
    - **bookId** _(required)_ — string
    - **userId** _(required)_ — string
    - **Others attributes...** _(optional)_

***

## Example
**Request URI**

    https://virtual-bookstore-lucashdp.herokuapp.com/v1/public/orders/5bb0e04a7ca1951a9cb23d50

**Request Response**
``` json
{
    "_id": ObjectId("5bb0e04a7ca1951a9cb23d50"),
    "userId": "4a7ca1b2",
    "bookId": "4a7ca199cb2",
    "status": "waiting-payment",
    "...": ""
}
```