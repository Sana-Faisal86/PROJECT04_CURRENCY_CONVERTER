#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
// Define the list of currencie and thier exchange rates:
let exchange_rate = {
    USD: 1,
    EUR: 0.9,
    JYP: 113,
    CAD: 1.3,
    AUD: 1.65,
    PKR: 277.7, // Pakistan Rupees
    // Add more currency and thier exchange rates here
};
console.log(chalk.blue("\n\t\t", "+".repeat(60)));
console.log("\t\t", chalk.black.bgGray("<<<<<<<<<<<<<", chalk.black.bgGreen(" WELLCOME TO CURRENCY CONVERTER "), ">>>>>>>>>>>>>>"));
console.log(chalk.blue("\t\t", "+".repeat(60)));
// Print the user to select currencies to convert from and to :
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: chalk.red.bgWhite("\n\t**Select the currency to convert from :"),
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"],
    },
    {
        name: "to_currency",
        type: "list",
        message: chalk.red.bgWhite("\t**Select the currency to convert into :"),
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"],
    },
    {
        name: "amount",
        type: "input",
        message: chalk.black.bgHex("#FF8800")("\n\t\t**Enter the amount to convert ==> "),
    },
]);
// Perform currency conversion by using Formula:
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount;
// Formula of conversion:
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;
// Display the converted amount:
console.log(chalk.black.bgRedBright(`\n\t\t\t**Converted Amount ==> ${converted_amount.toFixed(2)}`));
console.log(chalk.black.bgCyanBright("\n\t\t ==> THANKS FOR USING CURRENCY CONVERTER <=="));
//PROGRAME END:
