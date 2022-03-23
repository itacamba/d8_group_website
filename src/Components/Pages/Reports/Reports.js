import React, { useEffect, useState } from 'react';
import PageHeading from '../../Shared/PageHeading/PageHeading';
import "./Reports.scss"
import ReportsImg from "../../../Images/reports-vector.png"

// Documentation Shopify SDK
// https://github.com/shopify/js-buy-sdk/#readme
// https://shopify.dev/api/storefront#development_frameworks_and_sdks

const Reports = ({client}) => {

    const [checkout, setCheckout ] = useState({})

    const productId = "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY2NDExNDY1OTM0NzI="

    useEffect(() => {   

        // create checkout
        client.checkout.create().then((res) => {
            setCheckout(res)
            fetchAllProducts(res);
        })
        
        // eslint-disable-next-line
    },[]);

    const handleClick = () => {
        window.open(checkout.webUrl)
    }

    const addVariantToCart = (checkout, id, quantity) => {
        const lineItemsToAdd = [{variantId: id, quantity: quantity}]
        const checkoutId = checkout.id
    
        return client.checkout.addLineItems(checkoutId, lineItemsToAdd).then(res => {
            setCheckout(res)
        });
    }

    const fetchAllProducts = (checkout) => {
        // fetch only desired product
        client.product.fetchAll().then((res) => {
            res.forEach((prod) => {
                if (prod.id === productId) {
                    addVariantToCart(checkout, prod.variants[0].id, 1)
                }
            })
        })
    }

    return (
        <div className='reports'>
            <PageHeading heading="Reports Shop" page="Reports"/>
            <div className="two-col">
                <div className="col">
                    <img src={ReportsImg} alt="d8 group reports" />
                </div>
                    <div className="col-info">
                        <h5>By Reeba Magulick</h5>
                        <h4>Wednesday, March 23, 2022</h4>
                        <h2>Top Federal Health Opportunities Pipeline</h2>
                        <p>
                            This detailed report contains over 100 carefully 
                            curated opportunities that will be coming up for 
                            bid in the Federal Health Space, across Defense 
                            Health Agency (DHA), Department of Veterans 
                            Affairs (VA) and Department of Health and Human 
                            Services (HHS)
                        </p>

                        <p><b><i>The button below will redirect you to our shopify store checkout.</i></b></p>
                        <a 
                        href="/" 
                        className='action-btn' 
                        onClick={() => handleClick()}
                        >
                            Buy Now!
                        </a>
                    </div>
                </div>
        </div>
    );
};

export default Reports;