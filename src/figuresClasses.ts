type Shape = 'triangle' | 'circle' |'rectangle';
type Color = 'red' | 'green' | 'blue';

const floorer = (val: number):number => Math.floor(val * 100) / 100;

export interface Figure {
  shape: Shape;
  color: Color;
  a?: number;
  b?: number;
  c?: number;
  radius?: number;
  width?: number;
  height?: number;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('All values have to be more than 0');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('This figure is not a valid triangle');
    }
  }

  getArea():number {
    const semiPer: number = (this.a + this.b + this.c) * 0.5;
    const squaredPer: number
      = semiPer * (semiPer - this.a) * (semiPer - this.b) * (semiPer - this.c);

    const perimetr = Math.sqrt(squaredPer);

    return floorer(perimetr);
  }
}

export class Circle implements Figure {
  shape: Shape ='circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('All values have to be more than 0');
    }
  }

  getArea(): number {
    return floorer(Math.PI * (this.radius ** 2));
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('All values have to be more than 0');
    }
  }

  getArea(): number {
    return floorer(this.width * this.height);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
