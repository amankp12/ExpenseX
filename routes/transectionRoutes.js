const express = require("express");
const {
  addTransection,
  getAllTransection,
  editTransection,
  deleteTransection,
} = require("../controllers/transectionCtrl");

//router object
const router = express.Router();

//routes
//add transaction POST Method
router.post("/add-transection", addTransection);
//Edit transaction POST Method
router.post("/edit-transection", editTransection);
//Delete transaction POST Method
router.post("/delete-transection", deleteTransection);

//get transaction
router.post("/get-transection", getAllTransection);

module.exports = router;
