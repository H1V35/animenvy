type TrailerProps = {
  trailerUrl: string;
};

export function Trailer({ trailerUrl }: TrailerProps) {
  return (
    <iframe
      width="100%"
      height="auto"
      style={{ borderRadius: '8px', aspectRatio: '16/9' }}
      src={`${trailerUrl}&rel=0`}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      frameBorder={0}
      className="anime__iframe"
    ></iframe>
  );
}
