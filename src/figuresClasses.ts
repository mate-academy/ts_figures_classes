type TypeShape = 'triangle' | 'circle' | 'rectangle';
type TypeColor = 'red' | 'green' | 'blue';

export interface Figure {
  shape: TypeShape;
  color: TypeColor;

  getArea(): number;
}

export class Triangle implements Figure {
  shape: TypeShape = 'triangle';

  constructor(
    public color: TypeColor,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Sides must be greater than 0');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('Sides cannot form a triangle');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: TypeShape = 'circle';

  constructor(
    public color: TypeColor,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius must be greater than 0');
    }
  }

  getArea(): number {
    const area = Math.PI * Math.pow(this.radius, 2);

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: TypeShape = 'rectangle';

  constructor(
    public color: TypeColor,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must be greater than 0');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  if (figure.shape === 'triangle') {
    return `A ${figure.color} triangle - ${figure.getArea()}`;
  } else if (figure.shape === 'circle') {
    return `A ${figure.color} circle - ${figure.getArea()}`;
  } else if (figure.shape === 'rectangle') {
    return `A ${figure.color} rectangle - ${figure.getArea()}`;
  }

  return '';
}
