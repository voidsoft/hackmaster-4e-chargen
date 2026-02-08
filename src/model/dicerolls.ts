 export function RollD100(): number {
    return Math.floor(Math.random() * 100)
 }

 export function RollD6(times = 1): number {
    let total:number = 0;
    for (let i = 0; i < times; i++) {
        total += Math.floor(Math.random() * 6) + 1;
    }
    return total;
 }


 export function Roll3D6(): number {
    return RollD6(3);
 }