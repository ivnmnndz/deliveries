const express = require("express");
const router = express.Router();
const {
  getDeliveryRoutes,
  addDeliveryRoute,
  updateDeliveryRoute,
  deleteDeliveryRoute,
} = require("../controllers/deliveryRouteController");

const { protected } = require('../middleware/authMiddleware')

router.route("/").get(protected, getDeliveryRoutes).post(protected, addDeliveryRoute);
router.route("/:id").put(protected, updateDeliveryRoute).delete(protected, deleteDeliveryRoute);

module.exports = router;
