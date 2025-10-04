const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// Route to create a new order
router.post('/', orderController.createOrder);

// Route to get all orders for a user
router.get('/:userId', orderController.getUserOrders);

// Route to update an order status
router.put('/:orderId', orderController.updateOrderStatus);

// Route to delete an order
router.delete('/:orderId', orderController.deleteOrder);

module.exports = router;