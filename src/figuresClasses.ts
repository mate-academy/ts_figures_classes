export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';

  getArea(): number;
}

export class Triangle implements Figure {
  readonly shape = 'triangle';

  constructor(
    public color: Figure['color'],
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0) {
      throw new Error(
        'Значение стороны "a" меньше 0. Ведите корректное значение',
      );
    }

    if (b <= 0) {
      throw new Error(
        'Значение стороны "b" стороны меньше 0. Ведите корректное значение',
      );
    }

    if (c <= 0) {
      throw new Error(
        'Значение стороны "c" стороны меньше 0. Ведите корректное значение',
      );
    }

    if (a >= b + c || c >= a + b || b >= a + c) {
      throw new Error(
        'Недопустимые стороны треугольника: длина самой длинной' +
          ' стороны должна быть меньше суммы длин двух других сторон',
      );
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  readonly shape = 'circle';

  constructor(
    public color: Figure['color'],
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error(
        'Введенное значение радиуса меньше 0. Введите корректное значение',
      );
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  readonly shape = 'rectangle';

  constructor(
    public color: Figure['color'],
    public width: number,
    public height: number,
  ) {
    if (width <= 0) {
      throw new Error('Введенная ширина меньше 0. Введите значение больше 0!!');
    }

    if (height <= 0) {
      throw new Error('Введенная высота меньше 0. Введите значение больше 0!!');
    }
  }

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
