import React, { useEffect } from 'react';
import GlobalStyle from 'styles';
import { getHero } from 'utils/request';

function App() {
  useEffect(() => {
    getHero(1011334)
      .then(({ data }) => {
        const { results } = data.data;
        console.log(results);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div className="App">
      <GlobalStyle />
      <h1>App</h1>
    </div>
  );
}

export default App;
