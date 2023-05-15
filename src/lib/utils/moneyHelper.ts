import type { LineItem } from "../../global";

export const sumLineItems = (lineItems: LineItem[] | undefined): number =>
    lineItems ? lineItems?.reduce((acc, curr) => acc + curr.amount, 0) : 0


export const centsToDollar = (cents: number): string => {
    const dollars = cents / 100
    const addDecimal = twoDecimals(dollars)
    return addThousandsSeparator(addDecimal)
}

export const twoDecimals = (myNumber: number): string => {
    return myNumber.toFixed(2);
}

export const addThousandsSeparator = (myNumber: string): string => {
    return myNumber.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}