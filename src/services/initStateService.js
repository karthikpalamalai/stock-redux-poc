const InitStateService = (inpParams, transform, onSuccess, onError) => {
    const url = 'https://cloud.iexapis.com/stable/stock/' + inpParams.stock + '/quote?token=pk_1da25943b9a44ffebd6d11f94c7e4fa8';
    try {
        fetch(url, inpParams).then(resp => {
            // if (!resp.status !== 200)
            //    throw resp.error;
            
            resp.json().then(d => {
                const transformedData = transform(d);
                onSuccess(transformedData);
            }).catch(e => {});
           
        }).catch(e => {
            onError(e);
        });
    } catch (err) {
        onError(err);
    }
};

export default InitStateService;