enum Shapes {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle'
}

type Colors = 'red' | 'green' | 'blue';

export interface Figure {
  shape : Shapes,
  color: Colors,
  getArea(): number,
}

function checkSides(...sides: number[]): void {
  if (Math.min(...sides) <= 0) {
    throw new Error('Sides must be more tha 0');
  }
}

function roundArea(area: number): number {
  return Math.floor(area * 100) / 100;
}

export class Triangle implements Figure {
  shape = Shapes.triangle;

  constructor(
    public color: Colors,
    public a: number = 0,
    public b: number = 0,
    public c: number = 0,
  ) {
    checkSides(a, b, c);

    if (a + b <= c || a + c <= b || c + b <= a) {
      throw new Error('Enter valid values');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return roundArea(area);
  }
}

export class Circle implements Figure {
  shape = Shapes.circle;

  constructor(
    public color: Colors,
    public radius: number = 0,
  ) {
    checkSides(radius);
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return roundArea(area);
  }
}

export class Rectangle implements Figure {
  shape = Shapes.rectangle;

  constructor(
    public color: Colors,
    public width: number = 0,
    public height: number = 0,
  ) {
    checkSides(width, height);
  }

  getArea(): number {
    const area = this.width * this.height;

    return roundArea(area);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
