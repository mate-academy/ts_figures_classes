type Shapes = 'triangle' | 'circle' | 'rectangle';

type Colors = 'red' | 'green' | 'blue';

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

    if (a <= 0 || b <= 0 || c <= 0
      || a + b <= c
      || b + c <= a
      || c + a <= b
    ) {
      throw new Error('sides not valid');
    }
  }

  getArea(): number {
    const semiPerimetr = (this.a + this.b + this.c) / 2;

    const area = Math.sqrt(semiPerimetr * (semiPerimetr - this.a)
     * (semiPerimetr - this.b) * (semiPerimetr - this.c));

    return Math.floor(area * 100) / 100;
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

    return Math.floor(area * 100) / 100;
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
      throw new Error('width and height not valid');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
