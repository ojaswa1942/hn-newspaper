export const getMaxMin = ( newsResponse ) => {
    const range = newsResponse.map(x => x.score);
    return [Math.max(...range), Math.min(...range)];
}

export const normalizedScore = ( val, max, min ) => {
    if(val > 100)
        val /= 10;
    if (max > 100)
        max /= 10;
    if(val > 100)
        val /= 10;
    if (max > 100)
        max /= 10;
    
    return ((val - min)/(max - min));
}

export const calculateDateTime = (date1, date2) => {
    let diff = Math.floor(date1.getTime() - date2.getTime());
    let day = 1000 * 60 * 60 * 24;
    let hour = 1000 * 60 * 60;
    let minute = 1000 * 60 * 60;
    let second = 1000 * 60;

    let seconds = Math.floor(diff/second);
    let minutes = Math.floor(diff/minute);
    let hours = Math.floor(diff/hour);
    let days = Math.floor(diff/day);
    let months = Math.floor(days/31);
    let years = Math.floor(months/12);
    let message = '';
    if(years>0)
        message= `${years} years ago`;
    else if(months>0)
        message= `${months} months ago`;
    else if(days>0)
        message= `${days} days ago`;
    else if(hours>0)
        message= `${hours} hours ago`;
    else if(minutes>0)
        message= `${minutes} minutes ago`;
    else
        message= `${seconds} seconds ago`;

    return message
}