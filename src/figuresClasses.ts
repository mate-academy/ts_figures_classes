import { ChildProcessWithoutNullStreams } from "child_process";

type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  private sideA: number;
  private sideB: number;
  private sideC: number;
  public shape: Shape;
  public color: Color;

  constructor(a: number, b: number, c: number, shape: Shape, color: Color) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('your error message');
    }

    const sides = [a, b, c].sort((x, y) => x - y);
    const longest = sides[2];
    const sumOfOthers = sides[0] + sides[1];

    if (longest >= sumOfOthers) {
      throw new Error('your error message');
    }

    this.sideA = a;
    this.sideB = b;
    this.sideC = c;
    this.shape = shape;
    this.color = color;
  }

  getArea(): number {
    const s = (this.sideA + this.sideB + this.sideC) / 2;
    const rawArea = Math.sqrt(s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC));

    return Math.floor(rawArea * 100) / 100;
  }
}

export class Circle implements Figure {
  private radius: number:
  public shape: Shape;
  public color: Color;

  constructor(r: number, shape: Shape, color: Color) {
    if (r <= 0) {
      throw new Error('your error message');
    }
    this.radius = r;
    this.shape = shape;
    this.color = color;
  }

  getArea(): number {
    const rawArea = Math.PI * this.radius * this.radius;

    return Math.floor(rawArea * 100) / 100;
  } 
}


export class Rectangle implements Figure {
  private width: number;
  private height: number;
  public shape: Shape;
  public color: Color;

  constructor(width: number, height: number, shape: Shape, color: Color) {
    if (width <= 0 || height <= 0) {
      throw new Error('your error message');
    }

    this.width = width;
    this.height = height;
    this.shape = shape;
    this.color = color;
  }

  getArea(): number {
    const Math.floor(rawArea * 100) / 100;
  }
}

export function getInfo(figure): string {

  const area = figure.getArea();
  const formattedColor = figure.color.charAt(0).toUpperCase() + figure.color.slice(1);
  const formattedShape = figure.shape;


  return `A ${formattedColor.toLowerCase()} ${formattedShape} - ${area}`;
}
