export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0 || a + b <= c || a + b <= c || b + c <= a) {
      throw new Error('Sides should be positive and form a valid triangle.');
    }
    this.shape = 'triangle';
  }

  shape: string;

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
  }
}

export class Circle implements Figure {
  constructor(
    public color: string,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius should be a positive number');
    }
    this.shape = 'circle';
  }

  shape: string;

  getArea(): number {
    const square: number = Math.PI * Math.pow(this.radius, 2);

    return Math.floor(square * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and Height should be positive!');
    }
    this.shape = 'rectangle';
  }

  shape: string;

  getArea(): number {
    const square: number = this.height * this.width;

    return square;
  }
}

export function getInfo(figure: Figure): string {
  const area: number = figure.getArea();

  if (Number.isInteger(area)) {
    return `A ${figure.color} ${figure.shape} - ${area}`;
  } else {
    return `A ${figure.color} ${figure.shape} - ${area.toFixed(2)}`;
  }
}
