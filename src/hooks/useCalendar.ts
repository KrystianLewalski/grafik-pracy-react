import { useState, useReducer } from "react";
import type { CalendarType } from "../types/CalendarType";
import { generateMonth } from "../utils/dateHelpers";
import type { CalendarAction } from "../types/CalendarAction";
import type { Month } from "../types/Month";
import { shiftSort } from "../utils/shiftSort";


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
        case 'monthMove': {
            const updatedDate = new Date(state.year, state.monthNumber - 1 + action.moveNumber, 1);
            const updatedYear = updatedDate.getFullYear();
            const updatedMonth = updatedDate.getMonth() + 1;
            return generateMonth(updatedYear, updatedMonth)
        }
        case 'setMonth': {
            return generateMonth(action.year, action.month)
        }
        case 'removeWorker': {
            const removeUpdate = state.monthDays.map((monthDay) => {
                if (monthDay.dayNumber === action.dayNumber) {
                    return { ...monthDay, workers: monthDay.workers.filter((worker) => action.workerId !== worker.id) }
                }
                return monthDay
            })

            return { ...state, monthDays: removeUpdate }
        }
        case 'changeWorker': {
            const changeUpdate = state.monthDays.map((monthDay) => {
                if (monthDay.dayNumber === action.dayNumber) {
                    return {
                        ...monthDay, workers: monthDay.workers.map((worker) => {
                            if (worker.id === action.worker.id) {
                                return action.worker
                            }
                            return worker
                        })
                    }
                }
                return monthDay
            })
            return { ...state, monthDays: changeUpdate }
        }
        case 'addWorker': {
            const addUpdate = state.monthDays.map((monthDay) => {
                if (monthDay.dayNumber === action.dayNumber) {
                    return {
                        ...monthDay, workers: shiftSort([...monthDay.workers, action.worker])
                    }
                }
                return monthDay
            })
            return { ...state, monthDays: addUpdate }
        }
        default: {
            const _exhaustiveCheck: never = action
            throw Error("Nieznana akcja: " + JSON.stringify(_exhaustiveCheck))
        }
    }
}

export function useCalendar(): CalendarType {
    const [year, setYear] = useState(new Date().getFullYear());
    const [month, setMonth] = useState(new Date().getMonth() + 1);
    const currentMonth = generateMonth(year, month)
    return { year, setYear, month, setMonth, currentMonth }
}
