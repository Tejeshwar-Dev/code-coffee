import styledClass from './SideFilter.module.css';

const SideFilter = () => {
    return (
        <div className={styledClass["side-filter-container"]}>
            Side filter
            <section className={`${styledClass['filter-section']} ${styledClass['price-section']}`}>
                <h5 className={styledClass['title']}>Price</h5>
                <input type='number' max={100} min={0} placeholder="Min Price" />
                <input type='number' max={200} min={0} placeholder="Max Price" />
            </section>
            <section className={`${styledClass['filter-section']} ${styledClass['price-section']}`}>
                <h5 className={styledClass['title']}>Region</h5>
                <div className='checkbox-group'>
                    <input type='checkbox' name='region' id='coast' value='Central America' />
                    <input type='checkbox' name='region' id='coast' value='Africa' />
                    <input type='checkbox' name='region' id='coast' value='South America' />
                    <input type='checkbox' name='region' id='coast' value='Asia Pacific' />
                    <input type='checkbox' name='region' id='coast' value='Middle East' />
                </div>
            </section>
            <section className={`${styledClass['filter-section']} ${styledClass['price-section']}`}>
                <h5 className={styledClass['title']}>Roast level</h5>
                <div className='checkbox-group'>
                    <input type="range" min="1" max="5" step={1} className="slider" id="myRange" />
                </div>
            </section>
        </div>
    )
}

export default SideFilter;
