import MainButton from '../UI/my-buttons/MainButton';
import useMarvelService from '../../services/MarvelService';
import Spinner from '../UI/spinner/Spinner';
import { ErrorRandomChar } from '../errors/errorRandomChar/ErrorRandomChar';
import s from './PreviewRandom.module.scss';

import { useEffect, useState } from 'react';
import { useCallback } from 'react';

const PreviewRandom = () => {
  const {
    loading: isLoading,
    error,
    getCharacter,
    getRandomId,
    clearError,
  } = useMarvelService();

  const [charData, setCharData] = useState();

  useEffect(() => {
    getCharacter(getRandomId(1011334, 1010903)).then(info => setCharData(info));
  }, [getCharacter, getRandomId]);

  const getRandomHero = useCallback(() => {
    getCharacter(getRandomId(1011334, 1010903)).then(data => {
      if (error) {
        clearError();
      }
      setCharData(data);
    });
  }, [getCharacter, getRandomId, error, clearError]);

  const previewError = error ? <ErrorRandomChar /> : null;
  const loading = isLoading ? <Spinner /> : null;
  let content =
    !loading && !error && charData ? <RandomHero char={charData} /> : null;

  // if (error) {
  //   clearError();
  // }

  return (
    <section className={s.preview}>
      <div className={s.randomHero}>
        {loading}
        {previewError}
        {content}
      </div>
      <div className={s.tryRandom}>
        <div>
          <h2>Random character for today!</h2>
          <h3>Do you want to get more information?</h3>
        </div>
        <h4>Maybe choose another one</h4>
        <MainButton handleGetHero={getRandomHero}>TRY IT</MainButton>
      </div>
    </section>
  );
};

function RandomHero({ char }) {
  const maxDescrLength = 153;

  if (!char) return;
  const {
    name,
    description,
    thumbnail: { path, extension },
    urls: [homepage, wiki],
  } = char;

  return (
    <>
      <img
        src={`${path}.${extension}`}
        alt='Hero preview'
        className={
          !(
            path ===
            'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available'
          )
            ? s.heroThumbnail
            : s.imgNotFound
        }
      />
      <div className={s.heroDescr}>
        <h2>{name}</h2>
        <p>
          {description.length > maxDescrLength
            ? description.slice(0, maxDescrLength).concat('...')
            : description.concat('...')}
        </p>
        <div className={s.btnsBlock}>
          <MainButton path={homepage}>HOMEPAGE</MainButton>
          <MainButton path={wiki} color='#5C5C5C'>
            WIKI
          </MainButton>
        </div>
      </div>
    </>
  );
}
export default PreviewRandom;
