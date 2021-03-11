const seedData = [
    {
        food:  "lettuce",
        quantity:14
    },
    {
        food:  "turnips",
        quantity:21
    },
    {
        food: "apples",
        quantity:25
    },
    {
        food: "cilantro",
        quantity:135
    }
  

]


export default (state = seedData,action) =>{
    console.log("produce red running");
  
    return state;
}