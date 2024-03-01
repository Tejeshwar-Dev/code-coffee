import styledClass from './Checkbox.module.css';

const CheckBox = ({name, value, id, ...props}) => {
    return (
        <div className={styledClass['checkbox-group']}>
            <input type='checkbox' name={name} id={id} value={value} {...props}/>
            <label htmlFor={id}>{value}</label>
        </div>
    );
}

export default CheckBox;