export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

export class Triangle implements Figure {
  shape: 'triangle' = 'triangle';

  color: 'red' | 'green' | 'blue';

  constructor(
    color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0 || a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('Invalid triangle sides');
    }
    this.color = color;
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    return parseFloat(Math
      .sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)).toFixed(2));
  }
}

export class Circle implements Figure {
  shape: 'circle' = 'circle';

  color: 'red' | 'green' | 'blue';

  constructor(color: 'red' | 'green' | 'blue', public radius: number) {
    if (radius <= 0) {
      throw new Error('Invalid circle radius');
    }
    this.color = color;
  }

  getArea(): number {
    return +(
      Math.floor(Math.PI * this.radius * this.radius * 100) / 100
    ).toFixed(2);
  }
}

export class Rectangle implements Figure {
  shape: 'rectangle' = 'rectangle';

  color: 'red' | 'green' | 'blue';

  constructor(
    color: 'red' | 'green' | 'blue',
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Invalid rectangle dimensions');
    }
    this.color = color;
  }

  getArea(): number {
    return parseFloat((this.width * this.height).toFixed(2));
  }
}

export function getInfo(figure: Figure): string {
  const area = figure.getArea();

  return `A ${figure.color} ${figure.shape} - ${area}`;
}
