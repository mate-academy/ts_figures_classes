type Shapes = 'triangle' | 'circle' | 'rectangle';

type Colors = 'red' | 'green' | 'blue';

function round(x): number {
  return Math.floor(x * 100) / 100;
}

export interface Figure {
  shape: Shapes;
  color: Colors;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shapes;

  constructor(
    public color: Colors,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.shape = 'triangle';

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Sides should be positive');
    }

    if (a + b <= c || b + c <= a || c + a <= b) {
      throw new Error('Can not build triangle');
    }
  }

  getArea(): number {
    const semiPerimetr = (this.a + this.b + this.c) / 2;

    const area = Math.sqrt(semiPerimetr * (semiPerimetr - this.a)
     * (semiPerimetr - this.b) * (semiPerimetr - this.c));

    return round(area);
  }
}

export class Circle implements Figure {
  shape:Shapes;

  constructor(
    public color: Colors,
    public radius: number,
  ) {
    this.shape = 'circle';

    if (radius <= 0) {
      throw new Error('radius not valid');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return round(area);
  }
}

export class Rectangle implements Figure {
  shape:Shapes;

  constructor(
    public color: Colors,
    public width: number,
    public height: number,
  ) {
    this.shape = 'rectangle';

    if (width <= 0 || height <= 0) {
      throw new Error('width and height are not valid');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return round(area);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
