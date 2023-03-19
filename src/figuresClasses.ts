export interface Figure {
  color: 'red' | 'green' | 'blue';
  a: number;
  shape?: 'triangle' | 'circle' | 'rectangle';
  getArea: () => number;
}

export class Triangle implements Figure {
  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
    public c: number,
    public shape?: 'triangle',
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('One of the figure\'s sides less or 0');
    }

    if (Math.max(a, b, c) >= (a + b + c) - Math.max(a, b, c)) {
      throw new Error(
        `throws an error: sides ${a}, ${b} and ${c} can't form a triangle`,
      );
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const s = (a + b + c) / 2; // semiperimeter

    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
  }
}

export class Circle {
  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public shape?: 'circle',
  ) {
    if (a <= 0) {
      throw new Error('One of the figure\'s sides less or 0');
    }
  }

  getArea(): number {
    const { a } = this;
    const area = (a * a * Math.PI);
    const aroundArea = (Math.floor(area * 100)) / 100;

    return aroundArea;
  }
}

export class Rectangle {
  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
    public shape?: 'rectangle',
  ) {
    if (a <= 0 || b <= 0) {
      throw new Error('One of the figure\'s sides less or 0');
    }
  }

  getArea(): number {
    const { a, b } = this;

    return a * b;
  }
}

export function getInfo(figure: Figure): string {
  if (figure.shape === 'triangle') {
    return `A ${figure.color} triangle - ${figure.getArea()}`;
  }

  if (figure.shape === 'circle') {
    return `A ${figure.color} circle - ${figure.getArea()}`;
  }

  if (figure.shape === 'rectangle') {
    return `A ${figure.color} rectangle - ${figure.getArea()}`;
  }

  return 'error';
}
