import type { Worker } from "./Worker";
import type { Month } from "./Month";

export type AddWorkerAction = { type: "addWorker"; worker: Worker; dayNumber: number };
export type RemoveWorkerAction = { type: "removeWorker"; workerId: Worker["id"]; dayNumber: number };
export type ChangeWorkerAction = { type: "changeWorker"; worker: Worker; dayNumber: number };
export type ToggleClosedAction = { type: "toggleClosed"; dayNumber: number };
export type SetMonthAction = { type: "setMonth"; month: Month["monthNumber"]; year: Month["year"] };
export type MonthMoveAction = { type: "monthMove"; moveNumber: number };

export type CalendarAction = AddWorkerAction | RemoveWorkerAction | ChangeWorkerAction | ToggleClosedAction | SetMonthAction | MonthMoveAction;