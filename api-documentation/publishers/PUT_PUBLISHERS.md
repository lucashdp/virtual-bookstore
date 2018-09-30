# Publishers Resources

    PUT v1/public/publishers/:publisherId

## Description
Edit and return the publisher of reference id.

## Parameters

- **publisherId** _(required)_ — string
- **publisher** _(required)_ — object
    - **name** _(required)_ — string
    - **Others params...** _(optional)_

***

## Example
**Request**

    https://virtual-bookstore-lucashdp.herokuapp.com/v1/public/publishers/5bb0e04a7ca1951a9cb23d50

**Return**
``` json
{
    "_id": ObjectId("5bb0e04a7ca1951a9cb23d50"),
    "name": "Casa do Codigo",
    "...": ""
}
```