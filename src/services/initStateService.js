const InitStateService = (data, onSuccess, onError) => {
    // fetch().then(data => onSuccess(data)).error(err => onError(err))
    try {
        // fetch
        onSuccess({ par1 : "Param1", par2: "Param2"});
    } catch(err) {
        onError(err);
    } 
};

export default InitStateService;