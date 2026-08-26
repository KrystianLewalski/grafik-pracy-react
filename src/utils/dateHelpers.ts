export function getDaysInMonth(year: number, month: number): number {
    return new Date(year, month, 0).getDate();
}

export function getFirstMonthDay(year: number, month: number): number {
    return new Date(year, month - 1, 1).getDay();
}

export function getWeekDay(firstDay :number) :number {
    return firstDay === 0 ? 6 : firstDay - 1;
}