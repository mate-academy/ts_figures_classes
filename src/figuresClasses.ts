export abstract class Figure {
  constructor(public readonly color: string) {}

  abstract getArea(): number;
  abstract getPerimeter(): number;

  toString(): string {
    return `${this.constructor.name} (Color: ${this.color})`;
  }
}

export class Rectangle extends Figure {
  constructor(
    color: string,
    private readonly width: number,
    private readonly height: number,
  ) {
    super(color);
  }

  getArea(): number {
    return this.width * this.height;
  }

  getPerimeter(): number {
    return 2 * (this.width + this.height);
  }
}

export class Circle extends Figure {
  constructor(
    color: string,
    private readonly radius: number,
  ) {
    super(color);
  }

  getArea(): number {
    return Math.PI * this.radius ** 2;
  }

  getPerimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}

export class Triangle extends Figure {
  constructor(
    color: string,
    private readonly a: number,
    private readonly b: number,
    private readonly c: number,
  ) {
    super(color);

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('Invalid triangle sides');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
  }

  getPerimeter(): number {
    return this.a + this.b + this.c;
  }
}

export function getInfo(figure: Figure): string {
  const name = figure.toString();
  const area = figure.getArea().toFixed(2);
  const perimeter = figure.getPerimeter().toFixed(2);

  return `${name} | Area: ${area} | Perimeter: ${perimeter}`;
}
