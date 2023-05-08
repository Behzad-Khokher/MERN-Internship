const express = require("express");
const {
  getBootcamps,
  getBootcamp,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp,
} = require("../controllers/bootcamps");

const router = express.Router();

// Router for Showing all bootcamps and creating a bootcamp
router.route("/").get(getBootcamps).post(createBootcamp);

// Router for all routes that require some type of id (getting a bootcamp, update a bootcamp, delete a bootcamp)
router
  .route("/:id")
  .get(getBootcamp)
  .put(updateBootcamp)
  .delete(deleteBootcamp);

module.exports = router;
