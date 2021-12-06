import React from "react";

const Product = React.memo((props) => {
    return (
        <div className='col-xl-4 col-lg-6 col-md-6 px-lg-4 mt-5'>
            <div className='card h-100 mt-0'>
                <div className='card-body p-0 h-100'>
                    <div className='card-img'>
                        <img src={`/assets/images/${props.product.filename}`} className='img-fluid' />
                    </div>
                    <div className='card-content'>
                        <h6 className='prodName'>{props.product.name}</h6>
                        <p className='prodCate'>{props.product.category.map(catItem => <span key={catItem}>{catItem}</span>)}</p>
                        <div>
                            <p className='prodDes'>{props.product.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default Product;