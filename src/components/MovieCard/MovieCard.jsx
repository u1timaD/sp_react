import styles from './MovieCard.module.css';
import likeIcon from '/src/assets/like-icon.svg';
import BookmarkIcon from '/src/assets/bookmark-icon.svg';
import { useState } from 'react';

const MovieCard = ({ item }) => {
  const [favorite, SetFavorite] = useState(false);

  const handleClickFavorite = () => {
    SetFavorite((prev) => !prev);
  };

  const { title, poster, rating } = item;
  return (
    <li className={styles.card}>
      <div className={styles.shadow} />
      <div className={styles.cardWrapper}>
        <div className={styles.ratingWrapper}>
          <span className={styles.rating}>{rating}</span>
        </div>
        <div className={styles.posterWrapper}>
          <img className={styles.poster} src={poster} alt={title} />
          <img className={styles.posterBack} src={poster} alt={title} />
        </div>
        <div className={styles.titleWrapper}>
          <h2 className={styles.title}>{title}</h2>
          <div className={styles.favoriteWrapper} onClick={handleClickFavorite}>
            <img
              className={styles.favoriteIcon}
              src={favorite ? BookmarkIcon : likeIcon}
              width={24}
              height={24}
              alt="иконка избранного"
            />

            <button
              className={styles.favoriteBtn}
              style={{ color: favorite ? '#37D8A7' : '#7b6ef6' }}
            >
              {favorite ? 'В избранном' : 'В избранное'}
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default MovieCard;
