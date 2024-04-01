import React from 'react';
import Header from './Header';
import Home from './Home';
import Products from './Products';

const App = () => {
  const { pathname } = window.location;
  const [ativo, setAtivo] = React.useState(false);
  const [dados, setDados] = React.useState({ nome: 'André', idade: '30' });

  const handleClick = () => {
    setAtivo(!ativo);
    setDados({ ...dados, faculdade: 'Possui Faculdade' });
  };

  let Component;
  if (pathname === '/produtos') {
    Component = Products;
  } else {
    Component = Home;
  }

  return (
    <div>
      <Header />
      <Component />
      <button onClick={handleClick}>{ativo ? 'Ativo' : 'Inativo'}</button>
      <p>{dados.nome}</p>
      <p>{dados.idade}</p>
      <p>{dados.faculdade}</p>
    </div>
  );
};

export default App;
