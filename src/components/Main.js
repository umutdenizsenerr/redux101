import React,{Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import clearInventory from '../actions/clearInventory'
class Main extends Component {
    render(){
        const frozenQuantity = this.props.frozenData.reduce((accum,frozenItem)=>accum+frozenItem.quantity,0)
        const meatQuantity = this.props.meatData.reduce((accum,frozenItem)=>accum+frozenItem.quantity,0)
        return(
            <div>
            <h2>FROZEN DEPT: {frozenQuantity}</h2>
            <h2>MEAT DEPT: {meatQuantity}</h2>  
            <button onClick ={this.props.clearInventory}>CLEAR INVENTORY</button>
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        frozenData: state.frozen,
        meatData : state.meat
    }
    }
function mapDispatchToProps(dispatch){
    return bindActionCreators({
        clearInventory: clearInventory
    },dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Main);