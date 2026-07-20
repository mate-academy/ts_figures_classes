export interface Figure {}
export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea(): number | string;Expand commentComment on line R4
}

export class Triangle implements Figure {
  readonly shape = 'triangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public a = 0,
    public b = 0,
    public c = 0,
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('A side must be greater than 0');
    }

    if (
      this.a + this.b <= this.c ||
      this.a + this.c <= this.b ||
      this.b + this.c <= this.a
    ) {
      throw new Error(
        'The longest side must be shorter than the other two combined',
      );
    }
  }

  getArea(): number | string {
    const sum = (this.a + this.b + this.c) / 2;
    const result = Math.sqrt(
      sum * (sum - this.a) * (sum - this.b) * (sum - this.c),
    );

    if (Number.isInteger(result)) {
      return result;
    } else {
      return Number(result.toFixed(2));
    }Expand commentComment on lines R31 to R41
  }
}

export class Triangle implements Figure {}
export class Circle implements Figure {
  readonly shape = 'circle';

export class Circle implements Figure {}
  constructor(
    public color: 'red' | 'green' | 'blue',
    public radius = 0,
  ) {
    if (this.radius <= 0) {
      throw new Error('The radius must be greater than 0');
    }
  }

export class Rectangle implements Figure {}
  getArea(): number | string {Expand commentComment on line R57
    const result = Math.PI * this.radius ** 2;

    return Math.floor(result * 100) / 100;Expand commentComment on lines R57 to R60
  }
}

export class Rectangle implements Figure {
  readonly shape = 'rectangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public width = 0,
    public height = 0,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('A side must be greater than 0');
    }
  }

  getArea(): number | string {
    const result = this.width * this.height;

    if (Number.isInteger(result)) {
      return result;
    } else {
      return Number(result.toFixed(2));
    }
  }Expand commentComment on lines R77 to R85
}

export function getInfo(figure): string {
  return typeof figure;
export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
