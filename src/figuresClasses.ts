
export interface Figure {
  shape: 'triangle'| 'circle' | 'rectangle',
  color: 'red' | 'green' | 'blue',
  getArea(): number,
}

export class Triangle implements Figure {
  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0) {
      throw new Error('a is <= 0');
    }

    if (b <= 0) {
      throw new Error('b is <= 0');
    }

    if (c <= 0) {
      throw new Error('c is <= 0');
    }

    const triangleArr = [this.a, this.b, this.c];
    const big = Math.max(...triangleArr);

    triangleArr.splice(triangleArr.indexOf(big), 1);

    const rest = triangleArr[0] + triangleArr[1];

    if (big >= rest) {
      throw new Error('Its not triangle');
    }
    this.shape = 'triangle';
  }

  shape: 'triangle';

  getArea():number {
    const p = 0.5 * (this.a + this.b + this.c);

    return Math.floor(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))
    * 100) / 100;
  }
}

export class Circle implements Figure {
  constructor(
    public color: 'red' | 'green' | 'blue',
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('radius is <= 0');
    }
    this.shape = 'circle';
  }

  shape: 'circle';

  getArea(): number {
    return Math.floor((Math.PI * this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: 'red' | 'green' | 'blue',
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('radius is <= 0');
    }
    this.shape = 'rectangle';
  }

  shape: 'rectangle';

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
