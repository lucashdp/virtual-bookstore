# Users Resources

    POST v1/public/users

## Description
Create and return the new user.

## Parameters

- **user** _(required)_ — object
    - **name** _(required)_ — string
    - **Others params...** _(optional)_

***

## Example
**Request**

    https://virtual-bookstore-lucashdp.herokuapp.com/v1/public/users

**Return**
``` json
{
    "_id": ObjectId("5bb0e04a7ca1951a9cb23d50"),
    "name": "Lucas Duarte",
    "...": ""
}
```