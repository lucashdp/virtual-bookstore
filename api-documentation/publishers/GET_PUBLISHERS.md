# Publishers Resources

    GET v1/public/publishers

## Description
Returns a list of publishers.


## Example
**Request URI**

    https://virtual-bookstore-lucashdp.herokuapp.com/v1/public/publishers

**Request Response**
``` json
[
    {
        "_id": ObjectId("5bb0e04a7ca1951a9cb23d49"),
        "name": "Editora Erica",
        "...": ""
    },
    {
        "_id": ObjectId("5bb0e04a7ca1951a9cb23d50"),
        "name": "Casa do Codigo",
        "...": ""
    }
]
```