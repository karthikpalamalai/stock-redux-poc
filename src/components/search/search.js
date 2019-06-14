import React from 'react';
import './search.scss';
import { connect } from 'react-redux';
import { emitTextChanged } from '../../emitter/searchactionemitter';

const SearchComp = (props) => {
    const { search } = props; 
    const { ticker } = search; 
    const handleTickerChange = event => {
        const tick = event.target.value;
        props.dispatchOnChange(tick);
    };
    return (
        <div className="search"> 
            <label htmlFor="tickerSearch"> 
                {ticker} 
                <input 
                    onChange={handleTickerChange}
                    id="tickerSearch"
                    placeholder="ticker"
                />
            </label>
        </div>
    )
}

const mapStateToProps = state => ({
    search: state.searchReducer
})

const mapDispatchToProps = dispatch => ({
    dispatchOnChange: (tick) => dispatch(emitTextChanged(tick))
})

const Search = connect(
    mapStateToProps,
    mapDispatchToProps
  )(SearchComp);

export default Search;