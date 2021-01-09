const express = require("express");
const router = express.Router();
const user = require("../controllers/user");

router.get("/:userId", user.getNotes);

router.post("/:userId", user.addNotes);

router.put("/:noteId", user.updateNote);

router.patch("/:noteId", user.changeArchieveState);

router.delete("/:noteId", user.removeNote);


module.exports = router;
