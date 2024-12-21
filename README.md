# MongoDB $inc operator error with string field

This repository demonstrates a common error when using the `$inc` operator in MongoDB update operations. The `$inc` operator is designed to increment numeric fields only. Attempting to increment a string field will result in an error.

## Bug

The bug lies in the following code snippet:

```javascript
db.collection('myCollection').updateOne({"_id":ObjectId("someId")},{$inc:{field1:1,field2:"someString"}})
```

This code attempts to increment both `field1` (numeric) and `field2` (string) using the `$inc` operator.  The `$inc` operator will fail on the second field because `field2` is a string.

## Solution

To fix this error, ensure that you only use the `$inc` operator on numeric fields. If `field2` needs to be updated, use the `$set` operator instead.

The corrected code is shown in the `bugSolution.js` file.

## How to reproduce

1. Create a MongoDB collection named 'myCollection'.
2. Insert a document with a numeric field (field1) and a string field (field2).
3. Run the code in `bug.js`. You will get an error.
4. Run the code in `bugSolution.js` to see the correct operation.