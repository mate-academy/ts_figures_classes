export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea: object;
}

export class Triangle implements Figure {
  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
    public c: number,
    public shape: 'triangle',
  ) {
    this.shape = 'triangle';

    if (
      this.a <= 0 ||
      this.b <= 0 ||
      this.c <= 0 ||
      this.a >= this.b + this.c ||
      this.b >= this.a + this.c ||
      this.c >= this.a + this.b
    ) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    return (
      Math.floor(
        Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)) * 100,
      ) / 100
    );
  }
}

export class Circle implements Figure {
  constructor(
    public color: 'red' | 'green' | 'blue',
    public radius: number,
    public shape: 'circle',
  ) {
    this.shape = 'circle';

    if (this.radius <= 0) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    return Math.floor(this.radius ** 2 * Math.PI * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: 'red' | 'green' | 'blue',
    public width: number,
    public heigth: number,
    public shape: 'rectangle',
  ) {
    this.shape = 'rectangle';

    if (this.width <= 0 || this.heigth <= 0) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    return this.width * this.heigth;
  }
}

export function getInfo(figure: Triangle | Circle | Rectangle): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
