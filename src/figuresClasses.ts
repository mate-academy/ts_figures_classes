type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'blue' | 'green';
export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {if ((a <= 0 || b <= 0 || c <= 0) || (a + b <= c) || (a + c <= b) || (b + c <= a))  {
    throw new Error('Sides must be positive numbers or they do not form a valid triangle.');
  }}
  public shape: Shape = 'triangle';
  public getArea(): number {
    const  s = (this.a + this.b + this.c) / 2;
    return Math.floor(Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)) * 100) / 100;
  }

}

export class Circle implements Figure {
  constructor(
    public color: Color,
    public radius: number,
  ) {if (radius <= 0)  {
    throw new Error('radius must be positive number.');
  }}
    public shape: Shape = 'circle';
    public getArea(): number {
      return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
    }
  }


export class Rectangle implements Figure {
constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {if (width <= 0 || height <= 0)  {
    throw new Error('Width and height must be positive numbers.');
  }}

  public shape: Shape = 'rectangle';
  public getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;

}
}
 export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
