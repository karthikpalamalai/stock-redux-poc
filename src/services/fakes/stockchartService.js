
const StockChartServiceFake = (data, transform, onSuccess, onError) => {

    const chData = () => {
        const data = [];
        let price1 = 1000;
        let price2 = 1200;
        for (let i = 0; i < 10; i++) {
          price1 += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 100);
          data.push({ date1: new Date(2015, 0, i), price1 });
        }
        for (let i = 0; i < 10; i++) {
          price2 += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 100);
          data.push({ date2: new Date(2017, 0, i), price2 });
        }
        return data;
    }

    if(onSuccess) {

        const data = chData(); 

        onSuccess(
            {
                id: 'stockchart-1',
                chartdata: data
            }
        )
    }
}

export default StockChartServiceFake; 