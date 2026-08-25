import type { Day } from "./Day";

export interface Month{
    monthNumber: number;
    monthDays: Day[];
    year:number;
}