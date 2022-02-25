const express = require("express");
const router = express.Router();
const {
  getDeliveryRoutes,
  addDeliveryRoute,
  updateDeliveryRoute,
  deleteDeliveryRoute,
} = require("../controllers/deliveryRouteController");

router.get("/", getDeliveryRoutes);
router.post("/", addDeliveryRoute);
router.put("/:id", updateDeliveryRoute);
router.delete("/:id", deleteDeliveryRoute);

module.exports = router;
