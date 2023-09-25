let day = 'Wednesday'
console.log(day)
console.log(day.length)

console.log(day.indexOf('n'))

let subday = day.slice(0, 9)
console.log(subday)
console.log(subday[2])

let splitDay = day.split('n')
console.log(splitDay)

//Finding index od a word
let quote = day + ' is a great day and new day'
console.log(quote)
console.log(quote.indexOf('great'))

//How many time a string/word exists   //quote = Wednesday is a great day and new day
let dayIndex = quote.indexOf('day') //6
let count = 0
while (dayIndex != -1) {
  count++ //increment the counter for day  count = 1
  dayIndex = quote.indexOf('day', dayIndex + 1)
}
console.log('Count of day word in my string is', count)

// Calculate time difference between 2 dates

let date1 = new Date('06/30/2020') //mm/dd/yyyy
let date2 = new Date('07/15/2018')

let timeDiff = date2.getTime() - date1.getTime() // 100ms - 20ms  -> timeDiff = 80ms

let timeInDays = timeDiff / (1000 * 3600 * 24) //converting milliseconds into days

console.log('Time difference in days ', timeInDays)
