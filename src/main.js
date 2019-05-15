import React from 'react';
import { connect } from 'react-redux';
import { emitTextChanged, emitClick } from './mainactionemitter';
import Body from './components/body/body';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import './Main.css';

const Main = (props) => {
    var txt = "";
    return(
        <div className='flex-container'>
            <Header className="hhh" />
            <input type="text" name="RedInput" style={{"height": "20px", "background":"yellow"}} onChange={el => props.onTextChange(el.target.value)} />        
            <Body className='body' />
               Title: {props.main.title}
               <input type='button' value='click' style={{"width":"40px"}} onClick={props.onClick} />
          <Footer className='footer' />
        </div>);
};


const mapStateToProps = state => ({
    main: state.mainReducer
});
  
const mapDispatchToProps = dispatch => ({
     onTextChange: (txt) => dispatch(emitTextChanged(txt)),
     onClick: () => dispatch(emitClick())
  });

const connectedMain = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Main);
  
export default connectedMain;