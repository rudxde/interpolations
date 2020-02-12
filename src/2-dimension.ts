export abstract class I2DimensionalInterpolation {

    constructor(
        public from: number = 0,
        public to: number = 1,
    ) { }
    /**
     * Interpolates between ```from``` and ```to```, the values ```fromValue``` and ```toValue``` with the given derivations at start and end.
     *
     * @param {number} x between ```from``` and ```to```
     * @returns {number}
     * @memberof HermiteInterpolation
     */
    public eval(x: number): number {
        return this.evalRelative(this.transformInput(x));
    }

    /**
     * Transforms the input in a relative from 0 to 1 between the boundary's from and to.
     *
     * @private
     * @param {number} x
     * @returns {number}
     * @memberof HermiteInterpolation
     */
    protected transformInput(x: number): number {
        return (x - this.from) / (this.to - this.from);
    }

    public abstract evalRelative(x: number): number;
}
