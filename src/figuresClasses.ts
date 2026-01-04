type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

function roundDown(value: number): number {
  return Math.floor(value * 100) / 100;
}

class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    private width: number,
    private height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Rectangle sides must be greater than 0');
    }
  }

  getArea(): number {
    return roundDown(this.width * this.height);
  }
}

class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    private radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius must be greater than 0');
    }
  }

  getArea(): number {
    return roundDown(Math.PI * this.radius ** 2);
  }
}

class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    private a: number,
    private b: number,
    private c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Triangle sides must be greater than 0');
    }

    const max = Math.max(a, b, c);
    if (max >= a + b + c - max) {
      throw new Error("Triangle sides can't form a triangle");
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    return roundDown(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)));
  }
}

function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
