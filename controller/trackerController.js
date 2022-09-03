"use strict";
let trackerController ={}
let expenseList = []
var accountBalance=0;
trackerController.addExpenseData=async(payload)=>{    
    let response={
        date:payload.body.date,
        category: payload.body.category,
        notes:payload.body.notes,
        amount:payload.body.amount,
        closingBalance:accountBalance-payload.body.amount,
    }
    expenseList.push(response)
    accountBalance=accountBalance-payload.body.amount
    return response
}

trackerController.getIncomeBalance = async (payload)=>{
    return accountBalance;
}

trackerController.addIncomeBalance = async(payload)=>{
    accountBalance = accountBalance+Number(payload.body.income)
    return accountBalance;
}

trackerController.getExpenseList = async(payload)=>{
    return expenseList;
}
module.exports = trackerController