import { type Dispatch } from "react";
import type { Month } from "./Month";
import type { CalendarAction } from "./CalendarAction";

export interface CalendarType {
    dispatch: Dispatch<CalendarAction>;
    currentMonth: Month;
}