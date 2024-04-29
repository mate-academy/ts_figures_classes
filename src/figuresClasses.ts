export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';

  getArea(): number;
}

export class Triangle implements Figure {
  constructor(
    public color: 'red' | 'green' | 'blue',
    public a = 0,
    public b = 0,
    public c = 0,
    public shape: 'triangle' = 'triangle',
  ) {
    if (a === 0 || b === 0 || c === 0) {
      throw new Error('All sides of the triangle must be greater than 0');
    }

    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error(
        'The longest side of a triangle must be less than sum of two others',
      );
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const s = (a + b + c) / 2;
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    return +area.toFixed(2);
  }
}

export class Circle implements Figure {
  constructor(
    public color: 'red' | 'green' | 'blue',
    public radius = 0,
    public shape: 'circle' = 'circle',
  ) {
    if (radius <= 0) {
      throw new Error('Radius cannot be negative or equal to 0');
    }
  }

  getArea(): number {
    const area = Math.floor(Math.PI * this.radius ** 2 * 100) / 100;

    return area;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: 'red' | 'green' | 'blue',
    public width = 0,
    public height = 0,
    public shape: 'rectangle' = 'rectangle',
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height cannot be negative or equal to 0');
    }
  }

  getArea(): number {
    const { width, height } = this;

    return +(width * height).toFixed(2);
  }
}

export function getInfo(figure: Figure): string {
  const { color, shape } = figure;
  const area = figure.getArea();

  return `A ${color} ${shape} - ${area}`;
}
