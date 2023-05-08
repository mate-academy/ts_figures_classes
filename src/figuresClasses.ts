export interface Figure {
  shape: 'string';
  color: 'string';
  radius?: number;
  a?: number;
  b?: number;
  c?: number;

  getArea(): number;
}

const roundedNum = (num: number): number => {
  return Math.floor(num * 100) / 100;
};

export class Triangle {
  shape = this.constructor.name;

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a >= b + c
      || b >= a + c
      || c >= a + b
    ) {
      throw new Error(
        `sides ${a}, ${b} and ${c} can't form a triangle`,
      );
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;

    const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return roundedNum(area);
  }
}

export class Circle {
  shape = this.constructor.name;

  constructor(
    public color: string,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error(
        `circle cant' have radius ${this.radius}`,
      );
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return roundedNum(area);
  }
}

export class Rectangle {
  shape = this.constructor.name;

  constructor(
    public color: string,
    public a: number,
    public b: number,
  ) {
    if (this.a <= 0 || this.b <= 0) {
      throw new Error(`
        sides ${this.a} and ${this.b} can't form a rectangle
      `);
    }
  }

  getArea(): number {
    const area = this.a * this.b;

    return roundedNum(area);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${
    figure.color
  } ${(figure.shape).toLowerCase()} - ${figure.getArea()}`;
}
