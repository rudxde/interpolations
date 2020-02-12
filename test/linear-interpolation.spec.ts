import { LinearInterpolation, lerp } from '../src';
describe('hermite-interpolation', () => {
    it('horizontal', () => {
        let interpolation = new LinearInterpolation(0, 1, 5, 5);
        expect(interpolation.eval(0.5)).toBe(5);
    });
    it('from 0 to 1', () => {
        let interpolation = new LinearInterpolation(0, 1);
        expect(interpolation.eval(0.5)).toBe(0.5);
    });

    describe('lerp', () => {
        it('from 2 to 4', () => {
            expect(lerp(2, 4, 0.5)).toBe(3);
        });
    });
});
