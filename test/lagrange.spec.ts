import { Lagrange } from '../src';
describe('hermite-interpolation', () => {
    it('horizontal', () => {
        let interpolation = new Lagrange([0, 1], [5, 5]);
        expect(interpolation.eval(0.5)).toBe(5);
    });
    it('from 0 to 1', () => {
        let interpolation = new Lagrange([0, 1], [0, 1]);
        expect(interpolation.eval(0.5)).toBe(0.5);
    });
    describe('from with 3 x,y pairs', () => {
        let interpolation = new Lagrange([0, 0.5, 1], [4, 1, 3]);
        it('x0 to be y0', () => {
            expect(interpolation.eval(0)).toBe(4);
        });
        it('x1 to be y1', () => {
            expect(interpolation.eval(0.5)).toBe(1);
        });
        it('x2 to be y2', () => {
            expect(interpolation.eval(1)).toBe(3);
        });
        it('x1 < x < x2 to be y1 < y < y2', () => {
            const x = 0.7;
            const y = interpolation.eval(x);
            expect(y).toBeLessThan(3);
            expect(y).toBeGreaterThan(1);
        });
    });

});
