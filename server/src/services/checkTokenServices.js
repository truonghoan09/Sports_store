let jwt = require('jsonwebtoken');

const CheckTokenServices = (data) => {
    let token = data.token;
    let decodeSuccess = new Promise(async(resolve, reject) => {
        try {
            const decodeToken = await jwt.verify(token, "123456");
            resolve(decodeToken);
        } catch (error) {
            resolve(false);
            reject(error)
        }
    })
    return (decodeSuccess);
}

module.exports = CheckTokenServices;