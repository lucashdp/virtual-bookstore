# Orders Resources

    POST v1/public/orders

## Description
Create and return the new order.

## Parameters

- **order** _(required)_ — object
    - **bookId** _(required)_ — string
    - **userId** _(required)_ — string
    - **Others params...** _(optional)_

***

## Example
**Request**

    https://virtual-bookstore-lucashdp.herokuapp.com/v1/public/orders

**Return**
``` json
{
    "_id": ObjectId("5bb0e04a7ca1951a9cb23d50"),
    "userId": "4a7ca1b2",
    "bookId": "4a7ca199cb2",
    "status": "created",
    "...": ""
}
```