type Color = 'red' | 'green' | 'blue';
type Shape = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  shape: Shape,
  color: Color,
  getArea: () => number,
}

function roundToHundreds(num: number): number {
  return Math.floor(num * 100) / 100;
}

export class Triangle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const sides = [a, b, c].sort((s1, s2) => s2 - s1);

    if (a <= 0
      || b <= 0
      || c <= 0
    ) {
      throw new Error('all sides should be positive');
    }

    if (sides[0] >= (sides[1] + sides[2])) {
      throw new Error(
        'the sum of two shortest sides should be bigger than the longest side',
      );
    }

    this.shape = 'triangle';
  }

  getArea(): number {
    const { a, b, c } = this;
    const semiP = (a + b + c) / 2;
    const area = Math.sqrt(semiP * (semiP - a) * (semiP - b) * (semiP - c));

    return roundToHundreds(area);
  }
}

export class Circle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('radius should be positive');
    }

    this.shape = 'circle';
  }

  getArea(): number {
    return roundToHundreds(Math.PI * this.radius ** 2);
  }
}

export class Rectangle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('both sides should be positive');
    }

    this.shape = 'rectangle';
  }

  getArea(): number {
    return roundToHundreds(this.width * this.height);
  }
}

export function getInfo(figure: Figure): string {
  const { color, shape } = figure;

  return `A ${color} ${shape} - ${figure.getArea()}`;
}
