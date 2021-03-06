import React from 'react';
import { Link } from 'react-router-dom';
import { object } from 'prop-types';
import { httpsTransform } from 'utils/helpers';
import * as S from './styles';

export function HeroContainer({ data }) {
  return (
    <S.HeroWrapper data-testid="msh--hero-container">
      <S.HeroMainInfo>
        <article>
          <h2>{data.name}</h2>
          <p>{data.description || 'Nenhuma descrição fornecida.'}</p>
          <h2>Últimos lançamentos</h2>
          <S.List>
            {data.comics?.items.map(
              (item, index) =>
                index <= 9 && (
                  <li data-testid={`${item.name}--${index}`} key={item.resourceURI}>
                    {item.name}
                  </li>
                )
            )}
          </S.List>
          <Link data-testid="msh--back-to-home" to="/">Voltar para a página inicial</Link>
        </article>
        <article>
          {data.thumbnail && (
            <S.HeroImage
              src={`${httpsTransform(data.thumbnail?.path)}.${data.thumbnail?.extension}`}
              alt={data.name}
            />
          )}
        </article>
      </S.HeroMainInfo>
    </S.HeroWrapper>
  );
}

HeroContainer.propTypes = {
  data: object.isRequired,
};
