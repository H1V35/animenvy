export const sliceSynopsis = (synopsis: string) => {
  if (synopsis.length < 500) return synopsis;

  return `${synopsis.slice(0, 500)}...`;
};
