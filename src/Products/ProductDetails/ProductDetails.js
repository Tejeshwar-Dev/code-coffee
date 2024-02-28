import styledClass from './ProductDetails.module.css';

const ProductDetails = ({productInfo, onCloseModal}) => {
    return (
        <div className={styledClass['modal-container']} onClick={(evt) => onCloseModal(evt)}>
            <div className={styledClass["modal-main"]} onClick={(evt) => evt.stopPropagation()}>
                <button className="close" onClick={(evt) => onCloseModal(evt)}>Close</button>
                <main>
                    <img className={styledClass['product-image']} src={productInfo.image_url} alt='product_image' />

                    <h1 className={styledClass['modal-title']}>{productInfo.name}</h1>

                    <div className={styledClass['product-info']}>
                        <h4>Description</h4>
                        <p>{productInfo.description}</p>
                    </div>

                    <div className={styledClass['']}>
                        <p>Region: </p>
                        <p>Region: </p>
                        <p>Region: </p>
                    </div>

                </main>
                <footer>
                    <button className="">Add product to cart</button>
                </footer>
            </div>
        </div>
    )
}

export default ProductDetails;