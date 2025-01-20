export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
}

export class Triangle implements Figure {
  shape: 'triangle' = 'triangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Invalid triangle side!');
    }

    if (c >= a + b) {
      throw new Error('These sides cannot form a triangle!');
    }
  }

  getArea(): number {
    const s: number = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(
      s * (s - this.a) * (s - this.b) * (s - this.c),
    ).toFixed(2);

    return +area;
  }
}

export class Circle implements Figure {
  shape: 'circle' = 'circle';

  constructor(
    public color: 'red' | 'blue' | 'green',
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Invalid radius!');
    }
  }

  getArea(): number {
    const area: number = Math.PI * this.radius ** 2;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: 'rectangle' = 'rectangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Invalid rectangle side!');
    }
  }

  getArea(): number {
    const area = (this.height * this.width).toFixed(2);

    return +area;
  }
}

export function getInfo(figure: Triangle | Circle | Rectangle): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
