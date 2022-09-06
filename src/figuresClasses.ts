export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea: () => number;
}

enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

function belowZero(property:number): void {
  if (property <= 0) {
    throw new Error('Error: radius must be greater than 0!!!');
  }
}

export class Triangle implements Figure {
  shape: Shape = Shape.Triangle;

  constructor(
    public color: 'red' | 'green' | 'blue',
    public a:number,
    public b:number,
    public c:number,
  ) {
    if (a >= b + c
      || b >= a + c
      || c >= a + b
    ) {
      throw new Error('Error: can not create triangle with such data!!!');
    }

    belowZero(a);
    belowZero(b);
    belowZero(c);
  }

  getArea(): number {
    const p: number = (this.a + this.b + this.c) / 2;

    return +Math.sqrt(p * (p - this.a)
     * (p - this.b) * (p - this.c)).toFixed(2);
  }
}

export class Circle implements Figure {
  shape: Shape = Shape.Circle;

  constructor(
    public color: 'red' | 'green' | 'blue',
    public radius: number,
  ) {
    belowZero(radius);
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = Shape.Rectangle;

  constructor(
    public color: 'red' | 'green' | 'blue',
    public width:number,
    public height:number,
  ) {
    belowZero(width);
    belowZero(height);
  }

  getArea(): number {
    return (this.width * this.height);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
