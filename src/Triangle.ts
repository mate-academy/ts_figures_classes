export interface Figure {
  color: string;
  shape: string;
  getArea(): number;
}

export class Triangle implements Figure {
  color: string;
  shape: string;
  sides: number[];

  constructor(color: string, sides: number[]) {
    this.color = color;
    this.shape = 'triangle';
    this.sides = sides;

    if (sides.length !== 3 || sides.some((s) => s <= 0)) {
      throw new Error('Os lados do triângulo devem ser três números positivos');
    }

    const [a, b, c] = sides;
    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('Invalid triangle sides');
    }
  }

  getArea(): number {
    const [a, b, c] = this.sides;
    const s = (a + b + c) / 2;
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return parseFloat(area.toFixed(2));
  }
}

export class Circle implements Figure {
  color: string;
  shape: string;
  radius: number;

  constructor(color: string, radius: number) {
    if (radius <= 0) {
      throw new Error('Radius must be greater than 0');
    }
    this.color = color;
    this.shape = 'circle';
    this.radius = radius;
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;
    return parseFloat(area.toFixed(2));
  }
}

export class Rectangle implements Figure {
  color: string;
  shape: string;
  width: number;
  height: number;

  constructor(color: string, width: number, height: number) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must be greater than 0');
    }
    this.color = color;
    this.shape = 'rectangle';
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return parseFloat((this.width * this.height).toFixed(2));
  }
}

export function getInfo(figure: Figure): string {
  const area = figure.getArea();
  // Se área for inteiro, mostrar sem casas decimais, se não, com 2 casas
  const areaStr = area % 1 === 0 ? area.toString() : area.toFixed(2);

  return `A ${figure.color} ${figure.shape} - ${areaStr}`;
}
