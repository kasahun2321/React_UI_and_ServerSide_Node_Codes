const jwt = require('jsonwebtoken');
const secret = "i am the secret";

class JwtManager{

        generate(data){ // generate JWT
            const token =jwt.sign(data,secret);
            return token;
        }

        verify(token){ // verification
            const data=jwt.verify(token,secret);
            return data;
        }
}
module.exports = new JwtManager();