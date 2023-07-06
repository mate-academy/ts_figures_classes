export interface Figure {
  shape: string;
  color: string;

  getArea(): number;
}

export class Triangle implements Figure {
  shape = 'triangle';

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0
      || a + b <= c || b + c <= a || c + a <= b
    ) {
      throw new Error('Invalid triangle sides input');
    }
  }

  getArea(): number {
    const heronResult = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(heronResult
      * (heronResult - this.a)
      * (heronResult - this.b)
      * (heronResult - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape = 'circle';

  constructor(
    public color: string,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius must be bigger than 0');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = 'rectangle';

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    if (width <= 0) {
      throw new Error('Width must be bigger than 0');
    }

    if (height <= 0) {
      throw new Error('Height must be bigger than 0');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return area;
  }
}

export function getInfo(figure: Figure): string {
  const area = figure
    .getArea()
    .toFixed(figure instanceof Rectangle ? 0 : 2);

  return `A ${figure.color} ${figure.shape} - ${area}`;
}
