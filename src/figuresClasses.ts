export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

export class Triangle implements Figure {
  readonly shape: 'triangle' = 'triangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number = 0,
    public b: number = 0,
    public c: number = 0,
  ) {
    const sides = [this.a, this.b, this.c].sort(
      (num1: number, num2: number) => num2 - num1,
    );

    if (sides[0] >= sides[1] + sides[2]) {
      throw new Error("can't form a triangle");
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    return Number(
      Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)).toFixed(2),
    );
  }
}

export class Circle implements Figure {
  readonly shape: 'circle' = 'circle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public radius: number = 0,
  ) {
    if (this.radius <= 0) {
      throw new Error("can't be circle");
    }
  }

  getArea(): number {
    const calcul = Math.PI * this.radius ** 2;

    return Math.floor(calcul * 100) / 100;
  }
}

export class Rectangle implements Figure {
  readonly shape: 'rectangle' = 'rectangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public width: number = 0,
    public height: number = 0,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error("can't be rectangle");
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
