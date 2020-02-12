import { I2DimensionalInterpolation } from './2-dimension';

export function smoothstep(min: number, max: number, t: number): number {
    const interpolation = new HermiteInterpolation(0, 1, min, max, 0, 0);
    return interpolation.eval(t > 1 ? 1 : t < 0 ? 0 : t);
}

// Shorthand for math.pow
const pow = (x: number, y: number): number => Math.pow(x, y);

// Determined part functions of hermite-interpolation through equation system. 
const H0 = (x: number): number => (2 * pow(x, 3)) - (3 * pow(x, 2)) + 1;
const H1 = (x: number): number => (-2 * pow(x, 3)) + (3 * pow(x, 2));
const H2 = (x: number): number => (pow(x, 3)) - (2 * pow(x, 2)) + x;
const H3 = (x: number): number => pow(x, 3) - pow(x, 2);

// derives of part functions
const H_0 = (x: number): number => (6 * pow(x, 2)) - (6 * x);
const H_1 = (x: number): number => (-6 * pow(x, 2)) + (6 * x);
const H_2 = (x: number): number => 3 * pow(x, 2) - (4 * x) + 1;
const H_3 = (x: number): number => (3 * pow(x, 2)) - (2 * x);

export class HermiteInterpolation extends I2DimensionalInterpolation {

    /**
     * Creates an instance of HermiteInterpolation.
     * @param {number} [from=0] x value where the interpolation should start
     * @param {number} [to=1] x value where the interpolation should end
     * @param {number} [fromValue=0] y value where the interpolation should start
     * @param {number} [toValue=1] y value where the interpolation should end
     * @param {number} [fromDerivate=0] derivation which the interpolation should have at the start
     * @param {number} [toDerivate=0] derivation which the interpolation should have at the end
     * @memberof HermiteInterpolation
     */
    constructor(
        from: number = 0,
        to: number = 1,
        public fromValue: number = 0,
        public toValue: number = 1,
        public fromDerivate: number = 0,
        public toDerivate: number = 0,
    ) {
        super(from, to);
    }

    /**
     * Interpolates between 0 and 1, the values ```fromValue``` and ```toValue``` with the given derivations at start and end.
     *
     * @param {number} x between 0 and 1
     * @returns {number}
     * @memberof HermiteInterpolation
     */
    public evalRelative(x: number): number {
        const y0 = this.fromValue;
        const y1 = this.toValue;
        const y_0 = this.fromDerivate;
        const y_1 = this.toDerivate;
        return y0 * H0(x) + y1 * H1(x) + y_0 * H2(x) + y_1 * H3(x);
    }

    /**
     * Return the derivate value from the interpolation function of ```eval```
     *
     * @param {number} x between ```from``` and ```to```
     * @returns {number}
     * @memberof HermiteInterpolation
     */
    public evalDerivate(x: number): number {
        return this.evalDerivateRelative(this.transformInput(x));
    }

    /**
     * Return the derivate value from the interpolation function of ```evalRelative```
     *
     * @param {number} x between 0 and 1
     * @returns {number}
     * @memberof HermiteInterpolation
     */
    public evalDerivateRelative(x: number): number {
        const y0 = this.fromValue;
        const y1 = this.toValue;
        const y_0 = this.fromDerivate;
        const y_1 = this.toDerivate;
        return y0 * H_0(x) + y1 * H_1(x) + y_0 * H_2(x) + y_1 * H_3(x);
    }
}
