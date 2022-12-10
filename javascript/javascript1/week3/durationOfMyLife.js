/* I noticed that the ,minutes are 0 for all the series ,So I am not considering them in calculation. 

I am reading the the sub-obejct like .. "I watched GoT for 3days and 1 hour in my life. Same applies for other series. "*/

const seriesDurations = [
    {
      title: "Game of thrones",
      days: 3,
      hours: 1,
      minutes: 0,
    },
    {
      title: "Sopranos",
      days: 3,
      hours: 14,
      minutes: 0,
    },
    {
      title: "The Wire",
      days: 2,
      hours: 12,
      minutes: 0,
    },
];


/* Adding  my favourite series - The wheel of time. I avoiding using minutes here. This programme is already complicated.  */

seriesDurations.push({
  title: "The wheel of time",
  days: 0,
  hours: 8,
  minutes: 0,
},)


console.log(seriesDurations);

function logOutSeriesText() {
  let totalTime = 0;
  const totalLifeSpanInHours = 80 * 365 * 24;
  for (i = 0; i < seriesDurations.length; i++) {
      let totalLifeSpentInHours =
          (seriesDurations[i].days * 24 + seriesDurations[i].hours);
      let totalLifeSpent = totalLifeSpentInHours * 100 / totalLifeSpanInHours;
      console.log(
          `${seriesDurations[i].title} took ${totalLifeSpent.toFixed(4)}% of my life`
      );
      totalTime += totalLifeSpent;
  }
  console.log(`In total that is ${totalTime.toFixed(3)}% of my life`);
}
logOutSeriesText();