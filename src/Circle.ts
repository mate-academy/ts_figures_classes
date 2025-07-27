export class Circle implements Figure {
  // propriedades e construtor...

  getArea(): number {
    const area = Math.PI * this.radius ** 2;
    return parseFloat(area.toFixed(2));
  }
}
