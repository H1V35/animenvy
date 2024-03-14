import { ToggleButton } from '@/anime/components/ToggleButton';
import { Trailer } from '@/components/Trailer';
import { AnimeInfo } from '@/anime/components/AnimeInfo';
import type { Data } from '@/anime/interfaces/anime';

type AnimeDetailsProps = {
  anime: Data;
};

export function AnimeDetails({ anime }: AnimeDetailsProps) {
  return (
    <div className="anime">
      <div className="anime__container">
        <ToggleButton anime={anime} item="AnimeItem" />

        {anime.trailer.embed_url && <Trailer trailerUrl={anime.trailer.embed_url} />}

        <h2 className="anime__title">{anime.title_english || anime.title}</h2>

        <AnimeInfo anime={anime} />
      </div>
    </div>
  );
}
