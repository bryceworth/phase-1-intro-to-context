// Your code here
function createEmployeeRecord(recArray) {
    return {
       firstName: recArray[0],
       familyName: recArray[1],
       title: recArray[2],
       payPerHour: recArray[3],
       timeInEvents: [],
       timeOutEvents: [],
    };
}

const createEmployeeRecords = (recordsArray) => {
    return recordsArray.map((rec) =>
    createEmployeeRecord(rec))
}

// const createTimeInEvent = function (dateStamp) {
//     const [date, hour] = dateStamp.split(``)
//     console.log(`hour: `, hour)
//     console.log(`date: `, date)
//     const inEvent = {
//         type: `TimeIn`,
//         hour: parseInt(hour),
//         date: date,
//     }
//     this.timeInEvents.push(inEvent)
//     return this
// }

function createTimeInEvent(record, stamp = date.now){
const d = new Date(stamp)
let timeIn = createEmployeeRecord(record)
let date = (d.getFullYear()+ `-`+ d.getMonth()+`-` +d.getDate())
let hour = (d.getHours() +``+ d.getMinutes())
console.log(date, hour)
let timeObj = {
    type: `TimeIn`,
    hour: hour,
    date: date
}
timeIn.timeInEvents = (timeObj)
console.log(timeIn)
return timeIn
}

createTimeInEvent(cloud)
