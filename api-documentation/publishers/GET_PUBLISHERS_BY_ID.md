# Publishers Resources

    GET v1/public/publishers/:publisherId

## Description
Returns the publisher of reference id.

## Parameters

- **publisherId** _(required)_ — string

***

## Example
**Request**

    https://virtual-bookstore-lucashdp.herokuapp.com/v1/public/publishers/5bb0e04a7ca1951a9cb23d50

**Return**
``` json
{
    "_id": ObjectId("5bb0e04a7ca1951a9cb23d50"),
    "name": "Editora Erica",
    "...": ""
}
```