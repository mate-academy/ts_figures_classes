type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    // перевірка, чи будь-яка зі сторін <= 0
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('Sides of triangle should be greater than zero.');
    }

    // перевірка, чи найдовша сторона >= двом іншим
    if (
      this.a >= this.b + this.c ||
      this.b >= this.a + this.c ||
      this.c >= this.a + this.b
    ) {
      throw new Error(
        `sides ${this.a}, ${this.b} and ${this.c} can't form a triangle`,
      );
    }
    this.shape = 'triangle';
  }

  getArea(): number {
    // знаходимо напівпериметр
    const s: number = (this.a + this.b + this.c) / 2;
    // формула Герона
    const area: number = Math.sqrt(
      s * (s - this.a) * (s - this.b) * (s - this.c),
    );

    // округлення до сотих
    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Circle radius should be greater than zero.');
    }
    this.shape = 'circle';
  }

  getArea(): number {
    // площа кола = пі * його радіус в квадраті
    const area = Math.PI * this.radius ** 2;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Sides of rectangle should be greater than zero.');
    }
    this.shape = 'rectangle';
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
