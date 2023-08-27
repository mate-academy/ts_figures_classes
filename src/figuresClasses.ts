export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

export class Triangle {
  shape: Figure['shape'] = 'triangle';

  constructor(
    public color: Figure['color'],
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('All sides should be positive');
    }

    const checkerArr: number[] = [a, b, c]
      .sort((x: number, y: number) => x - y);

    if (checkerArr[2] >= checkerArr[0] + checkerArr[1]) {
      throw new Error(
        'The longest sides can\'t be smaller or equal to sum of others sides',
      );
    }
  }

  getArea(): number {
    const halfPerimetr = (this.a + this.b + this.c) / 2;

    return Number(Math.sqrt(
      halfPerimetr
        * (halfPerimetr - this.a)
        * (halfPerimetr - this.b)
        * (halfPerimetr - this.c),
    ).toFixed(2));
  }
}

export class Circle {
  shape: Figure['shape'] = 'circle';

  constructor(
    public color: Figure['color'],
    public radius: number,
  ) {
    if (radius < 0) {
      throw new Error('Radius must be positive');
    }
  }

  getArea(): number {
    return Math.trunc((Math.PI * (this.radius ** 2)) * 100) / 100;
  }
}

export class Rectangle {
  shape: Figure['shape'] = 'rectangle';

  constructor(
    public color: Figure['color'],
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('All sides should be positive');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
