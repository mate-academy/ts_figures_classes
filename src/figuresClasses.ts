export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  public readonly shape: string;

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error(
        'Длина стороны треугольника не может быть меньше или равной нулю.',
      );
    }

    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error(
        'Длина самой длинной стороны треугольника не может' +
          'быть больше или равной сумме длин двух других сторон.',
      );
    }
    this.shape = 'triangle';
  }

  public getArea(): number {
    const p: number = (this.a + this.b + this.c) / 2;
    const area: number = Math.sqrt(
      p * (p - this.a) * (p - this.b) * (p - this.c),
    );

    return Number(area.toFixed(2));
  }
}

export class Circle implements Figure {
  public readonly shape: string;

  constructor(
    public color: string,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('lalaalalal');
    }

    this.shape = 'circle';
  }

  public getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public readonly shape: string;

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    if (this.height <= 0 || this.width <= 0) {
      throw new Error('lalaalalal');
    }

    this.shape = 'rectangle';
  }

  public getArea(): number {
    const area: number = this.width * this.height;

    return Number(area.toFixed(2));
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
