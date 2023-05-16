import { isBefore } from 'date-fns';

/**
 * takes yyyy-mm-dd and returns m-d-yyyy
 * @param {string} myDate
 * @returns {string} m-d-yyyy
 */
export const formatDate = (myDate: string): string => {
    const [year, month, date] = splitDate(myDate)
    return `${padNumber(month)} / ${padNumber(date)} / ${year}`
};

const padNumber = (num: string): string => num.padStart(2, '0');

/**
 * takes yyyy-mm-dd and returns true if the date is before today
 * @param {string} myDate
 * @returns {boolean}
 */

export const isLate = (myDate: string): boolean => {
    const [year, month, date] = splitDate(myDate)
    const dueDate = new Date(parseInt(year), parseInt(month), parseInt(date))
    const today = new Date()
    return isBefore(dueDate, today)
};
/**
 * takes yyyy-mm-dd and returns an array of [yyyy, mm, dd]
 * @param {string} myDate
 * @returns {Array<string>} [yyyy, mm, dd]
 */
export const splitDate = (myDate: string): Array<string> => {
    return myDate.split('-')
};