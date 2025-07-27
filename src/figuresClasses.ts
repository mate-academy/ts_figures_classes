abstract class Shape {
  shape: string;
  color: string;

  constructor(shape: string, color: string) {
    this.shape = shape;
    this.color = color;
  }

  abstract getArea(): number;
}

export class Triangle extends Shape {
  a: number;
  b: number;
  c: number;

  constructor(color: string, a: number, b: number, c: number) {
    super('triangle', color);

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('All sides must be positive numbers');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('Invalid triangle sides');
    }

    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
    return Math.round(area * 100) / 100;
  }
}

export class Circle extends Shape {
  radius: number;

  constructor(color: string, radius: number) {
    super('circle', color);

    if (radius <= 0) {
      throw new Error('Radius must be a positive number');
    }

    this.radius = radius;
  }

  getArea(): number {
    const area = Math.PI * this.radius * this.radius;
    // Truncar para 2 casas decimais sem arredondar
    return Math.trunc(area * 100) / 100;
  }
}

export class Rectangle extends Shape {
  width: number;
  height: number;

  constructor(color: string, width: number, height: number) {
    super('rectangle', color);

    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must be positive numbers');
    }

    this.width = width;
    this.height = height;
  }

  getArea(): number {
    const area = this.width * this.height;
    return Math.round(area * 100) / 100;
  }
}

export function getInfo(shape: Shape): string {
  const area = shape.getArea();
  const areaStr = area % 1 === 0 ? area.toString() : area.toFixed(2);
  return `A ${shape.color} ${shape.shape} - ${areaStr}`;
}
