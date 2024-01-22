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
