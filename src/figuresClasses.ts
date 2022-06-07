export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle',
  color: 'red' | 'green' | 'blue',
}

export class Triangle implements Figure {
  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
    public c: number,
    public shape: 'triangle' | 'circle' | 'rectangle',
    public allSides: number[],
  ) {
    this.allSides = [this.a, this.b, this.c].sort((x, y) => x - y);

    if (this.allSides[2] >= (this.allSides[1] + this.allSides[0])) {
      throw new Error('sides 1, 2 and 3 can\'t form a triangle');
    }

    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('too small side');
    }

    this.shape = 'triangle';
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    const square = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return (Math.floor(square * 100)) / 100;
  }
}

export class Circle implements Figure {
  constructor(
    public color: 'red' | 'green' | 'blue',
    public radius: number,
    public shape: 'triangle' | 'circle' | 'rectangle',
  ) {
    if (this.radius <= 0) {
      throw new Error('too small radius');
    }
    this.shape = 'circle';
  }

  getArea(): number {
    const square = Math.PI * (this.radius ** 2);

    return (Math.floor(square * 100)) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: 'red' | 'green' | 'blue',
    public width: number,
    public height: number,
    public shape: 'triangle' | 'circle' | 'rectangle',
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('too small side');
    }
    this.shape = 'rectangle';
  }

  getArea(): number {
    const square = this.width * this.height;

    return (Math.floor(square * 100)) / 100;
  }
}

export function getInfo(figure: Triangle | Circle | Rectangle): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
