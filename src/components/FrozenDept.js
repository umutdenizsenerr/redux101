import React , {Component} from 'react'
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import updateFrozen from '../actions/frozenInvUpdate'
class FrozenDept extends Component{
    increment = (operation,index)=>{
       this.props.updateFrozen(operation,index);
    }
    render(){
        
        const frozenInventory = this.props.frozenData.map((item,i)=>{
            return (
        
                <div key ={i}>
                    <li >{item.food}: {item.quantity}</li>
                    <input type = "button" onClick={()=>{this.increment('+',i)}} value ="+" />
                    <input type = "button" onClick={()=>{this.increment('-',i)}} value ="-" />
                </div>
                
        
        
            )})
        return(
            <div>
                <ul>
                    {frozenInventory}
                </ul>
            </div>
         
        )
    }
}
function mapStateToProps(state){
    return{
        frozenData: state.frozen,
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        updateFrozen: updateFrozen,

    },dispatch)
}
//export default FrozenDept;
export default connect(mapStateToProps,mapDispatchToProps)(FrozenDept);