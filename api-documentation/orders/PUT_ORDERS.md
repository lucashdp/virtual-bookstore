# Orders Resources

    PUT v1/public/orders/:orderId

## Description
Edit and return the order of reference id.

## Parameters

- **orderId** _(required)_ — string
- **order** _(required)_ — object
    - **bookId** _(required)_ — string
    - **userId** _(required)_ — string
    - **Others params...** _(optional)_

***

## Example
**Request**

    https://virtual-bookstore-lucashdp.herokuapp.com/v1/public/orders/5bb0e04a7ca1951a9cb23d50

**Return**
``` json
{
    "_id": ObjectId("5bb0e04a7ca1951a9cb23d50"),
    "userId": "4a7ca1b2",
    "bookId": "4a7ca199cb2",
    "status": "waiting-payment",
    "...": ""
}
```