import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from '../../services/moviesAPI';
import { List, Card, Image, Name } from './Cast.styled'
import { ReviewsSection } from '../Reviews/Reviews.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    getMovieCast(movieId).then(setCast).catch(console.log);
  }, [movieId]);

  return (
    <ReviewsSection>
      {cast && cast.length === 0 && (
        <p>We don't hane any cast for this movie</p>
      )}
      <List>
        {cast?.map(({ id, name, character, profile_path }) => (
          <Card key={`${character}${id}`}>
            <Image
              src={
                profile_path && `https://image.tmdb.org/t/p/w200${profile_path}`
              }
              alt=""
            />
            <Name>{name}</Name>
            <p>Character: {character}</p>
          </Card>
        ))}
      </List>
    </ReviewsSection>
  );
};

export default Cast;
