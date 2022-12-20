const hackerAlert = new Error('Congratz! You\'ve hacked the system!');

export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle',
  color: 'red' | 'green' | 'blue',
  getArea: () => number,
}

export class Triangle implements Figure {
  shape: Figure['shape'] = 'triangle';

  constructor(
    public color: Figure['color'],
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (Math.min(...[a, b, c]) <= 0
      || Math.max(...[a, b, c])
      >= this.a + this.b + this.c - Math.max(...[a, b, c])) {
      throw hackerAlert;
    }
  }

  getArea = (): number => {
    // p = perimeter / 2
    const p = (this.a + this.b + this.c) / 2;

    const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return Math.round(area * 100) / 100;
  };
}

export class Circle implements Figure {
  shape: Figure['shape'] = 'circle';

  constructor(
    public color: Figure['color'],
    public r: number,
  ) {
    if (r <= 0) {
      throw hackerAlert;
    }
  }

  getArea = (): number => {
    return Math.floor(Math.PI * this.r ** 2 * 100) / 100;
  };
}

export class Rectangle implements Figure {
  shape: Figure['shape'] = 'rectangle';

  constructor(
    public color: Figure['color'],
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw hackerAlert;
    }
  }

  getArea = (): number => {
    return this.width * this.height;
  };
}

export function getInfo(figure: Figure):string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
