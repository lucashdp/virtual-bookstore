# Books Resources

    DELETE v1/public/books/:bookId/comments/:commentId

## Description
Delete the comment book's of references ids.

## Parameters

- **bookId** _(required)_ — string
- **commentId** _(required)_ — string

***

## Example
**Request**

    https://virtual-bookstore-lucashdp.herokuapp.com/v1/public/books/5bb0e04a7ca1951a9cb23d50/comments/5bb0e04a7ca1951a9cb23d49

**Return**

"Comment id 5bb0e04a7ca1951a9cb23d49 deleted !"