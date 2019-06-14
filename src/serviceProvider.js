import InitStateService from './services/initStateService';
import InitStateServiceFake from './services/fakes/initStateService';
import LatestNewsServiceFake from './services/fakes/latestNewsService';
const ENVIRONMENT = "Production"; //"Development";

const ServiceProvider = {
    initStateService: (inpParams, transform, onSuccess, onError) => {
        if (ENVIRONMENT === "Production")
            InitStateService(inpParams, transform, onSuccess, onError);
        else
            InitStateServiceFake(inpParams, transform, onSuccess, onError);
    },
    latestNewsService: (inpParams, transform, onSuccess, onError) => {
        LatestNewsServiceFake(inpParams, transform, onSuccess, onError);
    }
};



export default ServiceProvider; 