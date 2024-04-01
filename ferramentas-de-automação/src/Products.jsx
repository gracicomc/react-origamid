import React from 'react';
import Title from './Title';
import Product from './Product';

const Products = ({ product, description }) => {
  const produtos = [
    { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
    { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] }
  ];

  return (
    <section>
      <Title title={'Produtos'} />
      <div>
        {produtos.map((product) => (
          <Product key={product.nome} {...product} />
        ))}
      </div>
    </section>
  );
};

export default Products;
