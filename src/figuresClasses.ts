// Інтерфейс для фігур
export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

// Клас для трикутника
export class Triangle implements Figure {
  shape = 'triangle';

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    // Перевірка на коректність сторін
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Усі сторони мають бути більше 0.');
    }

    // Перевірка на нерівність трикутника
    const sides = [a, b, c].sort((x, y) => x - y);

    if (sides[2] >= sides[0] + sides[1]) {
      throw new Error('Невірний трикутник');
    }
  }

  // Метод для обчислення площі за формулою Герона
  getArea(): number {
    const s = (this.a + this.b + this.c) / 2; // Напівпериметр
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(area * 100) / 100; // Округлення до сотих
  }
}

// Клас для кола
export class Circle implements Figure {
  shape = 'circle';

  constructor(
    public color: string,
    public radius: number,
  ) {
    // Перевірка на коректність радіуса
    if (radius <= 0) {
      throw new Error('Радіус має бути більше 0.');
    }
  }

  // Метод для обчислення площі кола
  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return Math.floor(area * 100) / 100; // Округлення до сотих
  }
}

// Клас для прямокутника
export class Rectangle implements Figure {
  shape = 'rectangle';

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    // Перевірка на коректність ширини та висоти
    if (width <= 0 || height <= 0) {
      throw new Error('Ширина та висота мають бути більше 0.');
    }
  }

  // Метод для обчислення площі прямокутника
  getArea(): number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100; // Округлення до сотих
  }
}

// Функція для отримання інформації про фігуру
export function getInfo(figure: Figure): string {
  const area = figure.getArea();

  return `A ${figure.color} ${figure.shape} - ${area}`;
}
