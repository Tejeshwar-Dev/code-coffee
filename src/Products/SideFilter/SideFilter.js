import { useState } from 'react';
import styledClass from './SideFilter.module.css';

export function CustomCheckbox({name, value, id, ...props}) {
    return (
        <div className='checkbox-group'>
            <input type='checkbox' name={name} id={id} value={value} {...props}/>
            <label htmlFor={id}>{value}</label>
        </div>
    );
}

const regionsList = ['Central America', 'Africa', 'South America', 'Asia Pacifica', 'Middle East'];

const SideFilter = () => {
    const [priceRange, setPriceRange] = useState({min: 0, max: 200});
    const [selectedRegions, setSelectedRegions] = useState([]);

    function updatePriceRange(event, rangeType) {
        let newValue = event.target.value;
        
        setPriceRange(prevValue => {
            if(newValue) {
                if(rangeType === 'min') {
                    if(newValue > prevValue.max) {
                        newValue = prevValue.max;
                    } else if((newValue <= Number(event.target.min)) || isNaN(newValue)) {
                        newValue = event.target.min;
                    }
                }
                
                if(rangeType === 'max') {
                    if(newValue < prevValue.min) {
                        newValue = prevValue.min;
                    } else if((newValue > event.target.max) || isNaN(newValue)) {
                        newValue = event.target.max;
                    }
                }
    
            }
            return {...prevValue, [rangeType]: parseInt(newValue)}
        });
    }

    function selectRegions(currRegion) {
        let  newSelections = [...selectedRegions];
        
        if(selectedRegions.includes(currRegion)) {
            newSelections = newSelections.filter(region => region !== currRegion);
        } else {
            newSelections.push(currRegion);
        }
        setSelectedRegions(newSelections);
    }

    function applyFilter() {
        
    }
    
    return (
        <div className={styledClass["side-filter-container"]}>
            <header>
                <h5>Filter</h5>
                <button>Reset</button>
                <button className='' onClick={applyFilter}>Apply</button>
            </header>
            <section className={`${styledClass['filter-section']} ${styledClass['price-section']}`}>
                <h5 className={styledClass['title']}>Price</h5>
                <input type='number' min={0} max={200} placeholder="Min Price" value={priceRange.min} onChange={(event) => updatePriceRange(event, 'min')}/>
                <input type='number' min={0} max={200} placeholder="Max Price" value={priceRange.max} onChange={(event) => updatePriceRange(event, 'max')}/>
            </section>

            <section className={`${styledClass['filter-section']} ${styledClass['price-section']}`}>
                <h5 className={styledClass['title']}>Region</h5>

                <div className={styledClass['checkbox-section']}>
                    {regionsList.map(region => {
                        const id = region.split(' ').join('_').toLowerCase();
                        return <CustomCheckbox key={id} id={id} name={'region'} value={region} checked={selectedRegions.includes(region)} onChange={() => selectRegions(region)}/>;
                    })}
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
