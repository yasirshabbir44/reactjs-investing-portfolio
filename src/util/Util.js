// utils.js
export const generateRandomData = (startDate, endDate, min, max) => {
    const data = [];
    const currentDate = new Date(startDate);


    while (currentDate <= endDate) {
        const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
        data.push({
            x: currentDate.toISOString().split('T')[0],
            y: randomValue,
        });

        currentDate.setDate(currentDate.getDate() + 1);
    }

    return data;
};

const day = 60 * 60 * 24 * 1000;

export const generateTableData = (startDate,endDate)=> {

    const newData = [];

    startDate = new Date(startDate);
    endDate = new Date(endDate);
    // Calculate the number of days between startDate and endDate
    const daysDifference = Math.floor((endDate - startDate) / (24 * 60 * 60 * 1000));

    for (let index = 0; index <= daysDifference; index++) {
        const currentDate = new Date(startDate);
        currentDate.setDate(startDate.getDate() + index);

        const previousDate = new Date(currentDate);
        previousDate.setDate(currentDate.getDate() - 1);

        newData.push({
            key: (index + 1).toString(),
            date: currentDate.toISOString().split('T')[0],
            price: (195.01 + index * 2.5).toFixed(2),
            open: (192.26 + index * 2).toFixed(2),
            high: (195.10 + index * 3).toFixed(2),
            low: (192.26 + index * 1.5).toFixed(2),
            volume: `${8 + index}M`,
            previousClose: (195.01 + (index - 1) * 2.5).toFixed(2),
            changePercentage: (index % 2 === 0 ? -1 : 1) * (1.8 + index * 0.1).toFixed(2),
        });
    }

    return newData;
}
