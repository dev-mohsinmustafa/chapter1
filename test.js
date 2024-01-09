


const state = {account : {amount :1}, bonus : {points :2 }}; 


console.log(newState,state);
// const newState ={  account: state.account, bonus:{points: state.bonus.points+1} };

// const newState ={  account: {amount: state.account.amount}, bonus:{points: state.bonus.points+1} };

// spread operator
const newState ={  account: {...state.account}, bonus:{points: state.bonus.points+1} };
console.log(newState,state);


state.account.amount =100;

console.log(newState,state);


