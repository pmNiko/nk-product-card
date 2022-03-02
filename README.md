# nkDev-Product-Card

Este es un paquete de pruebas de despliegue en NPM

### nikoDev 

## Ejemplo 

```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'nkDev-product-card';
```


```
 <ProductCard
    product={product}
    initialValues={{
        count: 4,
        maxCount: 10,
    }}
>
    {({ count, maxCount, isMaxCountReached, increaseBy, reset }): JSX.Element => (
        <>
            <ProductImage />

            <ProductTitle />
            <ProductButtons />
        </>
    )}
</ProductCard>

```