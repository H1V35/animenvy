export const roundFavorites = (favorites: number): string => {
  if (favorites < 1000) return favorites.toString();

  return (favorites / 1000).toFixed(2) + 'K';
};
