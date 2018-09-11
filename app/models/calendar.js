const calculator = require("business-days-calculator");
const calendar = require("holidays-calendar");
calculator.SetCalendar(calendar);
 
let today = new Date();
console.log('Today '+ (calculator.IsBusinessDay(today) ? 'is' : 'isn\'t') +' a business day');
console.log('Today '+ (calculator.IsHoliday(today) ? 'is' : 'isn\'t') +' a holiday');
console.log('The Carnival next year is due to '+ (calculator.NextHoliday(new Date("1 January "+today.getFullYear()))));