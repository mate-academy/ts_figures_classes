type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

class Rectangle implements Figure {
  readonly shape: Shape = 'rectangle';
  constructor(
    public readonly color: Color,
    private readonly width: number,
    private readonly height: number
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must be greater than 0');
    }
  }

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

class Circle implements Figure {
  readonly shape: Shape = 'circle';
  constructor(
    public readonly color: Color,
    private readonly radius: number
  ) {
    if (radius <= 0) {
      throw new Error('Radius must be greater than 0');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius * this.radius * 100) / 100;
  }
}

class Triangle implements Figure {
  readonly shape: Shape = 'triangle';
  constructor(
    public readonly color: Color,
    private readonly a: number,
    private readonly b: number,
    private readonly c: number
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('All sides must be greater than 0');
    }

    const sides = [a, b, c].sort((x, y) => x - y);
    if (sides[2] >= sides[0] + sides[1]) {
      throw new Error("The longest side can't be equal or greater than the sum of other two");
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const p = (a + b + c) / 2;
    const area = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    return Math.floor(area * 100) / 100;
  }
}

function getInfo(figure: Figure): string {
  const area = figure.getArea();
  return `A ${figure.color} ${figure.shape} - ${area}`;
}