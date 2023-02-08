export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

export class Triangle implements Figure {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    public color: Figure['color'],
    public a: number,
    public b: number,
    public c: number,
    public shape: Figure['shape'] = 'triangle',
  ) {
    if (
      a.toString().length <= 0
      || b.toString().length <= 0
      || c.toString().length <= 0
    ) {
      throw new Error('all sides must be > 0');
    }

    const arrayOfSides: number[] = [];

    arrayOfSides.push(a, b, c);
    arrayOfSides.sort((first, second) => second - first);

    const sumOfTwoSides: number = arrayOfSides[1] + arrayOfSides[2];

    if (arrayOfSides[0] >= sumOfTwoSides) {
      throw new Error('longest side must be >= sum of two others');
    }
  }

  getArea(): number {
    const halfMeter: number = (this.a + this.b + this.c) / 2;

    return (
      Math.trunc((
        Math.sqrt(halfMeter
          * (halfMeter - this.a)
          * (halfMeter - this.b)
          * (halfMeter - this.c))
          * 100
      )) / 100
    );
  }
}

export class Circle implements Figure {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    public color: Figure['color'],
    public radius: number,
    public shape: Figure['shape'] = 'circle',
  ) {
    if (this.radius <= 0) {
      throw new Error('radius must be positive');
    }
  }

  getArea(): number {
    return (
      Math.trunc((Math.PI * this.radius ** 2) * 100) / 100
    );
  }
}

export class Rectangle implements Figure {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    public color: Figure['color'],
    public width: number,
    public height: number,
    public shape: Figure['shape'] = 'rectangle',
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('sides must be > 0');
    }
  }

  getArea(): number {
    return (
      Math.trunc(this.width * this.height * 100) / 100
    );
  }
}

export function getInfo(figure: Figure): string {
  const { color, shape } = figure;
  const area: number = figure.getArea();

  return `A ${color} ${shape} - ${area}`;
}
