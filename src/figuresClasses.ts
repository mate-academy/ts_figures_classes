type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

function roundToHundrets(num: number): number {
  return Math.floor(num * 100) / 100;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Side cant be 0');
    }

    if (a >= b + c || b >= c + a || c >= a + b) {
      throw new Error(
        'Side cant be greater than sum of other two',
      );
    }
  }

  getArea(): number {
    const perimeter = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt((perimeter - this.a) * (perimeter - this.b)
      * (perimeter - this.c) * perimeter);

    return roundToHundrets(area);
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius should be greater than zero');
    }
  }

  getArea(): number {
    const area = Math.PI * (this.radius ** 2);

    return roundToHundrets(area);
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Sides should be greater than zero');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return roundToHundrets(area);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
