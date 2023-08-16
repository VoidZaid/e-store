import React, { useState, useEffect } from 'react';
import Icon from './Icon';
import Header from './Header';
import { getProductById } from '../services/fetcher';
import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';

const Product = styled.article`
    display: flex;
    width: 95%;
    flex-wrap: wrap;
    margin: 0 auto;
    padding: .5rem .5rem;
    box-sizing: border-box;
    border-radius: .5rem;
`;
const ProductTitle = styled.h2`
    font-size: 1.1rem;
`;
const ProductTitles = styled.h3`
    margin: .5rem 0 .5rem 0;
    font-size: 1rem;
`;
const ProductFigure = styled.figure`
    margin: 0;
    background-color: white;
`;
const ProductImage=styled.img`
    display: block;
    width: 40%;
    margin: 0 auto;
`;
const ProductSpec = styled.aside`
    width: 65%;
`;
const ProductSpecList = styled.ul`
    margin: 0;
    padding: 0;
`;
const ProductSpecListItems = styled.li`
    list-style: none;
    position: relative;
    padding-left: .5rem;
`;
const ProductFinance = styled.aside`
    width: 35%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
`;
const ProductFinancePrice = styled.div`
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--header);
`;
const ProductFinanceStock = styled.div`
    font-size: .9rem;
    line-height: 1.5rem;
    font-weight: 700;
`;
const ProductAction = styled.div`
    display: flex;
    flex-direction: column;
    gap: .3rem;
    margin-top: auto;
`;
const ProductActionFirstButton =styled.button`
    font-weight: 700;
    border: 0px solid;
    border-radius: .3rem;
    color: var(--light);
    background-color: var(--header);
    padding: .5rem 0 0 0;
    width: 6rem;
    margin-left: auto
`; 
const ProductActionLastButton =styled.button`
    font-weight: 700;
    border: 0px solid;
    border-radius: .3rem;
    color: var(--light);
    background-color: var(--bg-menu);
    padding: .5rem 0 0 0;
    width: 6rem;
    margin-left: auto
`;
const ProductDescription = styled.div`
    margin: 2rem 1rem 0 1rem;
    font-size: .9rem;

`;

const ProductDetail = () => {
    const [product, setProduct] = useState({errMessage: '', data: {specs:{dimensions:'', capacity:''}, features:[]}})
    const {productId} = useParams();

    // const {id, carId, title, productCode, image, price, sku, description, specs,features, stock} = product.data;

    useEffect(()=>{
        const fetchData = async ()=>{
            const productObject = await getProductById(productId);
            // console.log(productObject)
            setProduct(productObject);
        } 
        fetchData()
    },[productId]);

    const createMarkUp = ()=>{
        return { __html: product.data?.description }
    }


    return (
        <>
        <Header></Header>
        <Product>
            <ProductTitle>{product.data.title}</ProductTitle>
            <div>
                <ProductFigure>
                    <ProductImage src={`../assets/${product.data.image}`} alt={product.data.title} />
                </ProductFigure>
            </div>

            <ProductSpec>
                <div className='main__product__espec-dimension'>
                    <ProductTitles>Dimensions</ProductTitles>
                    <ProductSpecList>
                        {product.data.specs.dimensions.split("-").map((e,id) =>{
                            return <ProductSpecListItems key={id}><Icon className={'main__product__list-icon'} icon={"chevron_right"}/>{e}</ProductSpecListItems>
                        })}
                    </ProductSpecList>
                </div>
                {
                product.data.specs.capacity&&
                <div>
                    <ProductTitles>Capacity</ProductTitles>
                    <label>{product.data.specs.capacity}</label>
                </div>
                }

                <div>
                    {product.data.features&& <ProductTitles>Features</ProductTitles>}
                    <ProductSpecList>
                        {product.data.features?.map((e, id)=> {
                            return <ProductSpecListItems key={id}><Icon className={'main__product__list-icon'} icon={"chevron_right"}/>{e}</ProductSpecListItems>
                        })}
                    </ProductSpecList>
                </div>
            </ProductSpec>

            <ProductFinance>
                <ProductFinancePrice>
                    &pound; {product.data.price}
                </ProductFinancePrice>
                <ProductFinanceStock>
                    <label>Stock level: {product.data.stock}</label><br />
                    <label>Free delivery</label>
                </ProductFinanceStock>
                <ProductAction>
                    <ProductActionFirstButton>View product <Icon icon={'search'}/></ProductActionFirstButton>
                    <ProductActionLastButton>Add to basket <Icon icon={'shopping_cart'}/></ProductActionLastButton>
                </ProductAction>
            </ProductFinance>
            <ProductDescription dangerouslySetInnerHTML={createMarkUp()}>
            </ProductDescription>
        </Product>
        </>
    )
}

export default ProductDetail