'use strict';

// Типи для обмеження значень, щоб уникнути помилок
export type Shape = 'triangle' | 'circle' | 'rectangle';
export type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  public color: Color;

  private a: number;

  private b: number;

  private c: number;

  constructor(color: Color, a: number, b: number, c: number) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('All sides must be positive numbers');
    }

    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error("Sides can't form a triangle");
    }

    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
  }

  public getArea(): number {
    // Формула Герона
    const p: number = (this.a + this.b + this.c) / 2;
    const area: number = Math.sqrt(
      p * (p - this.a) * (p - this.b) * (p - this.c),
    );

    // Округлення до сотих вниз
    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  public color: Color;

  private radius: number;

  constructor(color: Color, radius: number) {
    if (radius <= 0) {
      throw new Error('Radius must be a positive number');
    }

    this.color = color;
    this.radius = radius;
  }

  public getArea(): number {
    // Площа кола: π * r^2
    const area: number = Math.PI * Math.pow(this.radius, 2);

    // Округлення до сотих вниз
    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Shape = 'rectangle';

  public color: Color;

  private width: number;

  private height: number;

  constructor(color: Color, width: number, height: number) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must be positive numbers');
    }

    this.color = color;
    this.width = width;
    this.height = height;
  }

  public getArea(): number {
    const area: number = this.width * this.height;

    // Округлення до сотих вниз
    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  // Використовуємо методи та властивості з інтерфейсу Figure
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
