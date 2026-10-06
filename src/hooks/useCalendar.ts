import { useState } from "react";
import type { CalendarType } from "../types/CalendarType";
import { getMonth } from "../utils/dateHelpers";


export function useCalendar(): CalendarType {
    const [year, setYear] = useState(new Date().getFullYear());
    const [month, setMonth] = useState(new Date().getMonth() + 1);
    const currentMonth = getMonth(year, month)
    return { year, setYear, month, setMonth, currentMonth }
}