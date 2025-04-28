export interface Figure {
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  sides: number[];

  public color: string;

  public shape: string = 'triangle';

  constructor(sides: number[], color: string) {
    this.sides = sides;
    this.color = color;

    if (
      sides.length !== 3 ||
      this.sides[0] <= 0 ||
      this.sides[1] <= 0 ||
      this.sides[2] <= 0 ||
      this.sides[0] + this.sides[1] <= this.sides[2] ||
      this.sides[0] + this.sides[2] <= this.sides[1] ||
      this.sides[1] + this.sides[2] <= this.sides[0]
    ) {
      throw new Error('Triangle must have 3 sides');
    }
  }

  getArea(): number {
    const s = this.sides.reduce((a, b) => a + b) / 2;

    // eslint-disable-next-line max-len
    const area = Math.sqrt(
      s * (s - this.sides[0]) * (s - this.sides[1]) * (s - this.sides[2]),
    );

    return parseFloat(area.toFixed(2));
  }
}

export class Circle implements Figure {
  radius: number;

  color: string;

  shape: string = 'circle';

  constructor(radius: number, color: string) {
    this.radius = radius;
    this.color = color;

    if (radius <= 0) {
      throw new Error('Circle must have a positive radius');
    }
  }

  getArea(): number {
    const area = Math.PI * Math.pow(this.radius, 2);

    return parseFloat(area.toFixed(2));
  }
}

export class Rectangle implements Figure {
  width: number;

  height: number;

  color: string;

  shape: string = 'rectangle';

  constructor(width: number, height: number, color: string) {
    this.width = width;
    this.height = height;
    this.color = color;

    if (width <= 0 || height <= 0) {
      throw new Error('Rectangle must have positive width and height');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return parseFloat(area.toFixed(2));
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea().toFixed(2)}`;
}
