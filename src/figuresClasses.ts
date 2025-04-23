export interface Figure {
  color: 'red' | 'green' | 'blue';
  shape: 'triangle' | 'circle' | 'rectangle';
  getArea(): number;
}

export class Triangle implements Figure {
  shape: 'triangle' = 'triangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
    public c: number
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('Сторони мають бути більше нуля');
    }
    if (this.a + this.b <= this.c || this.a + this.c <= this.b || this.b + this.c <= this.a) {
      throw new Error('Неправильні сторони для трикутника');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    return Number(Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)).toFixed(2));
  }
}

export class Circle implements Figure {
  shape: 'circle' = 'circle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public radius: number
  ) {
    if (this.radius <= 0) {
      throw new Error('Радіус має бути більше нуля');
    }
  }

  getArea(): number {
    return Number((Math.PI * this.radius ** 2).toFixed(2));
  }
}

export class Rectangle implements Figure {
  shape: 'rectangle' = 'rectangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public width: number,
    public height: number
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Ширина і висота мають бути більше нуля');
    }
  }

  getArea(): number {
    return Number((this.width * this.height).toFixed(2));
  }
}

export function getInfo(figure: Figure): string {
  return `Фігура: ${figure.shape}, колір: ${figure.color}, площа: ${figure.getArea()}`;
}
