
const KeyStatsServiceFake = (data, transform, onSuccess, onError) => {

    if(onSuccess) {
        onSuccess(
            {
                id: 'keyStats-1',
                previousClose: 156.73,
                dayRange: '153.25-154.80', 
                volume: 20567140, 
                marketCap: 760334287200,
                PERatio: 16.86, 
                openPrice: 154.00, 
                WeekRange52: 93.63-159.65,
                totalAvgVolume: 29623234,
                earningsPerShare: 2.1, 
                dividentYield: '1.73%'
            }
        )
    }
}

export default KeyStatsServiceFake; 