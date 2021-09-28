const hoursMinutesSecondsCalculation = (ms) => {
    let sec = Math.floor(ms / 1000);
    const hrs = Math.floor(sec / 3600);
    sec -= hrs * 3600;
    let min = Math.floor(sec / 60);
    sec -= min * 60;
    sec = '' + sec;
    sec = ('0' + sec).substring(sec.length);
    if (hrs > 0) {
        min = '' + min;
        min = ('0' + min).substring(min.length);
        return (hrs > 0 ? hrs : "") + " hrs ago";
    }
    else {
        return (min > 0 ? `${min} mins ago` : `just now`);
    }
}

exports.timeDifferenceCalculator = (fromDate, toDate = new Date()) => {
    const differenceOfTwoDates = Math.abs(Date.parse(toDate) - Date.parse(fromDate));
    const numberOfDays = Math.ceil(differenceOfTwoDates / (1000 * 60 * 60 * 24));
    if (numberOfDays >= 1) {
        return `${numberOfDays} days ago`
    }
    return hoursMinutesSecondsCalculation(differenceOfTwoDates);
}
