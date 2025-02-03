export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

export class Triangle implements Figure {
  readonly shape: 'triangle' = 'triangle';

  readonly color: 'red' | 'green' | 'blue';

  readonly a: number;

  readonly b: number;

  readonly c: number;

  constructor(
    color: 'red' | 'green' | 'blue',
    a: number,
    b: number,
    c: number,
  ) {
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
    this.validate();
  }

  private validate(): void {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('Всі сторони трикутника повинні бути більше нуля');
    }

    const sides = [this.a, this.b, this.c].sort((a, b) => a - b);

    if (sides[2] >= sides[0] + sides[1]) {
      throw new Error(
        'Найдовша сторона трикутника не може бути більше' +
          'або дорівнювати сумі двох інших сторін',
      );
    }
  }

  getArea(): number {
    // Формула Герона
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Number(area.toFixed(2));
  }
}

export class Circle implements Figure {
  readonly shape: 'circle' = 'circle';

  readonly color: 'red' | 'green' | 'blue';

  readonly radius: number;

  constructor(color: 'red' | 'green' | 'blue', radius: number) {
    this.color = color;
    this.radius = radius;

    if (this.radius <= 0) {
      throw new Error('Радіус кола повинен бути більше нуля');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  readonly shape: 'rectangle' = 'rectangle';

  readonly color: 'red' | 'green' | 'blue';

  readonly width: number;

  readonly height: number;

  constructor(color: 'red' | 'green' | 'blue', width: number, height: number) {
    this.color = color;
    this.width = width;
    this.height = height;

    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Ширина і висота прямокутника повинні бути більше нуля');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return Number(area.toFixed(2));
  }
}

export function getInfo(figure: Figure): string {
  const area = figure.getArea();

  const formattedArea = area.toFixed(2).replace(/\.?0*$/, '');

  return `A ${figure.color} ${figure.shape} - ${formattedArea}`;
}
