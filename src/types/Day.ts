import type { Worker } from "./Worker";

export interface Day{
    dayNumber: number;
    workers:Worker[];
    closed:boolean;
}