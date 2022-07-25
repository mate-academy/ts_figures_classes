export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle',
  color: 'red' | 'green' | 'blue',
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Figure['shape'] = 'triangle';

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0 || a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    const perimetr = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(perimetr
      * (perimetr - this.a) * (perimetr - this.b) * (perimetr - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Figure['shape'] = 'circle';

  constructor(
    public color: string,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    const area = (Math.floor(Math.PI * (this.radius ** 2) * 100) / 100);

    return area;
  }
}

export class Rectangle implements Figure {
  shape: Figure['shape'] = 'rectangle';

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    return (this.height * this.width);
  }
}

export function getInfo(figure: Figure): string {
  return (`A ${figure.color} ${figure.shape} - ${figure.getArea()}`);
}
