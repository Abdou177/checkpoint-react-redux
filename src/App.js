
import { Component } from 'react';
import{connect} from 'react-redux'
import './App.css';
class App extends Component{

  


render(){
  console.log(this.props)
  return (
    <div className="App">
      <button onClick={this.props.increase}>+</button>
      <div>{this.props.x}{this.props.y}</div>
      <button onClick={this.props.decrease}>-</button>
    </div>
  );
 
}
}
function mapStateToProps(initState){
  return {
    x : initState.name,
    y:initState.count
  }  
}
  function mapDispatchToProps (dispatch){
    return{
      increase:()=>dispatch({type:'INCREASE'}),
      decrease:()=>dispatch({type:'DECREASE'})
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(App);
