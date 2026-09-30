import type { StandardShiftEntry, CustomShiftEntry } from "./Shifts";

 export interface Worker{
    id: string;
    name: string;
    shift: StandardShiftEntry | CustomShiftEntry;
    
}