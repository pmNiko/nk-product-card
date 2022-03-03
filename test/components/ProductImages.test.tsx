import React from 'react';
import rendered from 'react-test-renderer';
import { ProductCard } from '../../src/components/ProductCard';
import { ProductImage } from '../../src/components/Productimage';
import { product1, product2 } from '../data/product';

describe('Test Product Images', () => {
  test('should display component with custom image', () => {
    const wrapper = rendered.create(
      <ProductCard product={product1}>
        {() => <ProductImage img="https://image.png" />}
      </ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('should display component with the image product', () => {
    const wrapper = rendered.create(
      <ProductCard product={product2}>{() => <ProductImage />}</ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
