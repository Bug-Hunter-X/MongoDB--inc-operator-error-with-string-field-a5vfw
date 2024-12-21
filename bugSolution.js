```javascript
//Correct usage of $inc and $set operators
db.collection('myCollection').updateOne({"_id":ObjectId("someId")},{$inc:{field1:1},$set:{field2:"updatedString"}})
```