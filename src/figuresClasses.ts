export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: string;

  color: string;

  sides: number[];

  constructor(color: string, ...sides: number[]) {
    this.shape = 'triangle';
    this.color = color;
    this.sides = sides;

    if (sides.some((side) => side <= 0)) {
      throw new Error('The length of any side has to be greater than zero');
    }

    const a = sides[0];
    const b = sides[1];
    const c = sides[2];

    if (a >= b + c || b >= a + c || c >= b + a) {
      throw new Error('Triangle cannot be formed');
    }
  }

  getArea(): number {
    const [a, b, c] = this.sides;
    const semiPer = (a + b + c) / 2;
    // eslint-disable-next-line max-len
    const areaT = Math.sqrt(semiPer * (semiPer - a) * (semiPer - b) * (semiPer - c));

    return +areaT.toFixed(2);
  }
}

export class Circle implements Figure {
  shape: string;

  color: string;

  radius: number;

  constructor(color: string, radius: number) {
    this.shape = 'circle';
    this.color = color;
    this.radius = radius;

    if (radius <= 0) {
      throw new Error('Circle cannot be formed with non existent radius');
    }
  }

  getArea(): number {
    const areaC: number = Math.PI * this.radius ** 2;
    const roundedC: number = parseFloat(areaC.toFixed(2));

    return roundedC;
  }
}

export class Rectangle implements Figure {
  shape: string;

  color: string;

  width: number;

  height: number;

  constructor(color: string, width: number, height: number) {
    this.shape = 'rectangle';
    this.color = color;
    this.width = width;
    this.height = height;

    if (width <= 0 || height <= 0) {
      throw new Error('Sides of a rectangle must have a positive value');
    }
  }

  getArea(): number {
    return Math.floor(this.width * this.height);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
