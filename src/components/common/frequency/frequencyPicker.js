import React from 'react';

import './frequencyPicker.scss';

const FrequencyPicker = (props) => {

    const {config, selectedId, onFrequencyChanged } = props

    console.log(" FrequencyPicker => ", selectedId)     

    const buttonList = config.map(
        (cfg) => 
        <button key={cfg.id} class={'freq-btn ' + (selectedId === cfg.id ? 'active-freq' : 'inactive-freq')} type="button" onClick={() => onFrequencyChanged(cfg)}> {cfg.display} </button> 
    );
   return (
        <div className='freq-picker'>
             { buttonList }
        </div>
   );    
}

export default FrequencyPicker; 
