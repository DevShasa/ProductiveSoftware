
function niceDate(){
    const todayDate = new Date()
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return todayDate.toLocaleString('en-US', options);
}

export {niceDate}