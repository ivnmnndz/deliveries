const express = require("express");
const router = express.Router();
const {
  getDeliveryRoutes,
  addDeliveryRoute,
  updateDeliveryRoute,
  deleteDeliveryRoute,
} = require("../controllers/deliveryRouteController");

router.route("/").get(getDeliveryRoutes).post(addDeliveryRoute);
router.route("/:id").put(updateDeliveryRoute).delete(deleteDeliveryRoute);

module.exports = router;
