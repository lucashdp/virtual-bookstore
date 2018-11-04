# Publishers Resources

    PUT v1/public/publishers/:publisherId

## Description
Edit and return the publisher of reference id.

## Request Parameters

- **publisherId** _(required)_ — string

## Request Body

- **publisher** _(required)_ — object
    - **name** _(required)_ — string
    - **Others attributes...** _(optional)_

***

## Example
**Request URI**

    https://virtual-bookstore-lucashdp.herokuapp.com/v1/public/publishers/5bb0e04a7ca1951a9cb23d50

**Request Response**
``` json
{
    "_id": ObjectId("5bb0e04a7ca1951a9cb23d50"),
    "name": "Casa do Codigo",
    "...": ""
}
```