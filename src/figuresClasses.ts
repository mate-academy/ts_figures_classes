export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

function getNumFloor(num: number): number {
  return Math.floor(num * 100) / 100;
}

export class Triangle implements Figure {
  shape:'triangle' = 'triangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('The sides of the triangle must be greater than zero.');
    }

    const longest: number = Math.max(this.a, this.b, this.c);
    const sumOfOther:number = this.a + this.b + this.c - longest;

        if (longest >= sumOfOther) {
          throw new Error(
            'The longest side should be less than the sum of the other.',
          );
        }
  }

  getArea(): number {


    const p = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return getNumFloor(area);
  }
}

export class Circle implements Figure {
  shape:'circle' = 'circle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('The radius of the circle must be greater than zero.');
    }
  }

  getArea(): number {
    const area: number = Math.PI * this.radius * this.radius;

    return getNumFloor(area);
  }
}

export class Rectangle implements Figure {
  shape:'rectangle' = 'rectangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error(
        'The width and height of the rectangle must be greater than zero.',
      );
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
