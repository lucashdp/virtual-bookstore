# Publishers Resources

    POST v1/public/publishers

## Description
Create and return the new publisher.

## Request Body

- **publisher** _(required)_ — object
    - **name** _(required)_ — string
    - **Others attributes...** _(optional)_

***

## Example
**Request URI**

    https://virtual-bookstore-lucashdp.herokuapp.com/v1/public/publishers

**Request Response**
``` json
{
    "_id": ObjectId("5bb0e04a7ca1951a9cb23d50"),
    "name": "Casa do Codigo",
    "...": ""
}
```