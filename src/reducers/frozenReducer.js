import clearInventory from "../actions/clearInventory";

const seedData = [
    {
        food:  "TV dinners",
        quantity:10
    },
    {
        food:  "Frozen Veggies",
        quantity:21
    },
    {
        food: "Frozen Pizzas",
        quantity:25
    }
  

]


export default (state = seedData,action) =>{
    console.log("frozen red running");
    if(action.type==='updateFrozen'){
        const newState = [...state];
        if(action.payLoad.operation ==='+'){
            newState[action.payLoad.index].quantity++;
        }
        else if(action.payLoad.operation==='-'){
            newState[action.payLoad.index].quantity--;
        }
        return newState;
    }
    else if(action.type==='clearInventory'){
        let newState = [...state];
        newState.forEach((item,i)=>{
            item.quantity=0;
        })
        return newState;
    }
    return state;
}