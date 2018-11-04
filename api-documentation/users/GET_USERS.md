# Users Resources

    GET v1/public/users

## Description
Returns a list of users.


## Example
**Request URI**

    https://virtual-bookstore-lucashdp.herokuapp.com/v1/public/users

**Request Response**
``` json
[
    {
        "_id": ObjectId("5bb0e04a7ca1951a9cb23d50"),
        "name": "Lucas Duarte",
        "...": ""
    },
    {
        "_id": ObjectId("5bb0e04a7ca1951a9cb23d50"),
        "name": "Jose Lucas",
        "...": ""
    }
]
```