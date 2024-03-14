type SearchItemSynopsisProps = {
  synopsis: string;
};

export function SortSynopsis({ synopsis }: SearchItemSynopsisProps) {
  const SYNOPSIS_MAX_LENGTH = 300;

  const sliceSynopsis = (synopsis: string) => {
    return `${synopsis.slice(0, SYNOPSIS_MAX_LENGTH)}...`;
  };

  return (
    <p className="searchItem__data--synopsis">
      {synopsis.length < SYNOPSIS_MAX_LENGTH ? (
        <>{synopsis}</>
      ) : (
        <>
          {sliceSynopsis(synopsis)}
          <span className="searchItem__data--synopis--more"> Read more»</span>
        </>
      )}
    </p>
  );
}
