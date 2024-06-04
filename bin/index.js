#! /usr/bin/env node
//REQUIREMENTS OF BANK APP
var inquirer = require('inquirer');
var chalk = require('chalk');
var customer = /** @class */ (function () {
    function customer() {
        var q = inquirer.prompt([{
                name: 'firstname',
                type: 'input',
                message: 'Enter Your first name',
            },
            {
                name: 'lastname',
                type: 'input',
                message: 'Enter Your last name',
            },
            {
                name: 'firstname',
                type: 'input',
                message: 'Enter Your first name',
            },
            {
                name: 'gender',
                type: 'checkbox',
                message: 'Select gender',
                choices: ['Male', 'Female']
            },
            {
                name: 'age',
                type: 'number',
                message: 'Enter Your age',
            },
            {
                name: 'mobile',
                type: 'number',
                message: 'Enter Your mobile number',
            },
            {
                name: 'account',
                type: 'number',
                message: 'Enter amount in your account ',
            },
            {
                name: 'debit',
                type: 'number',
                message: 'Enter amount to debit',
            },
            {
                name: 'credit',
                type: 'number',
                message: 'Enter amount to credit'
            },
        ])
            .then(function (answer) {
            console.log('\n', chalk.bgYellow('Customer details:'), '\n', '\n', chalk.magenta('Name:', answer.firstname, answer.lastname), '\n', chalk.red('Gender:', answer.gender), '\n', chalk.cyan('Age:', answer.age), '\n', chalk.green('Mobilenumber:', answer.mobile));
            console.log('\n', chalk.bgMagenta('Your Account have ', answer.account, 'dollars'));
            var account = answer.account;
            var debit = answer.debit;
            var credit = answer.credit;
            var deduct = account - debit;
            console.log(chalk.bgGreen('\n', 'In case of Debit'));
            console.log('Debit amount', debit);
            if (debit > account) {
                console.log(chalk.red('Message for Debit amount'), '\n', 'You cannot proceed, Credit your account');
            }
            if (debit < account) {
                console.log(chalk.green('Message for Debit amount'), '\n', 'After deducting debit, Your account has ', deduct, 'dollars');
            }
            console.log(chalk.bgGreen('\n', 'In case of Credit'));
            console.log('Credit amount', credit);
            console.log(chalk.green('Message for Credit amount'));
            if (credit <= 100) {
                console.log(chalk.yellow('Account has been credited, Your current amount is ', account + credit, 'dollars'));
            }
            if (credit > 100) {
                var credit1 = account + (credit - 1);
                console.log(chalk.cyan('Account has been credited,Your current amount is '), credit1, 'dollars', '\n', chalk.bgMagenta('Note: 1 dollar has beed deducted on crediting account above 100 dollars.'));
            }
        });
    }
    return customer;
}());
var cust = new customer();
