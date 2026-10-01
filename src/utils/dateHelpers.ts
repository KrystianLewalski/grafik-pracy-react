import type { Month } from "../types/Month";

export function getDaysInMonth(year: number, month: number): number {
    return new Date(year, month, 0).getDate();
}

export function getFirstMonthDay(year: number, month: number): number {
    return new Date(year, month - 1, 1).getDay();
}

export function getWeekDay(firstDay: number): number {
    return firstDay === 0 ? 6 : firstDay - 1;
}

export function getMonth(year: number, month: number): Month {
    // const firstDay = getFirstMonthDay(year, month);
    // const leadingEmptyDays = getWeekDay(firstDay);
    const daysInMonth = getDaysInMonth(year, month);
    const days = Array.from({ length: daysInMonth }, (_, index) => {
        const dayIndex = index + 1;
        return { dayNumber: dayIndex, workers: [], closed: false }
    });
    return { monthNumber: month, monthDays: days, year }
}