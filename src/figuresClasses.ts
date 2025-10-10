export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: 'triangle' = 'triangle';

  public color: 'red' | 'green' | 'blue';

  public a: number;

  public b: number;

  public c: number;

  constructor(
    color: 'red' | 'green' | 'blue',
    a: number,
    b: number,
    c: number,
  ) {
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;

    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('Length of one or few side or sides are equal 0');
    }

    if (
      this.a + this.b <= this.c ||
      this.a + this.c <= this.b ||
      this.b + this.c <= this.a
    ) {
      throw new Error(
        'The sum of any two sides must be greater than the third side.',
      );
    }
  }

  public getArea(): number {
    const semiperimetr: number = (this.a + this.b + this.c) * 0.5;
    const triangleArea: number = Math.sqrt(
      semiperimetr *
        (semiperimetr - this.a) *
        (semiperimetr - this.b) *
        (semiperimetr - this.c),
    );

    return +triangleArea.toFixed(2);
  }
}

export class Circle implements Figure {
  public shape: 'circle' = 'circle';

  public color: 'red' | 'green' | 'blue';

  public radius: number;

  constructor(color: 'red' | 'green' | 'blue', radius: number) {
    this.color = color;
    this.radius = radius;

    if (this.radius <= 0) {
      throw new Error('The radius is invalid');
    }
  }

  public getArea(): number {
    const circleArea: number = Math.PI * (this.radius * this.radius);
    const circleToPrecise = circleArea * 100;
    const truncatedValue = Math.floor(circleToPrecise);

    return truncatedValue / 100;
  }
}

export class Rectangle implements Figure {
  public shape: 'rectangle' = 'rectangle';

  public color: 'red' | 'green' | 'blue';

  public width: number;

  public heigh: number;

  constructor(color: 'red' | 'green' | 'blue', width: number, heigh: number) {
    this.color = color;
    this.width = width;
    this.heigh = heigh;

    if (this.width <= 0 || this.heigh <= 0) {
      throw new Error('Some of parameters are incorrect');
    }
  }

  public getArea(): number {
    const rectangleArea: number = this.width * this.heigh;

    return +rectangleArea.toFixed(2);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
