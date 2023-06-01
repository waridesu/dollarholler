import type { Invoice, LineItem } from "../../global";

/**
 * Sum the amount of all line items
 * @param {Array|undefined} lineItems
 * @returns { number }
 */
export const sumLineItems = (lineItems: LineItem[] | undefined): number =>
    lineItems ? lineItems?.reduce((acc, curr) => acc + curr.amount, 0) : 0

/**
 * Convert cents to dollars
 * @param {number} cents
 * @returns { string }
 */
export const centsToDollar = (cents: number): string => {
    const dollars = cents / 100
    const addDecimal = twoDecimals(dollars)
    return addThousandsSeparator(addDecimal)
}
/**
 * Convert dollars to cents 
 * @param {number} dollars 
 * @returns {number}
 * */

export const dollarsToCent = (dollars: number): number => {
    return dollars * 100
};

/**
 * Takes a number and returns a string with two decimal places
 * @param {number} myNumber
 * @returns {string}
 */
export const twoDecimals = (myNumber: number): string => {
    return myNumber.toFixed(2);
}
/**
 * Adds a thousand separator to a number
 * @param {string} myNumber
 * @returns {string}
 */
export const addThousandsSeparator = (myNumber: string): string => {
    return myNumber.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
/**
 * Sum the amount of all invoices
 * @param {Invoice[]|undefined} invoices
 * @returns { number }
 */
export const sumInvoices = (invoices: Invoice[] | undefined): number =>
    invoices ? invoices.reduce((acc, curr) => acc + sumLineItems(curr.lineItems), 0) : 0