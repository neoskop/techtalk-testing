export abstract class Fibonacci implements Iterable<number> {
    abstract getFib(n : number) : number;
    abstract [Symbol.iterator]() : Iterator<number>;
}

export class FibonacciImpl extends Fibonacci {
    getFib(n : number) : number {
        throw 'not implemented';
    }

    [Symbol.iterator]() : Iterator<number> {
        throw 'not implemented';
    }    
}