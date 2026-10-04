import type { Worker } from "../types/Worker";

export function shiftSort(workers: Worker[]): Worker[] {
    return workers.toSorted((a, b) => a.shift.hours[0] - b.shift.hours[0])
}