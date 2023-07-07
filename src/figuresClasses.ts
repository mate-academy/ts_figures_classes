export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle',
  color: 'red' | 'green' | 'blue',
  getArea(): number
}

export class Triangle implements Figure {
  constructor(
    public color: Figure['color'],
    public a: number,
    public b: number,
    public c: number,
    public shape: Figure['shape'] = 'triangle',
  ) {
    const sides = [a, b, c].sort((f: number, s: number) => s - f);

    if (a <= 0 || b <= 0 || c <= 0 || sides[0] >= (sides[1] + sides[2])) {
      throw new Error('Incorrect input data');
    }

    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const p: number = (this.a + this.b + this.c) / 2;

    return (
      +Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(2)
    );
  }
}

export class Circle implements Figure {
  constructor(
    public color: Figure['color'],
    public radius: number,
    public shape: Figure['shape'] = 'circle',
  ) {
    if (radius <= 0) {
      throw new Error('Radius cannot be less or equal 0');
    }

    this.color = color;
    this.radius = radius;
  }

  getArea(): number {
    return Math.floor(Math.PI * (this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: Figure['color'],
    public width: number,
    public height: number,
    public shape: Figure['shape'] = 'rectangle',
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Incorrect input data');
    }

    this.color = color;
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return +(this.width * this.height).toFixed(2);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
