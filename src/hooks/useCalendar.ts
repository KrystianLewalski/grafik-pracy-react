import { useState, useReducer } from "react";
import type { CalendarType } from "../types/CalendarType";
import { getMonth } from "../utils/dateHelpers";
import type { CalendarAction } from "../types/CalendarAction";
import type { Month } from "../types/Month";


export function calendarReducer(state: Month, action: CalendarAction): Month {
    switch (action.type) {
        case 'toggleClosed': {
            const updatedDays = state.monthDays.map((monthDay) => {
                if (monthDay.dayNumber === action.dayNumber) {
                    return { ...monthDay, closed: !monthDay.closed }
                }
                return monthDay
            });

            return { ...state, monthDays: updatedDays }

        }
    }
    throw Error('Unknown action: ' + action.type);
}

export function useCalendar(): CalendarType {
    const [year, setYear] = useState(new Date().getFullYear());
    const [month, setMonth] = useState(new Date().getMonth() + 1);
    const currentMonth = getMonth(year, month)
    return { year, setYear, month, setMonth, currentMonth }
}
