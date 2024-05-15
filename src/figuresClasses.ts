export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: string = 'triangle';

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('All sides must be greater than zero');
    }

    if (a + b <= c || b + c <= a || c + a <= b) {
      throw new Error('The sides cannot form a triangle');
    }
  }

  public getArea(): number {
    const s: number = (this.a + this.b + this.c) * 0.5;

    return +Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)).toFixed(
      2,
    );
  }
}

export class Circle implements Figure {
  public shape: string = 'circle';

  constructor(
    public color: string,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius must be greater than zero');
    }
  }

  public getArea(): number {
    const areaCircle = Math.PI * this.radius ** 2;

    return Math.trunc(areaCircle * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: string = 'rectangle';

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must be greater than zero');
    }
  }

  public getArea(): number {
    return +(this.height * this.width).toFixed(2);
  }
}

export function getInfo(figure: Figure): string {
  const area = figure.getArea();

  return `A ${figure.color} ${figure.shape} - ${area}`;
}
