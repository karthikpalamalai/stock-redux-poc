const companyOverviewServiceFake = (data, transform, onSuccess, onError) => {
    if (onSuccess) {
        onSuccess(
            {
                id: 'CP1',
                name: 'Apple Inc', 
                ticker: 'AAPL',
                companyurl: 'www.apple.com', 
                description: 'Apple Inc is an American multinational technology company. It designs manufactures and markets'
            }
        )
    }
}

export default companyOverviewServiceFake;