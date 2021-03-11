export default (operation,index) => {

    return {
        type: 'updateFrozen',
        payLoad: {
            operation,
            index
        },
        
    }
}