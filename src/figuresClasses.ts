export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle',
  color: 'red' | 'green' | 'blue',
  area: number,
}

export class Triangle implements Figure {
  shape: 'triangle' | 'circle' | 'rectangle';

  area: number;

  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.shape = 'triangle';
    this.area = this.getArea();

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Some lenght <= 0');
    }

    if (a >= (b + c) || b >= (a + c) || c >= (a + b)) {
      throw new Error(
        'One of the sides is bigger than or equal to the sum of the other two',
      );
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const p: number = (a + b + c) / 2;

    return Math.floor((Math.sqrt(p * (p - a) * (p - b) * (p - c))) * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: 'triangle' | 'circle' | 'rectangle';

  area: number;

  constructor(public color: 'red' | 'green' | 'blue', public radius: number) {
    this.shape = 'circle';
    this.area = this.getArea();

    if (radius <= 0) {
      throw new Error('Some lenght <= 0');
    }
  }

  getArea(): number {
    const { radius } = this;

    return Math.floor((Math.PI * radius * radius) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: 'triangle' | 'circle' | 'rectangle';

  area: number;

  constructor(
    public color: 'red' | 'green' | 'blue',
    public width: number,
    public height: number,
  ) {
    this.shape = 'rectangle';
    this.area = this.getArea();

    if (width <= 0 || height <= 0) {
      throw new Error('Some lenght <= 0');
    }
  }

  getArea(): number {
    const { width, height } = this;

    return Math.floor((width * height) * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  const { color, shape, area } = figure;

  return `A ${color} ${shape} - ${area}`;
}
