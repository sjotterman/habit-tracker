import moment from "moment";

const _MS_PER_DAY = 1000 * 60 * 60 * 24;

export const currentDateTime = () => {
  const currentDateTime = formatDateLong();
  return currentDateTime;
};

export const formatDateShort = date => {
  var dd = date.getDate();
  var mm = date.getMonth() + 1; //January is 0!
  var yyyy = date.getFullYear();

  if (dd < 10) {
    dd = "0" + dd;
  }

  if (mm < 10) {
    mm = "0" + mm;
  }
  const currentDateTime = `${yyyy}-${mm}-${dd}`;
  return currentDateTime;
};

export const formatDateLong = date => {
  return moment(date).format("YYYY-MM-DDTHH:mm:ssZ");
};

export const alreadyDone = (datesDone, date) => {
  const dayToCheck = formatDateShort(new Date(date));
  for (const dateDone of datesDone) {
    const dayDone = formatDateShort(new Date(dateDone));
    if (dayDone === dayToCheck) {
      return true;
    }
  }
  return false;
};

export const prettyDisplayTime = timeString => {
  return moment(timeString).fromNow();
};

export const calculateBestStreak = dates_done => {
  const shortDatesDone = dates_done.map(item => {
    return moment(item).format("Y-MM-DD");
  });
  let bestStreak = 0;
  let currentStreak = 0;
  let prevDay = null;
  for (const date of shortDatesDone) {
    let currentDayTime = timeFromDate(date);
    let prevDayTime = timeFromDate(prevDay);
    if (dateDiffInDays(prevDayTime, currentDayTime) > 1) {
      currentStreak = 1;
    } else {
      currentStreak++;
    }

    if (currentStreak > bestStreak) {
      bestStreak = currentStreak;
    }
    prevDay = date;
  }
  return bestStreak;
};

export const calculateCurrentStreak = (dates_done, today) => {
  const shortDatesDone = dates_done.map(item => {
    return moment(item).format("Y-MM-DD");
  });
  const shortDay = moment(today).format("Y-MM-DD");

  const filteredShortDates = [...new Set(shortDatesDone)];

  let reversedArray = [...filteredShortDates].reverse();
  let prevDay = shortDay;
  let streakArray = [];
  let keepCounting = true;
  let todayDate = timeFromDate(shortDay);
  let mostRecentDate = timeFromDate(reversedArray[0]);
  if (dateDiffInDays(mostRecentDate, todayDate) > 1) {
    return 0;
  }
  for (const date of reversedArray) {
    if (keepCounting) {
      let currentDayTime = timeFromDate(date);
      let prevDayTime = timeFromDate(prevDay);
      let dateDiff = dateDiffInDays(currentDayTime, prevDayTime);
      if (dateDiff <= 1) {
        streakArray.push(date);
      } else {
        keepCounting = false;
      }
      prevDay = date;
    }
  }

  return streakArray.length;
};

export const timeFromDate = date => {
  return new Date(`${date} 00:00:00`);
};

export const dateDiffInDays = (dayOne, dayTwo) => {
  const utc1 = Date.UTC(
    dayOne.getFullYear(),
    dayOne.getMonth(),
    dayOne.getDate()
  );
  const utc2 = Date.UTC(
    dayTwo.getFullYear(),
    dayTwo.getMonth(),
    dayTwo.getDate()
  );

  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
};

export const isSameDay = (dayOne, dayTwo) => {
  return dateDiffInDays(new Date(dayOne), new Date(dayTwo)) === 0;
};
