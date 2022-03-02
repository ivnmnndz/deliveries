const asyncHandler = require("express-async-handler");
const DeliveryRoute = require("../models/deliveryModel");
const User = require("../models/userModel");

//@desc Get delivery routes
//@route GET /api/routes
//@access private
const getDeliveryRoutes = asyncHandler(async (req, res) => {
  const deliveryRoutes = await DeliveryRoute.find({ user: req.user.id });

  res.status(200).json(deliveryRoutes);
});

//@desc Set delivery route
//@route POST /api/routes
//@access private
const addDeliveryRoute = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add text field");
  }
  const deliveryRoute = await DeliveryRoute.create({
    text: req.body.text,
    user: req.user.id,
  });
  res.status(200).json(deliveryRoute);
});

//@desc Update delivery routes
//@route PUT /api/routes/:id
//@access private
const updateDeliveryRoute = asyncHandler(async (req, res) => {
  //get deliveryRoute by id
  const deliveryRoute = await DeliveryRoute.findById(req.params.id);
  if (!deliveryRoute) {
    res.status(400);
    throw new Error("Delivery route not found");
  }
  const user = await User.findById(req.user.id)
  //check for user
  if (!user) {
    res.status(401)
    throw new Error('User not found')

  }
  //check if logged in user matches deliveryRoute
  if (deliveryRoute.user.toString() !== user.id) {
    req.status('401')
    throw new Error('User not authorized')
  }
  const updatedDeliveryRoute = await DeliveryRoute.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(updatedDeliveryRoute);
});

//@desc Delete delivery routes
//@route DELETE /api/routes/:id
//@access private
const deleteDeliveryRoute = asyncHandler(async (req, res) => {
  const deliveryRoute = await DeliveryRoute.findById(req.params.id);
  if (!deliveryRoute) {
    res.status(400);
    throw new Error("Delivery route not found");
  }
  const user = await User.findById(req.user.id)
  //check for user
  if (!user) {
    res.status(401)
    throw new Error('User not found')
  }
  //check if logged in user matches deliveryRoute
  if (deliveryRoute.user.toString() !== user.id) {
    req.status('401')
    throw new Error('User not authorized')
  }
  await deliveryRoute.remove();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getDeliveryRoutes,
  addDeliveryRoute,
  updateDeliveryRoute,
  deleteDeliveryRoute,
};
