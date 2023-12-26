export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color : 'red' | 'green' | 'blue';
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Figure['shape'] = 'triangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Enter correct length bigger than 0');
    }

    const allSides = [a, b, c].sort();

    if (allSides[0] >= allSides[1] + allSides[2]) {
      throw new Error(`sides ${a}, ${b} and ${c} can't form a triangle`);
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
  }
}

export class Circle implements Figure {
  shape: Figure['shape'] = 'circle';

  constructor(
    public radius: number,
    public color: 'red' | 'green' | 'blue',
  ) {
    if (radius <= 0) {
      throw new Error('Enter correct radius bigger than 0');
    }
  }

  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

export class Rectangle implements Figure {
  shape: Figure['shape'] = 'rectangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Enter correct width and height bigger than 0');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  const area = Math.floor(figure.getArea() * 100) / 100;

  return `A ${figure.color} ${figure.shape} - ${area}`;
}
