import { LinearInterpolation } from '../src';
describe('hermite-interpolation', () => {
    it('horizontal', () => {
        let interpolation = new LinearInterpolation(0, 1, 5, 5);
        expect(interpolation.eval(0.5)).toBe(5);
    });
    it('from 0 to 1', () => {
        let interpolation = new LinearInterpolation(0, 1);
        expect(interpolation.eval(0.5)).toBe(0.5);
    });
});
