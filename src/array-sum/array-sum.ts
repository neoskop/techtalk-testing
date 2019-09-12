export function arraySum(arr : number[]) : number {
    return arr.reduce((t, c) => t + c, 0) / arr.length;
}