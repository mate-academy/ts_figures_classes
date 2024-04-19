type Colors = 'red' | 'green' | 'blue';
type Shapes = `triangle` | `circle` | `rectangle`;

export interface Figure {
  shape: Shapes;
  color: Colors;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shapes = 'triangle';

  color: Colors;

  constructor(
    color: Colors,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || b <= 0) {
      throw new Error('Sides 1, 2 and 3 cannot form a triangle');
    }

    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error('Sides cannot form a triangle');
    }

    this.color = color;
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;

    return Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
  }
}

export class Circle implements Figure {
  shape: Shapes = 'circle';

  color: Colors;

  constructor(
    color: Colors,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('The radius must be greater than zero');
    }
    this.color = color;
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shapes = 'rectangle';

  color: Colors;

  constructor(
    color: Colors,
    public width: number,
    public heigth: number,
  ) {
    if (width <= 0 || heigth <= 0) {
      throw new Error(' Width and height must be greater than zero');
    }
    this.color = color;
  }

  getArea(): number {
    return this.heigth * this.width;
  }
}

export function getInfo(figure: Figure): string {
  const area = parseFloat(figure.getArea().toFixed(2));

  return `A ${figure.color} ${figure.shape} - ${area}`;
}
