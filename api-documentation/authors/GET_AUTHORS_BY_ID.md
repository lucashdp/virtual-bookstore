# Authors Resources

    GET v1/public/authors/:authorId

## Description
Returns the author of reference id.

## Request Parameters

- **authorId** _(required)_ — string

***

## Example
**Request URI**

    https://virtual-bookstore-lucashdp.herokuapp.com/v1/public/authors/5bb0e04a7ca1951a9cb23d50

**Request Response**
``` json
{
    "_id": ObjectId("5bb0e04a7ca1951a9cb23d50"),
    "name": "Caio Ribeiro Pereira",
    "...": ""
}
```