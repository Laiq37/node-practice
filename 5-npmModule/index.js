import validator from "validator";

import chalk from "chalk";

console.log(validator.isEmail('syedlaiq@gmail.com') ? chalk.green.inverse(true) : chalk.red.inverse(false));