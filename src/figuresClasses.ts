type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const perimeter: number = a + b + c;
    const hypotenuse: number = Math.max(a, b, c);
    const sum = perimeter - hypotenuse;

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error(`Triangle sides must be > 0: a=${a}, b=${b}, c=${c}`);
    }

    if (hypotenuse >= sum) {
      throw new Error(`Triangle sides ${a}, ${b} and ${c} cannot form a triangle`);
    }
  }

  get s(): number {
    return (this.a + this.b + this.c) / 2;
  }

  get area(): number {
    return Math.sqrt(
      this.s * (this.s - this.a) * (this.s - this.b) * (this.s - this.c),
    );
  }

  getArea(): number {
    return Math.floor(this.area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error(`Circle radius must be > 0: radius=${this.radius}`);
    }
  }

  get area(): number {
    return Math.PI * Math.pow(this.radius, 2);
  }

  getArea(): number {
    return Math.floor(this.area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error(`Rectangle dimensions must be > 0: width=${this.width}, height=${this.height}`);
    }
  }

  get area(): number {
    return this.width * this.height;
  }


  getArea(): number {
    return Math.floor(this.area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  const { color, shape } = figure;

  const result = figure.getArea();

  return `A ${color} ${shape} - ${result}`;
}
