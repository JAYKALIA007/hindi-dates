import dayjs from 'dayjs';
import {
    HOUR_SEPARATOR_HINDI,
    HUNDREDS_IN_HINDI,
    MINUTES_IN_HINDI,
    MONTHS_TRANSLATION,
    NUMBERS_TRANSLATION,
    THOUSANDS_IN_HINDI
  } from './constants.js';

function getCurrentYear(year) {
    const lastTwoDigits = year.slice(2)
    const hundredsDigit = year.charAt(1)

    let resultYear = `${NUMBERS_TRANSLATION[year.charAt(0).padStart(2, '0')]} ${THOUSANDS_IN_HINDI}`;
    
    if(hundredsDigit !== '0'){
        resultYear += `${NUMBERS_TRANSLATION[hundredsDigit.padStart(2, '0')]} ${HUNDREDS_IN_HINDI} `
    }

    resultYear += NUMBERS_TRANSLATION[lastTwoDigits]
    return resultYear
}

export function getHindiDates() {
    let dateInHindi  = ''
    let timeInHindi = ''
    const date = dayjs().format('DD/MM/YYYY')        
    const dateArray = date.split('/')
    const currentDate = NUMBERS_TRANSLATION[dateArray[0]]
    const currentMonth = MONTHS_TRANSLATION[dateArray[1]]
    const currentYear = getCurrentYear(dateArray[2])
    dateInHindi = `${currentDate} ${currentMonth} ${currentYear}`

    const time = dayjs().format('HH:mm:ss')
    const timeArray = time.split(':')
    const hours = timeArray[0] > 12 ? timeArray[0] - 12 : timeArray[0]
    const formattedHours = NUMBERS_TRANSLATION[String(hours).padStart(2,'0')]
    const minutes = NUMBERS_TRANSLATION[timeArray[1]]
    timeInHindi = `${formattedHours} ${HOUR_SEPARATOR_HINDI} ${minutes} ${MINUTES_IN_HINDI}`
    return { dateInHindi, timeInHindi }
}