export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

export class Triangle implements Figure {
  shape: 'triangle' = 'triangle';

  color: 'red' | 'green' | 'blue';

  private a: number;

  private b: number;

  private c: number;

  constructor(
    color: 'red' | 'green' | 'blue',
    a: number,
    b: number,
    c: number,
  ) {
    if (a <= 0) {
      throw new Error(`Side 'a' must be > 0 (received: ${a})`);
    }

    // Проверка стороны b
    if (b <= 0) {
      throw new Error(`Side 'b' must be > 0 (received: ${b})`);
    }

    // Проверка стороны c
    if (c <= 0) {
      throw new Error(`Side 'c' must be > 0 (received: ${c})`);
    }

    const sides = [a, b, c].sort((x, y) => x - y);

    const max = Math.max(...sides);
    const sumOther = sides.reduce((acc, side) => acc + side, 0) - max;

    if (max >= sumOther) {
      throw new Error(
        `Triangle inequality violated: max side ${max} >= sum of other sides ${sumOther}`,
      );
    }

    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    // Формула Герона
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: 'circle' = 'circle';

  color: 'red' | 'green' | 'blue';

  private radius: number;

  constructor(color: 'red' | 'green' | 'blue', radius: number) {
    if (radius <= 0) {
      throw new Error(`Radius must be > 0 (received: ${radius})`);
    }
    this.color = color;
    this.radius = radius;
  }

  getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: 'rectangle' = 'rectangle';

  color: 'red' | 'green' | 'blue';

  private width: number;

  private height: number;

  constructor(color: 'red' | 'green' | 'blue', width: number, height: number) {
    // Проверка ширины
    if (width <= 0) {
      throw new Error(`Width must be > 0 (received: ${width})`);
    }

    // Проверка высоты
    if (height <= 0) {
      throw new Error(`Height must be > 0 (received: ${height})`);
    }
    this.color = color;
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
