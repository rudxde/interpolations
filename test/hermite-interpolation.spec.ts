import { HermiteInterpolation, smoothstep } from '../src';
describe('hermite-interpolation', () => {
    it('horizontal', () => {
        let interpolation = new HermiteInterpolation(0, 1, 5, 5);
        expect(interpolation.eval(0.5)).toBe(5);
        expect(interpolation.evalDerivate(0.5)).toBe(0);
    });
    it('from 0 to 1', () => {
        let interpolation = new HermiteInterpolation(0, 1);
        expect(interpolation.eval(0.5)).toBe(0.5);
    });
    it('horizontal with derivate-values', () => {
        let interpolation = new HermiteInterpolation(0, 1, 4, 4, 1, 1);
        expect(interpolation.eval(0.5)).toBe(4);
    });
    describe('smoothstep', () => {
        it('horizontal', () => {
            expect(smoothstep(5, 5, 0.5)).toBe(5);
        });
        it('from 0 to 1', () => {
            expect(smoothstep(0, 1, 0.5)).toBe(0.5);
        });
        it('x > 1', () => {
            expect(smoothstep(0, 1, 2)).toBe(1);
        });
    });
});
