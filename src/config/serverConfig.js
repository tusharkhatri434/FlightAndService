const dotEnv = require("env");

dotEnv.config();

module.exports = {
    PORT:process.env.PORT
}