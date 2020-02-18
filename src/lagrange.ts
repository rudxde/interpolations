
/**
 * Interpolation with Lagrange. Provide different x,y pairs, which the interpolation should use as base points.
 *
 * @export
 * @class Lagrange
 */
export class Lagrange {

    constructor(
        public x: number[],
        public y: number[],
    ) {
        if (x.length !== y.length) {
            throw new Error('x,y length does not match! Please provide x any y pairwise');
        }
    }

    public eval(x: number): number {
        return this.f(x);
    }

    private f(x: number): number {
        let result = 0;
        const n = this.x.length;
        for (let k = 0; k < n; k++) {
            result += this.y[k] * this.l(k, x);
        }
        return result;
    }

    private l(k: number, x: number): number {
        let result = 1;
        const n = this.x.length;
        for (let i = 0; i < n; i++) {
            if (i === k) continue;
            result *= (x - this.x[i]) / (this.x[k] - this.x[i]);
        }
        return result;
    }
}
