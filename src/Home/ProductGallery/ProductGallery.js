import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import ProductCard from "../../Products/ProductCard/ProductCard";

export default function ProductGallery({products}) {
    return (
        <section className='home-products'>
            <h3 className='title'>Our Products</h3>

            {/* <div className='products-container'> */}
            <Swiper
                // className='new-product'
                modules={[Navigation]}
                slidesPerView={'auto'}
                spaceBetween={16}
                navigation={true}
                loop={true}
            >
                { products.map(val => 
                    <SwiperSlide key={val._id} style={{width: 'auto'}}>
                        <ProductCard title={val.name} region={val.region} price={val.price} productImg={val.image_url} key={val._id} /> 
                    </SwiperSlide>
                )
                }
            </Swiper>
            <button>View All</button>
            {/* </div> */}
        </section>
    )
}