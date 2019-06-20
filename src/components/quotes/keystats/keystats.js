import React from 'react';
import { connect } from 'react-redux';
import './keystats.scss';

const keystatsComp = ({ keystats }) => {
    const {
        previousClose,
        dayRange, 
        volume, 
        marketCap,
        PERatio, 
        openPrice, 
        WeekRange52,
        totalAvgVolume,
        earningsPerShare, 
        dividentYield
    } = keystats;
    return(
        <div className='adaptv-keystat'>  
            <table >
                <caption>Key Stats </caption>
                <tr>
                   <td>  
                        <tr>
                            <td>previousClose</td>
                            <td>{previousClose}</td>
                        </tr>
                        <tr>
                            <td>dayRange</td>
                            <td>{dayRange}</td>
                        </tr>
                        <tr>
                            <td>volume</td>
                            <td>{volume}</td>
                        </tr>
                        <tr>
                            <td>marketCap</td>
                            <td>{marketCap}</td>
                        </tr>
                        <tr>
                            <td>PERatio</td>
                            <td>{PERatio}</td>
                        </tr>
                    </td>  
                    <td>  
                        <tr>
                            <td>Open</td>
                            <td>{openPrice}</td>
                        </tr>
                        <tr>
                            <td>52-Week Range</td>
                            <td>{WeekRange52}</td>
                        </tr>
                        <tr>
                            <td>Total Avg volume</td>
                            <td> {totalAvgVolume} </td>
                        </tr>
                        <tr>
                            <td>earningsPerShare</td>
                            <td> {earningsPerShare} </td>
                        </tr>
                        <tr>
                            <td>dividentYield</td>
                            <td> {dividentYield} </td>
                        </tr>
                    </td>    
                </tr>    
            </table>
        </div>
    );
}; 

const mapStateToProps = state => ({
    keystats: state.keystatReducer
});
  
const mapDispatchToProps = dispatch => ({

});

const keystats = connect(
    mapStateToProps,
    mapDispatchToProps
  )(keystatsComp);

export default keystats; 