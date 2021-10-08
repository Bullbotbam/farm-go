const jwt = require('jsonwebtoken');

const secret = 'farmgossecret';
const expiration = '2h';

// export auth function
module.exports = {
    authMiddleWare: function ({ req }) {
        let token = req.body.token || req.query.token || req.headers.authorization

        if (req.headers.authorization) {
            token = token.split(' ').pop().trim();
        }

        if (!token) {
            return req;
        }

        try {
            const { data } = jwt.verify(token, secret, { maxAge: expiration })
            req.use = data
        } catch {
            console.log('Token is not valid')
        }

        return req
    },
    signToken: function ({ firstName, email, _id }) {
        const payload = { firstName, email, _id }

        return jwt.sign({ data: payload }, secret, { expiresIn: expiration })
    }
};
