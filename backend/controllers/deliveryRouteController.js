//@desc Get delivery routes
//@route GET /api/routes
//@access private
const getDeliveryRoutes = (req, res) => {
  res.status(200).json({ routes: "get delivery routes" });
};

//@desc Set delivery route
//@route POST /api/routes
//@access private
const addDeliveryRoute = (req, res) => {
  res.status(200).json({ routes: "set delivery routes" });
};

//@desc Update delivery routes
//@route PUT /api/routes/:id
//@access private
const updateDeliveryRoute = (req, res) => {
  res.status(200).json({ routes: `update delivery route ${req.params.id}` });
};

//@desc Delete delivery routes
//@route DELETE /api/routes/:id
//@access private
const deleteDeliveryRoute = (req, res) => {
  res.status(200).json({ routes: `delete delivery route ${req.params.id}` });
};

module.exports = {
  getDeliveryRoutes,
  addDeliveryRoute,
  updateDeliveryRoute,
  deleteDeliveryRoute,
};
