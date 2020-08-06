import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getHero } from 'utils/request';

const Hero = () => {
  const [hero, setHero] = useState({});
  let { id } = useParams();

  const getHeroData = (heroId) => {
    return getHero(heroId)
      .then(({ data }) => {
        const { results } = data.data;
        setHero(results[0]);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getHeroData(id);
  }, [id]);

  return (
    <div>
      <Link to="/">Voltar</Link>
      <h1>
        {hero.name}
      </h1>
    </div>
  );
};
export default Hero;
