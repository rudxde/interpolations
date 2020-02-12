import { I2DimensionalInterpolation } from './2-dimension';

export class LinearInterpolation extends I2DimensionalInterpolation {

    constructor(
        from: number = 0,
        to: number = 1,
        public fromValue: number = 0,
        public toValue: number = 1,
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
    evalRelative(x: number): number {
        const deltaY = this.toValue - this.fromValue;
        return this.fromValue + x * deltaY;
    }

}
