type Colors = 'red' | 'blue' | 'green';
type Shapes = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  shape: Shapes;
  color: Colors;

  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shapes = 'triangle';

  constructor(
    public color: Colors,
    public a = 0,
    public b = 0,
    public c = 0,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Side can not be less than 0');
    }

    if (Math.max(a, b, c) >= a + b + c - Math.max(a, b, c)) {
      throw new Error('sides 1, 2 and 3 can not form a triangle');
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const p: number = (a + b + c) / 2;
    const A: number = p * (p - a) * (p - b) * (p - c);

    return Math.floor(Math.sqrt(A) * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shapes = 'circle';

  constructor(
    public color: Colors,
    public radius = 0,
  ) {
    if (radius <= 0) {
      throw new Error('radius should be a positive number');
    }
  }

  getArea(): number {
    const arrea = Math.PI * this.radius * this.radius;

    return Math.floor(arrea * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shapes = 'rectangle';

  constructor(
    public color: Colors,
    public width = 0,
    public height = 0,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Sides should be a positive number');
    }
  }

  getArea(): number {
    const arrea = this.width * this.height;

    return Math.floor(arrea * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
