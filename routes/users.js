var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
 // res.send('respond with a resource');
 res.json([
   {
     id: 1,
     username: "User1",
     favorites: [
       "google", "utube", "gogole"
     ]
   }, 
   {
     id: 2,
     username: "User2",
     favorites: [] 
   }, 
   {
     id: 3,
     username: "User3",
     favorites: [
       "fbook"
     ]
   }
  ]);
});

module.exports = router;
