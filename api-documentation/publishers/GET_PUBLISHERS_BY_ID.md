# Publishers Resources

    GET v1/public/publishers/:publisherId

## Description
Returns the publisher of reference id.

## Request Parameters

- **publisherId** _(required)_ — string

***

## Example
**Request URI**

    https://virtual-bookstore-lucashdp.herokuapp.com/v1/public/publishers/5bb0e04a7ca1951a9cb23d50

**Request Response**
``` json
{
    "_id": ObjectId("5bb0e04a7ca1951a9cb23d50"),
    "name": "Editora Erica",
    "...": ""
}
```