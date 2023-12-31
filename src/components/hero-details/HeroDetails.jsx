import useMarvelService from '../../services/MarvelService';
import MainButton from '../UI/my-buttons/MainButton';
import Spinner from '../UI/spinner/Spinner';
import s from './HeroDetails.module.scss';
import { Link } from 'react-router-dom';
import { HeroDetailsTypes } from '../../PropTypes/PropTypes';
import { useEffect, useState } from 'react';

const HeroDetails = ({ char }) => {
  const { loading, getComics } = useMarvelService();
  const {
    name,
    description,
    thumbnail: { path, extension },
    urls: [homepage, wiki],
    id,
  } = char;
  const [comics, setComicsList] = useState(null);

  useEffect(() => {
    getComics(id).then(response => {
      setComicsList(response.data.results);
    });
  }, [id, getComics]);

  const spinner = loading && <Spinner />;
  return (
    <div className={s.heroDetails}>
      <div className={s.profileHeader}>
        <img
          src={`${path}.${extension}`}
          alt={`${name} avatar`}
          className={
            path ===
            'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available'
              ? s.imgNotFound
              : null
          }
        />
        <div>
          <h3>{name}</h3>
          <MainButton>HOMEPAGE</MainButton>
          <MainButton color='#5C5C5C'>WIKI</MainButton>
        </div>
      </div>
      <p className={s.profileDescr}>{description}</p>
      <div className={s.inComicsList}>
        <h2>Comics:</h2>
        {!loading ? (
          <ul>
            {comics ? (
              comics.map(comics => {
                return (
                  <Link to={`comics/${comics.id}`} key={comics.id}>
                    <li className={s.comicsListItem}>{comics.title}</li>
                  </Link>
                );
              })
            ) : (
              <li
                className={s.comicsList}
                style={{ paddingBottom: '8px', height: 'auto' }}
              >
                There is no comics to read about {name}. Maybe that hero
                appeared in rare episode...
              </li>
            )}
          </ul>
        ) : (
          spinner
        )}
      </div>
    </div>
  );
};

HeroDetails.proptypes = {
  id: HeroDetailsTypes.id,
};

export default HeroDetails;
