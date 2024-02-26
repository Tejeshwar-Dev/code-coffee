
import styledClasses from './ProductCard.module.css';

function ProductCard({productImg, price, title, region, cardStyle}) {
    return (
        <div className={styledClasses["card-container"]} style={cardStyle}>
            <div className={styledClasses["card-header"]}>
                <img src={productImg} alt="prodduct_img"/>
            </div>
            <div className={styledClasses["card-header-divider"]}>
                <div className={styledClasses["card-divider-blank"]}></div>
                <p className={styledClasses["card-price"]}>${price}</p>
            </div>
            <div className={styledClasses["card-body"]}>
                <h3 className={styledClasses["card-title"]}>{title}</h3>
                <p className={styledClasses["card-subtitle"]}>{region}</p>
            </div>
        </div>
    )
}

export default ProductCard;