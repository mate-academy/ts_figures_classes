function convertNumber(number: number): number {
  return Math.trunc(number * 100) / 100;
}

export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle',
  color: 'red' | 'green' | 'blue',
  getArea(): number
}

export class Triangle {
  public shape: Figure['shape'] = 'triangle';

  constructor(
    public color: Figure,
    public sideA: number,
    public sideB: number,
    public sideC: number,
  ) {
    if ([sideA, sideB, sideC].some((n) => n <= 0)) {
      throw new Error('Triangle cannot be created due to invalid width');
    }

    const exceedCase1 = sideA >= sideB + sideC;
    const exceedCase2 = sideB >= sideA + sideC;
    const exceedCase3 = sideC >= sideA + sideB;

    if (exceedCase1 || exceedCase2 || exceedCase3) {
      throw new Error(
        "Triangle's side cannot be larger than the sum of two other sides",
      );
    }
  }

  getArea(): number {
    const semiP = (this.sideA + this.sideB + this.sideC) / 2;
    const area = Math.sqrt(semiP * (
      semiP - this.sideA) * (semiP - this.sideB) * (semiP - this.sideC));

    return convertNumber(area);
  }
}

export class Circle {
  public shape: Figure['shape'] = 'circle';

  constructor(
    public color: Figure,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius cannot be created due to invalid width');
    }
  }

  getArea(): number {
    const area = Math.PI * (this.radius * this.radius);

    return convertNumber(area);
  }
}

export class Rectangle {
  public shape: Figure['shape'] = 'rectangle';

  constructor(
    public color: Figure,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Rectangle cannot be created due to invalid width');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return area;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
