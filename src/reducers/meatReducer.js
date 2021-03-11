const seedData = [
    {
        food:  "chicken breast",
        quantity:14
    },
    {
        food:  "bacon",
        quantity:11
    },
    {
        food: "mahi mahi",
        quantity:35
    },
    {
        food: "salmon",
        quantity:135
    }
  

]


export default (state = seedData,action) =>{
    console.log("meat red running");
  
    if(action.type==='updateMeat'){
      
        let newState = [...state];
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