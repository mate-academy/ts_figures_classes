export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  a: number;

  b: number;

  c: number;

  shape: string;

  constructor(
    public color: string,
    a: number,
    b: number,
    c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error();
    }

    const maxSide: number = Math.max(a, b, c);

    const minSides = [a, b, c].filter((num: number) => num !== maxSide);

    if (maxSide >= minSides[0] + minSides[1]) {
      throw new Error(
        `sides ${Math.min(...minSides)}, ${Math.max(...minSides)} and ${maxSide} can't form a triangle`,
      );
    }

    this.a = a;
    this.b = b;
    this.c = c;
    this.shape = 'triangle';
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    const square = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return Math.floor(square * 100) / 100;
  }
}

export class Circle implements Figure {
  radius: number;

  shape: string;

  constructor(
    public color: string,
    radius: number,
  ) {
    if (radius <= 0) {
      throw new Error();
    }

    this.radius = radius;
    this.shape = 'circle';
  }

  getArea(): number {
    const square = Math.PI * Math.pow(this.radius, 2);

    return Math.floor(square * 100) / 100;
  }
}

export class Rectangle implements Figure {
  a: number;

  b: number;

  shape: string;

  constructor(
    public color: string,
    a: number,
    b: number,
  ) {
    if (a <= 0 || b <= 0) {
      throw new Error();
    }

    this.a = a;
    this.b = b;
    this.shape = 'rectangle';
  }

  getArea(): number {
    const square = this.a * this.b;

    return Math.floor(square * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  let result = '';

  const color: string = figure.color;
  const area: number = figure.getArea();

  switch (figure.constructor.name) {
    case 'Triangle': {
      result = `A ${color} triangle - ${area}`;
      break;
    }

    case 'Circle': {
      result = `A ${color} circle - ${area}`;

      break;
    }

    case 'Rectangle': {
      result = `A ${color} rectangle - ${area}`;

      break;
    }
  }

  return result;
}
