import React from 'react';
import { connect } from 'react-redux';
import { emitTextChanged } from './mainactionemitter';
import Body from './components/body/body';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import './Main.css';

const Main = (props) => {
    var txt = "";
    return(
        <div className='flex-container'>
            <Header />
            <Body />
            Title: {props.main.title}
              <input type="text" name="RedInput" style={{"height": "50px"}} onChange={el => props.onTextChange(el.target.value)} />        
          <Footer />
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