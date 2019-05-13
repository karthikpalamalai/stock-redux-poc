import InitStateService from './services/initStateService';
//import InitStateSerivceFake from './services/fakes/initStateService';
const ENVIRONMENT = "Development";

const ServiceProvider = {
    initStateService: (inpParams, onSuccess, onError) => {
        if (ENVIRONMENT === "Production")
            InitStateService(inpParams, onSuccess, onError);
        // else
        //     InitStateServiceFake(inpParams, onSuccess, onError);
    },
};

export default ServiceProvider; 