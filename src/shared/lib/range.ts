const baseRange = (start: number, end: number, step: number, isRight?: boolean): number[] => {
  let index = -1;
  let length = Math.max(Math.ceil((end - start) / (step || 1)), 0);
  const result = new Array(length);

  while (length--) {
    result[isRight ? length : ++index] = start;
    start += step;
  }

  return result;
};

export function range(start = 0, end?: number, step?: number, isRight?: boolean): number[] {
  if (end === undefined) {
    end = start;
    start = 0;
  }

  step = step ?? (start < end ? 1 : -1);
  return baseRange(start, end, step, isRight);
}
