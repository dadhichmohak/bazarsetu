const generateResponse = (status, message, data = null) => {
    return {
        status,
        message,
        data
    };
};

const validateRequestBody = (body, requiredFields) => {
    for (const field of requiredFields) {
        if (!body[field]) {
            return false;
        }
    }
    return true;
};

const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-IN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
};

module.exports = {
    generateResponse,
    validateRequestBody,
    formatDate
};