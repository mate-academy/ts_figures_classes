export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'blue' | 'green';

  getArea(): number;
}

export class Triangle implements Figure {
  constructor(
    public color: 'red' | 'blue' | 'green',
    public a: number,
    public b: number,
    public c: number,
    public shape: 'triangle' | 'circle' | 'rectangle' = 'triangle',
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Sides cannot be negative');
    }

    if (c >= a + b || a >= b + c || b >= a + c) {
      throw new Error("The provided sides cannot form a valid triangle'");
    }
  }

  getArea(): number {
    const superPerimeter = (this.a + this.b + this.c) * 0.5;

    return (
      Math.floor(
        Math.sqrt(
          superPerimeter *
            (superPerimeter - this.a) *
            (superPerimeter - this.b) *
            (superPerimeter - this.c),
        ) * 100,
      ) / 100
    );
  }
}

export class Circle implements Figure {
  constructor(
    public color: 'red' | 'blue' | 'green',
    public radius: number,
    public shape: 'triangle' | 'circle' | 'rectangle' = 'circle',
  ) {
    if (radius <= 0) {
      throw new Error('Radius cannot be negative');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius * this.radius * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: 'red' | 'blue' | 'green',
    public width: number,
    public height: number,
    public shape: 'triangle' | 'circle' | 'rectangle' = 'rectangle',
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height cannot be negative');
    }
  }

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
