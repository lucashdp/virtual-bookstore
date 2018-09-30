# Authors Resources

    POST v1/public/authors

## Description
Create and return the new author.

## Parameters

- **author** _(required)_ — object
    - **name** _(required)_ — string
    - **Others params...** _(optional)_

***

## Example
**Request**

    https://virtual-bookstore-lucashdp.herokuapp.com/v1/public/authors

**Return**
``` json
{
    "_id": ObjectId("5bb0e04a7ca1951a9cb23d50"),
    "name": "Caio Ribeiro Pereira",
    "...": ""
}
```