type ShapeType = 'triangle' | 'circle' | 'rectangle';
type ColorType = 'red' | 'green' | 'blue';

export interface Figure {
  shape: ShapeType;
  color: ColorType;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: ShapeType = 'triangle';

  color: ColorType;

  a: number;

  b: number;

  c: number;

  constructor(color: ColorType, a: number, b: number, c: number) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('All sides must be positive numbers.');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('These sides cannot form a triangle.');
    }

    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return area;
  }
}

// -------------------------------------------------------------

export class Circle implements Figure {
  shape: ShapeType = 'circle';

  color: ColorType;

  radius: number;

  constructor(color: ColorType, radius: number) {
    if (radius <= 0) {
      throw new Error('Radius must be a positive number.');
    }
    this.color = color;
    this.radius = radius;
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    // Округляем площадь до двух знаков после запятой, как требует тест
    return Math.floor(area * 100) / 100;
  }
}

// -------------------------------------------------------------

export class Rectangle implements Figure {
  shape: ShapeType = 'rectangle';

  color: ColorType;

  width: number;

  height: number;

  constructor(color: ColorType, width: number, height: number) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must be positive numbers.');
    }

    this.color = color;
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    const area = this.width * this.height;

    return area;
  }
}

// -------------------------------------------------------------

export function getInfo(figure: Figure): string {
  const area = figure.getArea();
  let roundedArea: number;

  if (figure.shape === 'rectangle') {
    // Round to the nearest whole number for rectangles
    roundedArea = Math.round(area);
  } else {
    // Round to two decimal places for other shapes
    roundedArea = Math.round(area * 100) / 100;
  }

  return `A ${figure.color} ${figure.shape} - ${roundedArea}`;
}
