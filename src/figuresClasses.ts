/* eslint-disable max-len */
type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape : Shape;
  color : Color;

  getArea() : number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(public color : Color, public a : number, public b : number, public c : number) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('No side can equal 0 or less than 0');
    }

    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error('One side cannot be equal or longer than sum of both sides');
    }
  }

  getArea() : number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)).toFixed(2);

    return +area;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(public color : Color, public radius: number) {
    if (radius <= 0) {
      throw new Error('Radius cannot be equal or below 0');
    }
  }

  getArea(): number {
    const area : number = Math.PI * (this.radius * this.radius);
    const roundedResult : number = Math.floor(area * 100) / 100;

    return roundedResult;
  }
}

export class Rectangle implements Figure {
  shape : Shape = 'rectangle';

  constructor(public color : Color, public height : number, public width : number) {
    if (height <= 0 || width <= 0) {
      throw new Error('Height and width cannot be equal or below 0');
    }
  }

  getArea(): number {
    const area = (this.height * this.width).toFixed(2);

    return +area;
  }
}

export function getInfo(figure : Figure): string {
  const { color, shape } = figure;

  return `A ${color} ${shape} - ${figure.getArea()}`;
}
