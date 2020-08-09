import React from 'react';
import { Link } from 'react-router-dom';
import { object } from 'prop-types';
import * as S from './styles';

const HeroContainer = ({ data }) => {
  return (
    <S.HeroWrapper>
      <S.HeroMainInfo>
        <article>
          <h1>{data.name}</h1>
          <p>{data.description || 'Nenhuma descrição fornecida.'}</p>
          <h2>Últimos lançamentos</h2>
          <S.List>
            {data.comics?.items.map(
              (item, index) => (index <= 9) && <li key={item.resourceURI}>{item.name}</li>
            )}
          </S.List>
          <Link to="/">Voltar para a página inicial</Link>
        </article>
        <article>
          {data.thumbnail && (
            <S.HeroImage
              src={`${data.thumbnail?.path}.${data.thumbnail?.extension}`}
              alt={data.name}
            />
          )}
        </article>
      </S.HeroMainInfo>
    </S.HeroWrapper>
  );
};

HeroContainer.propTypes = {
  data: object.isRequired,
};

export default HeroContainer;