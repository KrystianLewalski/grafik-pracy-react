import type { StandardShift, CustomShiftHours } from "./Shifts";

 export interface Worker{
    id: string;
    name: string;
    shift: StandardShift | CustomShiftHours;
}