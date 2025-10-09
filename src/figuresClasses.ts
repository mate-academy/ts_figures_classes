type Shapes = 'triangle' | 'circle' | 'rectangle';
type Colors = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shapes;
  color: Colors;
  getArea(): number;
}

const floor2 = (x: number): number => {
  return Math.floor(x * 100) / 100;
};

export class Triangle implements Figure {
  constructor(
    public color: Colors,
    private a: number,
    private b: number,
    private c: number,
  ) {
    const sides = [a, b, c];

    if (sides.some((side) => side <= 0)) {
      throw new Error(`Side lengths must be > 0: a = ${a}, b = ${b}, c = ${c}`);
    }

    const max = Math.max(...sides);
    const sum = a + b + c;

    if (max >= sum - max) {
      throw new Error(`Sides ${a}, ${b} and ${c} can't form a triangle`);
    }
  }

  getArea(): number {
    const s: number = (this.a + this.b + this.c) / 2;
    const area: number = Math.sqrt(
      s * (s - this.a) * (s - this.b) * (s - this.c),
    );

    return floor2(area);
  }

  readonly shape = 'triangle' as const;
}

export class Circle implements Figure {
  constructor(
    public color: Colors,
    private radius: number,
  ) {
    if (radius <= 0) {
      throw new Error(`Radius must be > 0: radius = ${radius}`);
    }
  }

  getArea(): number {
    const area: number = Math.pow(this.radius, 2) * Math.PI;

    return floor2(area);
  }

  readonly shape = 'circle' as const;
}

export class Rectangle implements Figure {
  constructor(
    public color: Colors,
    private width: number,
    private height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error(
        `Width and height must be > 0: width = ${width}, height = ${height}`,
      );
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return floor2(area);
  }

  readonly shape = 'rectangle' as const;
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
