type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: Color;
  a: number;
  b?: number;
  c?: number;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: 'triangle' = 'triangle';

  color: Color;

  a: number;

  b: number;

  c: number;

  constructor(color: Color, a: number, b: number, c: number) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Сторони трикутника повинні бути > 0');
    }

    if (Math.max(a, b, c) >= a + b + c - Math.max(a, b, c)) {
      throw new Error('Неможливо побудувати трикутник із таких сторін');
    }
    this.a = a;
    this.b = b;
    this.c = c;
    this.color = color;
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return Math.floor(area * 100) / 100; // округлення вниз до сотих
  }
}

export class Circle implements Figure {
  shape: 'circle' = 'circle';

  color: Color;

  a: number;

  constructor(color: Color, a: number) {
    if (a <= 0) {
      throw new Error('Радіус повинен бути > 0');
    }

    this.a = a;
    this.color = color;
  }

  getArea(): number {
    const area = Math.PI * this.a ** 2;

    return Math.floor(area * 100) / 100; // округлення вниз до сотих
  }
}

export class Rectangle implements Figure {
  shape: 'rectangle' = 'rectangle';

  color: Color;

  a: number;

  b: number;

  constructor(color: Color, a: number, b: number) {
    if (a <= 0 || b <= 0) {
      throw new Error('Сторони прямокутника повинні бути > 0');
    }

    this.a = a;
    this.b = b;
    this.color = color;
  }

  getArea(): number {
    const area = this.a * this.b;

    return Math.floor(area * 100) / 100; // округлення вниз до сотих
  }
}

// getInfo з правильним форматуванням
export function getInfo(figure: Figure): string {
  const area = figure.getArea();
  const areaStr = Number.isInteger(area) ? area.toString() : area.toFixed(2);

  return `A ${figure.color} ${figure.shape} - ${areaStr}`;
}
