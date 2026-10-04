import type { CustomShiftEntry, StandardShiftEntry } from "../types/Shifts";

export function shiftFormat(shift: StandardShiftEntry | CustomShiftEntry): string {
    return `${shift.hours[0]} - ${shift.hours[1]}`
}