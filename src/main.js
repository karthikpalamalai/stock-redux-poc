import React from 'react';
import { connect } from 'react-redux';
import { emitTextChanged } from './mainactionemitter';

const Main = (props) => {
    var txt = "";
    return(
        <div>
           Title: {props.main.title}
           <input type="text" name="RedInput" style={{"height": "50px"}} onChange={el => props.onTextChange(el.target.value)} />
        </div>);
};

// function myFunction() {
//     const  [count, setCount] = useState(0);
//     //alert("Text Box value " + document.getElementById("RedInput").value);
// }

const mapStateToProps = state => ({
    main: state.mainReducer
});
  
const mapDispatchToProps = dispatch => ({
     onTextChange: (txt) => dispatch(emitTextChanged(txt))
  });

const connectedMain = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Main);
  
export default connectedMain;