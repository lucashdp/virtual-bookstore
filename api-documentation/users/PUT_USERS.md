# Users Resources

    PUT v1/public/users/:userId

## Description
Edit and return the user of reference id.

## Parameters

- **userId** _(required)_ — string
- **user** _(required)_ — object
    - **name** _(required)_ — string
    - **Others params...** _(optional)_

***

## Example
**Request**

    https://virtual-bookstore-lucashdp.herokuapp.com/v1/public/users/5bb0e04a7ca1951a9cb23d50

**Return**
``` json
{
    "_id": ObjectId("5bb0e04a7ca1951a9cb23d50"),
    "name": "Lucas Duarte",
    "...": ""
}
```