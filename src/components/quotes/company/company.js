import React from 'react';
import './company.scss';
import { connect } from 'react-redux';

const CompanyOverviewComp = ({companyOverview}) => {
    const {
        name, 
        ticker,
        companyUrl, 
        description
    } = companyOverview;
    return(
        <div> 
            <div className='adaptv-comanyName'> 
                <p> {name} ({ticker}) </p>
            </div>
            <div className='adaptv-companyurl'> 
                <a href= {companyUrl}> {companyUrl} </a>
            </div>
            <div className='adaptv-companydesc'> 
                <p> { description } </p>
            </div>
        </div>
    );
}; 

const mapStateToProps = state => ({
    companyOverview: state.companyOverviewReducer
});
  
const mapDispatchToProps = dispatch => ({

});

const CompanyOverview = connect(
    mapStateToProps,
    mapDispatchToProps
  )(CompanyOverviewComp);

export default CompanyOverview; 