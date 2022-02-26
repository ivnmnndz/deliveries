const DeliveryRoute = require("../models/deliveryModel");

//@desc Get delivery routes
//@route GET /api/routes
//@access private
const getDeliveryRoutes = async (req, res) => {
  const deliveryRoutes = await DeliveryRoute.find();

  res.status(200).json(deliveryRoutes);
};

//@desc Set delivery route
//@route POST /api/routes
//@access private
const addDeliveryRoute = async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add text field");
  }
  const deliveryRoute = await DeliveryRoute.create({
    text: req.body.text,
  });
  res.status(200).json(deliveryRoute);
};

//@desc Update delivery routes
//@route PUT /api/routes/:id
//@access private
const updateDeliveryRoute = async (req, res) => {
  const deliveryRoute = await DeliveryRoute.findById(req.params.id);
  if (!deliveryRoute) {
    res.status(400);
    throw new Error("Delivery route not found");
  }
  const updatedDeliveryRoute = await DeliveryRoute.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(updatedDeliveryRoute);
};

//@desc Delete delivery routes
//@route DELETE /api/routes/:id
//@access private
const deleteDeliveryRoute = async (req, res) => {
  const deliveryRoute = await DeliveryRoute.findById(req.params.id);
  if (!deliveryRoute) {
    res.status(400);
    throw new Error("Delivery route not found");
  }
  await deliveryRoute.remove();
  res.status(200).json({ id: req.params.id });
};

module.exports = {
  getDeliveryRoutes,
  addDeliveryRoute,
  updateDeliveryRoute,
  deleteDeliveryRoute,
};
