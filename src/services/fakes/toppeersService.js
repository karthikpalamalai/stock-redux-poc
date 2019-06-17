const topPeersServiceFake = (data, transform, onSuccess, onError) => {
    if (onSuccess) {
        onSuccess(
            {
                id: 'TP1',
                peers: [
                {
                    ticker: 'MSFT',
                    name: 'MicroSoft'
                }, 
                {
                    ticker: 'NOK',
                    name: 'NOK'
                }, 
                {
                    ticker: 'IBM',
                    name: 'IBM'
                }, 
                {
                    ticker: 'HPQ',
                    name: 'HPQ'
                }                   
                ]
            }
        )
    }
}

export default topPeersServiceFake;