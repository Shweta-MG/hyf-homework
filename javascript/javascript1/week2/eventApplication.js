/* Calculate the day of week with number of day = (number of day /7) .. The remainer of the number of the day in week, and counting statrt from starting day.
EXAMPLE
Today = Thursday (01/12/2022)
Calculate week of day after 1055 day ==> [1055/7] = Remainder is 5, which means that 5th day from today is day of the week after 1055, i.e. Tuesaday..*/




function getEventWeekday(days) {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let todaysDay = new Date().getDay(); //today's weekday
    let eventIndex = (days % 7) + todaysDay; 
    let eventDay = " ";
    if (eventIndex == 0) {
        eventDay = daysOfWeek[todaysDay];
        } else if (eventIndex >= 7) {
            eventDay = daysOfWeek[eventIndex % 7]  ;
        }
          else {
            eventDay = daysOfWeek[eventIndex];
        }
          return eventDay;
        }
console.log(getEventWeekday(90));
