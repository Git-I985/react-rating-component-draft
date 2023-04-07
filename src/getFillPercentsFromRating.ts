type FillPercent = number;

/*
  return new Array(total).fill(0).map(() => {
    const i = rating >= 1 ? 1 : rating >= 0 ? rating : 0;
    rating -= i;
    return Math.round(i * 100);
  });

  // or 

  const full = Math.trunc(rating);
  const partial = Math.round((rating % 1) * 100);
  return new Array(total)
    .fill(100, 0, full)
    .fill(partial, full, full + 1)
    .fill(0, full + 1, total);
 */
export const getFillPercentsFromRating = (
  rating: number,
  total: number
): FillPercent[] => {
  const full = Math.trunc(rating);
  const partial = Math.round((rating % 1) * 100);
  return new Array(total)
    .fill(100, 0, full)
    .fill(partial, full, full + 1)
    .fill(0, full + 1, total);
};
