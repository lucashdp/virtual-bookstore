# Users Resources

    GET v1/public/users/:userId

## Description
Returns the user of reference id.

## Request Parameters

- **userId** _(required)_ — string

***

## Example
**Request URI**

    https://virtual-bookstore-lucashdp.herokuapp.com/v1/public/users/5bb0e04a7ca1951a9cb23d50

**Request Response**
``` json
{
    "_id": ObjectId("5bb0e04a7ca1951a9cb23d50"),
    "name": "Lucas Duarte",
    "...": ""
}
```