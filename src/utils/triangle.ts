const getTrianglePerimetr = (a: number, b: number, c: number): number =>
  a + b + c;

export const getTriangleArea = (a: number, b: number, c: number): number => {
  const halfPerimetr: number = getTrianglePerimetr(a, b, c) / 2;

  const area = Math.sqrt(
    halfPerimetr * (halfPerimetr - a) * (halfPerimetr - b) * (halfPerimetr - c),
  );

  return area;
};

export const isTriangle = (a: number, b: number, c: number): boolean =>
  a + b > c && a + c > b && b + c > a;
