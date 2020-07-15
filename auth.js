
function checkAuthentication(req, res, next) {
    if (req.session.customer) {
        next();
    } else {
        res.status(401).json({ error: 'User Not Authorized' });
    };
};

module.exports = checkAuthentication;

