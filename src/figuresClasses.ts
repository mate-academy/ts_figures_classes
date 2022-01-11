export interface Figure {
  color: 'red' | 'green' | 'blue';
  shape: string;

  getArea(): number;
}

export class Triangle implements Figure {
  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
    public c: number,
    public shape = 'triangle',
  ) {
    const sides: number[] = [a, b, c];

    sides.sort((side1, side2) => side2 - side1);

    if (sides[0] >= sides[1] + sides[2]) {
      throw new Error('sides 1, 2 and 3 can\'t form a triangle');
    }

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('sides should be more then 0');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  constructor(
    public color: 'red' | 'green' | 'blue',
    public radius: number,
    public shape = 'circle',
  ) {
    if (radius <= 0) {
      throw new Error('radius should be more then 0');
    }
  }

  getArea(): number {
    return Math.floor((this.radius ** 2 * Math.PI) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: 'red' | 'green' | 'blue',
    public heigth: number,
    public weigth: number,
    public shape = 'rectangle',
  ) {
    if (heigth <= 0 || weigth <= 0) {
      throw new Error('sides should be more then 0');
    }
  }

  getArea(): number {
    return Math.floor(this.heigth * this.weigth * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
