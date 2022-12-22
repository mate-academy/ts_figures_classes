type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    private side1: number,
    private side2: number,
    private side3: number,
  ) {
    if (Math.min(side1, side2, side3) <= 0) {
      throw new Error('Sides must be greater than zero');
    }

    if (this.isNotTriangle()) {
      throw new Error('Sum of cathetus must be greater than hypotenuse');
    }
  }

  isNotTriangle(): boolean {
    const sides = [this.side1, this.side2, this.side3]
      .sort((a, b) => a - b);
    const [cat1, cat2, hip] = sides;

    return cat1 + cat2 <= hip;
  }

  getArea(): number {
    const sides = [this.side1, this.side2, this.side3].sort();
    const [cat1, cat2, hip] = sides;
    // Semiperimeter "sP":
    const sP = (cat1 + cat2 + hip) / 2;
    const triangleArea = Math.floor(Math.sqrt(sP
      * (sP - cat1) * (sP - cat2) * (sP - hip)) * 100) / 100;

    return Number(triangleArea);
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    private radius: number,
  ) {
    if (radius < 0) {
      throw new Error('No circle with negative or no radius :\'(');
    }
  }

  getArea(): number {
    return Math.floor((Math.PI * (this.radius ** 2)) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    private side1: number,
    private side2: number,
  ) {
    if (Math.min(this.side1, this.side2) <= 0) {
      throw new Error('Sides must be positive and non-zero');
    }
  }

  getArea(): number {
    return this.side1 * this.side2;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
