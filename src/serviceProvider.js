import InitStateService from './services/initStateService';
import InitStateServiceFake from './services/fakes/initStateService';
const ENVIRONMENT = "Production"; //"Development";

const ServiceProvider = {
    initStateService: (inpParams, transform, onSuccess, onError) => {
        if (ENVIRONMENT === "Production")
            InitStateService(inpParams, transform, onSuccess, onError);
        else
            InitStateServiceFake(inpParams, transform, onSuccess, onError);
    },
};

export default ServiceProvider; 