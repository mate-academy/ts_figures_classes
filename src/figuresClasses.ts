type Color = 'red' | 'green' | 'blue';
type Shape = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea: () => number; // Rounded down to hundredths.
}

export class Triangle implements Figure {
  color: Color;

  a: number;

  b: number;

  c: number;

  shape: Shape;

  constructor(
    _color: Color,
    _a: number,
    _b: number,
    _c: number,
  ) {
    if (_a < 0 || _b < 0 || _c < 0) {
      throw new Error('Side of a triangle can not be negative');
    }

    if (_a >= _b + _c
        || _b >= _a + _c
        || _c >= _b + _a) {
      throw new Error('the longest side of a triangle must be greater'
        + 'than a sum of two others');
    }

    this.a = _a;
    this.b = _b;
    this.c = _c;
    this.color = _color;
    this.shape = 'triangle';
  }

  getArea(): number {
    const semiperimeter = (this.a + this.b + this.c) / 2;

    return Math.floor(100 * Math.sqrt(semiperimeter
      * (semiperimeter - this.a)
      * (semiperimeter - this.b)
      * (semiperimeter - this.c))) / 100;
  }
}

export class Circle implements Figure {
  color: Color;

  radius: number;

  shape: Shape;

  constructor(_color: Color, _radius: number) {
    if (_radius < 0) {
      throw new Error('Radius of a circle can not be negative');
    }
    this.color = _color;
    this.radius = _radius;
    this.shape = 'circle';
  }

  getArea(): number {
    return Math.floor(100 * Math.PI * this.radius * this.radius) / 100;
  }
}

export class Rectangle implements Figure {
  color: Color;

  width: number;

  height: number;

  shape: Shape;

  constructor(
    _color: Color,
    _width: number,
    _height: number,
  ) {
    if (_width < 0) {
      throw new Error('Width of a rectangle can not be negative');
    }

    if (_height < 0) {
      throw new Error('Height of a rectangle can not be negative');
    }

    this.color = _color;
    this.width = _width;
    this.height = _height;
    this.shape = 'rectangle';
  }

  getArea(): number {
    return Math.floor(100 * this.width * this.height) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
