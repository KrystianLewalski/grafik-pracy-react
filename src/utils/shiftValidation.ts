import type { StandardShiftEntry, CustomShiftEntry } from "../types/Shifts";

export function isShiftValid(shift: StandardShiftEntry | CustomShiftEntry, dayOfWeek: number): boolean {
    if (shift.type !== "custom") {
        if (shift.hours[0] === 8 && shift.hours[1] === 15 || shift.hours[0] === 15 && shift.hours[1] === 22) {
            if (dayOfWeek > 5) { return false }
        }

        if (shift.hours[0] === 10 && shift.hours[1] === 18) {
            if (dayOfWeek !== 6) { return false }
        }

        if (shift.hours[0] === 10 && shift.hours[1] === 14) {
            if (dayOfWeek !== 7) { return false }
        }
    }

    return true
}