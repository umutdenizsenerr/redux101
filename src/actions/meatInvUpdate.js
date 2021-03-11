export default (operation,index) => {

    return {
        type: 'updateMeat',
        payLoad: {
            operation,
            index
        },
        
    }
}