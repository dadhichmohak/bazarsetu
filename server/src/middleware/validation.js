const { body, validationResult } = require('express-validator');

const validateRegistration = [
    body('aadhaarNumber').isLength({ min: 12, max: 12 }).withMessage('Aadhaar number must be 12 digits long.'),
    body('name').notEmpty().withMessage('Name is required.'),
    body('contact').isMobilePhone('any').withMessage('Valid contact number is required.'),
    body('userType').isIn(['farmer', 'buyer']).withMessage('User type must be either farmer or buyer.'),
];

const validateProduct = [
    body('name').notEmpty().withMessage('Product name is required.'),
    body('quantity').isNumeric().withMessage('Quantity must be a number.'),
    body('price').isNumeric().withMessage('Price must be a number.'),
];

const validateOrder = [
    body('productId').notEmpty().withMessage('Product ID is required.'),
    body('quantity').isNumeric().withMessage('Quantity must be a number.'),
];

const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

module.exports = {
    validateRegistration,
    validateProduct,
    validateOrder,
    validate,
};