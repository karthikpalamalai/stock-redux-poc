import React from 'react';

const FrequencyPicker = ({ config, selectedID, onFrequencyChanged }) => {

    // const listButton = config.forEach(function(value, key) {
    //         <div>
    //             <button key={value.id} type="button" onClick={e => onFrequencyChanged(e)} class="btn btn-primary btn-xs"> {value.display} </button> 
    //         </div>
    // });

        return (
             config.map((cfg) => 
                <div>
                    <button key={cfg.id} type="button" onClick={e => onFrequencyChanged(e)} class="btn btn-primary btn-xs"> {cfg.display} </button> 
                </div>
            )
        );    
}

export default FrequencyPicker;