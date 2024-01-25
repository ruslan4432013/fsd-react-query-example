export const mapCollection = <S, T>(
  elements: S[] | null | undefined,
  mapper: (element: S) => T,
  onError?: (e: Error) => void
): T[] => {
  if (!elements) {
    return []
  }
  try {
    return elements.map(mapper);
  } catch (e) {
    if  (e instanceof Error) {
      onError?.(e)
    }
    return []
  }
};
