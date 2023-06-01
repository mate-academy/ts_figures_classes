type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number;
}

export class Triangle {
  public shape: Figure['shape'] = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.validateTriangle();
  }

  validateTriangle(): void {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('Figure lenght must be > 0');
    }

    const sidesArray: number[] = [this.a, this.b, this.c];

    sidesArray.sort((min, max) => min - max);

    if (sidesArray[sidesArray.length - 1] >= sidesArray[0] + sidesArray[1]) {
      throw new Error('Figure lenght must be > 0');
    }
  }

  getArea(): number {
    const halfPerimeter = (this.a + this.b + this.c) / 2;

    const area:number = Math.sqrt(
      halfPerimeter
      * (halfPerimeter - this.a)
      * (halfPerimeter - this.b)
      * (halfPerimeter - this.c),
    );

    return Math.floor(area * 100) / 100;
  }
}

export class Circle {
  public shape: Figure['shape'] = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    this.validateTriangle();
  }

  validateTriangle(): void {
    if (this.radius <= 0) {
      throw new Error('Figure lenght must be > 0');
    }
  }

  getArea(): number {
    const area: number = Math.PI * this.radius * this.radius;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle {
  public shape: Figure['shape'] = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    this.validateTriangle();
  }

  validateTriangle(): void {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Figure lenght must be > 0');
    }
  }

  getArea(): number {
    const area: number = this.width * this.height;

    return Math.round(area);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
