import InitStateService from './services/initStateService';
import InitStateServiceFake from './services/fakes/initStateService';
import LatestNewsServiceFake from './services/fakes/latestNewsService';
import CompanyOverviewServiceFake from './services/fakes/companyOverview';
import TopPeersServiceFake from './services/fakes/toppeersService';
import KeyStatsServiceFake from './services/fakes/keystatsService';

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
    },
    companyOverviewService: (inpParams, transform, onSuccess, onError) => {
        CompanyOverviewServiceFake(inpParams, transform, onSuccess, onError);
    },
    topPeersService: (inpParams, transform, onSuccess, onError) => {
        TopPeersServiceFake(inpParams, transform, onSuccess, onError);
    }, 
    keyStatsService: (inpParams, transform, onSuccess, onError) => {
        KeyStatsServiceFake(inpParams, transform, onSuccess, onError)
    }

};



export default ServiceProvider; 