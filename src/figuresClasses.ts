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
    this.color = color;

    // Перевірка на від'ємні або нульові значення сторін
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('All sides must be greater than 0');
    }

    // Перевірка чи можна утворити трикутник за даними сторонами
    // (найбільша сторона має бути менша за суму двох інших)
    const maxSide = Math.max(a, b, c);
    const sum = a + b + c - maxSide;

    if (maxSide >= sum) {
      throw new Error(`Sides ${a}, ${b} and ${c} can't form a triangle`);
    }

    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    // Формула Герона для обчислення площі трикутника
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    // Округлення до сотих
    return Math.round(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: 'circle' = 'circle';

  color: 'red' | 'green' | 'blue';

  private radius: number;

  constructor(color: 'red' | 'green' | 'blue', radius: number) {
    this.color = color;

    // Перевірка на від'ємний або нульовий радіус
    if (radius <= 0) {
      throw new Error('Radius must be greater than 0');
    }

    this.radius = radius;
  }

  getArea(): number {
    // Обчислення площі кола за формулою π * r²
    const rawArea = Math.PI * this.radius * this.radius;

    // Округлення до сотих
    // Використовуємо Math.floor замість Math.round
    return Math.floor(rawArea * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: 'rectangle' = 'rectangle';

  color: 'red' | 'green' | 'blue';

  private width: number;

  private height: number;

  constructor(color: 'red' | 'green' | 'blue', width: number, height: number) {
    this.color = color;

    // Перевірка на від'ємні або нульові значення
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must be greater than 0');
    }

    this.width = width;
    this.height = height;
  }

  getArea(): number {
    // Площа прямокутника: ширина * висота
    const area = this.width * this.height;

    // Округлення до сотих
    return Math.round(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
