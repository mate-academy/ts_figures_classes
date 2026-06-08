export interface Figure {
  // Кожна фігура має рядок з назвою
  shape: string;
  // Кожна фігура має рядок з кольором
  color: string;
  // Кожна фігура має метод, який повертає її площу
  getArea(): number;
}

export class Triangle implements Figure {
  // 1. Описуємо властивості класу, які вимагає інтерфейс
  readonly shape = 'triangle';

  // 2. Створюємо конструктор, який приймає параметри
  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0 || c >= a + b || b >= a + c || a >= b + c) {
      throw new Error(
        'Sides must be greater than zero and satisfy triangle inequality',
      );
    }
  }

  // 4. Метод для обчислення площі (0.5 помножити на base помножити на height)
  getArea(): number {
    const s = (this.a + this.b + this.c) / 2; // Полупериметр

    return (
      Math.floor(
        Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)) * 100,
      ) / 100
    );
    // Формула Герона
  }
}

export class Circle implements Figure {
  // 1. Описуємо властивості класу, які вимагає інтерфейс
  readonly shape = 'circle';

  // 2. Створюємо конструктор, який приймає параметри
  constructor(
    public color: string,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius must be greater than zero');
    }
  }

  // 4. Метод для обчислення площі (π помножити на радіус у квадраті)
  getArea(): number {
    return Math.floor(Math.PI * Math.pow(this.radius, 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  // 1. Описуємо властивості класу, які вимагає інтерфейс
  readonly shape = 'rectangle';

  // 2. Створюємо конструктор, який приймає параметри
  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must be greater than zero');
    }
  }

  // 4. Метод для обчислення площі (width помножити на height)
  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
