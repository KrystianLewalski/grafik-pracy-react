export type StandardShift = [8, 15] | [15, 22] | [10, 18] | [10, 14];

export type CustomShiftHours = [number, number]

export type StandardShiftEntry = { type: "standard"; hours: StandardShift };
export type CustomShiftEntry = { type: "custom"; hours: CustomShiftHours };