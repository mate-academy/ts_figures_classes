type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

function getArea(): number {
  const s = (this.a + this.b + this.c) / 2;

  switch (this.shape) {
    case 'triangle':
      return Math.floor(
        Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)) * 100,
      ) / 100;
    case 'circle':
      return Math.floor(this.radius ** 2 * Math.PI * 100) / 100;
    case 'rectangle':
      return this.width * this.height;
    default:
      return 0;
  }
}

export interface Figure {
  shape: Shape;
  color: Color;
}

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  public getArea = getArea.bind(this);

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const firstSide = this.b + this.c > this.a;
    const secondSide = this.a + this.c > this.b;
    const thirdSide = this.a + this.b > this.c;

    const isTriangle = firstSide && secondSide && thirdSide;

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('side lengths cannot be negative or zero!');
    }

    if (!isTriangle) {
      throw new Error('sides error! (Sides of Triangle Rule)');
    }
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  public getArea = getArea.bind(this);

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('side lengths cannot be negative or zero!');
    }
  }
}

export class Rectangle implements Figure {
  public shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('side lengths cannot be negative or zero!');
    }
  }

  public getArea = getArea.bind(this);
}

export function getInfo(figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
