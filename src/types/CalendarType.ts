import { useState, type Dispatch, type SetStateAction } from "react";
import type { Month } from "./Month";

export interface CalendarType {
    year: number;
    setYear: Dispatch<SetStateAction<number>>;
    month: number;
    setMonth: Dispatch<SetStateAction<number>>;
    currentMonth: Month;
}