exports.timeDifferenceCalculator = (fromDate, toDate = new Date()) => {
    const differenceOfTwoDates = Math.abs(Math.max(Date.parse(toDate), Date.parse(fromDate)) - Math.min(Date.parse(fromDate), Date.parse(toDate))) ;
    const SEC = 1000, MIN = 60 * SEC, HRS = 60 * MIN;
    const hrs = Math.floor(differenceOfTwoDates/HRS);
    const min = Math.floor((differenceOfTwoDates%HRS)/MIN).toLocaleString('en-US', {minimumIntegerDigits: 2})
    if(hrs == 0){
        return `${min} mins age.`
    }
    if(min == 0){
        return `just now.`;
    }
    if(hrs >= 24){
        return `${parseInt(hrs / 24)} days ago.`;
    }
    return `${hrs} hrs ago.`
}
