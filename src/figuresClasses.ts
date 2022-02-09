export interface Figure {
  shape: string,
  color: string,
  getArea: () => number,
}

type Color = 'red' | 'green' | 'blue';

function roundToHundreds(num: number): number {
  return Math.floor(num * 100) / 100;
}

export class Triangle {
  shape = 'triangle';

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
  }

  getArea(): number {
    const { a, b, c } = this;
    const semiP = (a + b + c) / 2;
    const area = Math.sqrt(semiP * (semiP - a) * (semiP - b) * (semiP - c));

    return roundToHundreds(area);
  }
}

export class Circle {
  shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('radius should be positive');
    }
  }

  getArea(): number {
    return roundToHundreds(Math.PI * this.radius ** 2);
  }
}

export class Rectangle {
  shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('both sides should be positive');
    }
  }

  getArea(): number {
    return roundToHundreds(this.width * this.height);
  }
}

export function getInfo(figure: Figure): string {
  const { color, shape } = figure;

  return `A ${color} ${shape} - ${figure.getArea()}`;
}
