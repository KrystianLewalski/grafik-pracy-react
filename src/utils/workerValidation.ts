import type { Worker } from "../types/Worker";


export function isWorkerDuplicate(workers: Worker[], worker: Worker): boolean {
    return workers.some((existingWorker) => {
        if (existingWorker.name !== worker.name) return false;
        if (existingWorker.shift.type !== worker.shift.type) return false;
        if (existingWorker.shift.hours[0] !== worker.shift.hours[0]) return false;
        if (existingWorker.shift.hours[1] !== worker.shift.hours[1]) return false;
        return true
    });
}

export function isWorkerNumberBelowFour(workers: Worker[]): boolean {
    if (workers.length < 4) return true
    return false
}