type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(public color: Color, public a: number,
    public b: number, public c: number) {
    if (c <= 0 || b <= 0 || c <= 0) {
      throw new Error('Sides can not be less 0');
    }

    if (!(a + b > c && a + c > b && b + c > a)) {
      throw new Error(
        'The longest side can not be longer than sum of other two',
      );
    }
  }

  getArea(): number {
    const s: number = (this.a + this.b + this.c) / 2;

    const result = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return parseFloat(result.toFixed(2));
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(public color: Color, public radius: number) {
    if (radius <= 0) {
      throw new Error('Radius can not be less 0');
    }
  }

  getArea(): number {
    let result = Math.PI * this.radius * this.radius;

    result *= 100;
    result = Math.floor(result);
    result /= 100;

    return result;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(public color: Color,
    public width: number, public height: number) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width or heigth can not be less 0');
    }
  }

  getArea(): number {
    const result = this.height * this.width;

    return parseFloat(result.toFixed(2));
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
