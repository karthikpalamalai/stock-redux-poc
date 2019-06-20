
const StockChartServiceFake = (data, transform, onSuccess, onError) => {

    if(onSuccess) {
        let chartdata = [];
        let visits = 10;
        for (let i = 1; i < 366; i++) {
            visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
            chartdata.push({ date: new Date(2018, 0, i), name: "name" + i, value: visits });
        }

        onSuccess(
            {
                id: 'stockchart-1',
                chartdata: chartdata
            }
        )
    }
}

export default StockChartServiceFake; 