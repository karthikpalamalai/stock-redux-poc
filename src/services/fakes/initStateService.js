const InitStateServiceFake = (data, transform, onSuccess, onError) => {
    onSuccess({ par1 : "Param1 Fake " + new Date().toString(), par2: "Param2 Fake 1"});
};

export default InitStateServiceFake;