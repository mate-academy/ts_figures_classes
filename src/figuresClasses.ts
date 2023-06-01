type Shapes = 'triangle' | 'circle' | 'rectangle';
type Colors = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shapes;
  color: Colors;
  getArea(): number;
}

function getRoundedDownArea(area: number): number {
  return Math.floor(area * 100) / 100;
}
export class Triangle implements Figure {
  shape: Shapes = 'triangle';

  constructor(
    public color: Colors,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Length of sides should be greater than 0');
    }

    if (a >= b + c || b >= c + a || c >= a + b) {
      throw new Error('Invalid side lengths, triangle cannot be formed');
    }
  }

  getArea(): number {
    const semiperimeter = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(semiperimeter
      * (semiperimeter - this.a)
      * (semiperimeter - this.b)
      * (semiperimeter - this.c));

    return getRoundedDownArea(area);
  }
}

export class Circle {
  shape: Shapes = 'circle';

  constructor(
    public color: Colors,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Length should be greater than 0');
    }
  }

  getArea(): number {
    const area = (this.radius ** 2) * Math.PI;

    return getRoundedDownArea(area);
  }
}

export class Rectangle {
  shape: Shapes = 'rectangle';

  constructor(
    public color: Colors,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Length of sides should be greater than 0');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return getRoundedDownArea(area);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
