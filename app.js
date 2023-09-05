import inquirer from 'inquirer';
import chalk from 'chalk';
import showbanner from 'node-banner';
(async () => {
    const giveUser = await inquirer.prompt([
        {
            name: 'UserId',
            message: 'Enter Your Id',
            type: 'input',
        },
        {
            name: 'UserPin',
            message: 'Enter Your Pin',
            type: 'password',
        },
    ]);
    const getData = {
        userId: giveUser.UserId,
        userPin: giveUser.UserPin,
        amount: Math.floor(Math.random() * 200000 + 1),
    };
    console.log(getData);
    const getOptions = await inquirer.prompt([
        {
            name: 'option',
            message: 'Select an option',
            type: 'list',
            choices: ['Cash Withdrawal', 'Transaction Receipt', 'Exit'],
        },
    ]);
    console.log(getOptions.option);
    if (getOptions.option === "Cash Withdrawal") {
        console.log("Your Current Amount", getData.amount);
        const EnteredAmount = await inquirer.prompt([
            {
                name: "Amount",
                message: "Enter Your Amount",
                type: "number",
                validate: (input) => {
                    if (input > getData.amount) {
                        return "Infucient Balence";
                    }
                    else {
                        return true;
                    }
                }
            }
        ]);
        getData.amount -= EnteredAmount.Amount;
        console.log("Amount After Withdrawal", getData.amount);
    }
})();
await showbanner(chalk.bgRed(`Mezan Bank`, `This is official bank of pakistan`, `green`));
