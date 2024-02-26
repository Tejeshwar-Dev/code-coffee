import { useContext, useEffect, useRef, useState } from 'react';
import styledClass from './SideFilter.module.css';
import { ProductListContext } from '../Products';

export function CustomCheckbox({name, value, id, ...props}) {
    return (
        <div className={styledClass['checkbox-group']}>
            <input type='checkbox' name={name} id={id} value={value} {...props}/>
            <label htmlFor={id}>{value}</label>
        </div>
    );
}

const regionsList = ['Central America', 'Africa', 'South America', 'Asia Pacifica', 'Middle East'];
const grindOptions = ["Whole Bean", "Cafetiere", "Filter", "Espresso", "French press", "Pour Over"]

const SideFilter = () => {
    // const [productList, setProductList] = useState([]);
    const [priceRange, setPriceRange] = useState({min: 0, max: 50});
    const [selectedRegions, setSelectedRegions] = useState([]);
    const [selectedGrind, setSelectedGrind] = useState([]);
    const [rostLevel, setRoastLevel] = useState(3);
    const { setProductsList, filterList } = useContext(ProductListContext);
    // const filteredList = useRef([]);


    function updatePriceRange(event, rangeType) {
        let newValue = event.target.value;
        
        setPriceRange(prevValue => {
            if(newValue) {
                if(rangeType === 'min') {
                    if(newValue >= prevValue.max) {
                        newValue = prevValue.max;
                    } else if((newValue <= Number(event.target.min)) || isNaN(newValue)) {
                        newValue = event.target.min;
                    }
                }
                
                if(rangeType === 'max') {
                    if(newValue <= prevValue.min) {
                        newValue = event.target.min;
                    } else if((newValue >= event.target.max) || isNaN(newValue)) {
                        newValue = event.target.max;
                    }
                }
    
            }
            return {...prevValue, [rangeType]: parseInt(newValue)}
        });
    }

    // function selectRegions(currRegion) {
    //     let  newSelections = [...selectedRegions];
        
    //     if(selectedRegions.includes(currRegion)) {
    //         newSelections = newSelections.filter(region => region !== currRegion);
    //     } else {
    //         newSelections.push(currRegion);
    //     }
    //     setSelectedRegions(newSelections);
    // }

    function updateCheckboxState(currEle, state, stateSetterFn) {
        let newSelections = [...state];

        if(state.includes(currEle)) {
            newSelections = newSelections.filter(selection => selection !== currEle);
        } else {
            newSelections.push(currEle);
        }

        stateSetterFn(newSelections);
    }

    function updateRoastLevel(event) {
        setRoastLevel(event.target.value);
    }

    // function updatePrductList(result) {
    //     filteredList.current = result;
    // }

    // useEffect(() => {
    //     updatePrductList(filterList);
    // }, []);

    function applyFilter() {
        let productLists = filterList.filter(product => {
            if((priceRange.min <= product.price) && (priceRange.max >= product.price)) {
                return (selectedRegions.length > 0) ? selectedRegions.includes(product.region) : product
            }
        });

        setProductsList(productLists);
    }
    
    return (
        <div className={styledClass["side-filter-container"]}>
            {/* <header>
                <h5 className=''>Filter</h5>
                <button>Reset</button>
                <button className='' onClick={applyFilter}>Apply</button>
            </header> */}
            <section className={`${styledClass['filter-section']} ${styledClass['price-section']}`}>
                <h5 className={styledClass['title']}>Price</h5>
                <input type='number' min={0} max={50} placeholder="Min Price" value={priceRange.min} onChange={(event) => updatePriceRange(event, 'min')}/>
                <input type='number' min={0} max={50} placeholder="Max Price" value={priceRange.max} onChange={(event) => updatePriceRange(event, 'max')}/>
            </section>

            <section className={`${styledClass['filter-section']} ${styledClass['checkbox-section']}`}>
                <h5 className={styledClass['title']}>Region</h5>

                <div className={styledClass['checkbox-section']}>
                    {regionsList.map(region => {
                        const id = region.split(' ').join('_').toLowerCase();
                        return <CustomCheckbox key={id} id={id} name={'region'} value={region} checked={selectedRegions.includes(region)} onChange={() => updateCheckboxState(region, selectedRegions, setSelectedRegions)}/>;
                    })}
                </div>
            </section>
            
            <section className={`${styledClass['filter-section']} ${styledClass['checkbox-section']}`}>
                <h5 className={styledClass['title']}>Grind options</h5>

                <div className={styledClass['checkbox-section']}>
                    {grindOptions.map(grindOption => {
                        const id = grindOption.split(' ').join('_').toLowerCase();
                        return <CustomCheckbox key={id} id={id} name={'grind-option'} value={grindOption} checked={selectedGrind.includes(grindOption)} onChange={() => updateCheckboxState(grindOption, selectedGrind, setSelectedGrind)}/>;
                    })}
                </div>
            </section>

            <section className={`${styledClass['filter-section']} ${styledClass['price-section']}`}>
                <h5 className={styledClass['title']}>Roast level</h5>
                <div className={styledClass['form-group']}>
                    <input type="range" min="1" max="5" step={1} className="slider" id="myRange" value={rostLevel} onChange={updateRoastLevel}/>
                </div>
            </section>
            
            <footer>
                <button>Reset</button>
                <button className='' onClick={applyFilter}>Apply</button>
            </footer>
        </div>
    )
}

export default SideFilter;
