# interpolation

Code to interpolate between 2 values and 2 given derives.

## Usage

install over npm:
```
npm i --save interpolations
```

### hermite-interpolation:
```ts
const interpolation = new HermiteInterpolation(/* from x: */ 0, /* to x: */ 1, /* from y: */ 3, /* to y: */ 10, /* from derivate: */ 0, /* to derivate: */ 0);
const interpolated = interpolation.eval(/*x value to interpolate for:*/ 0.3);
console.log(interpolated);
```