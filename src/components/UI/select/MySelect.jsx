import React from 'react';

const MySelect = ({options, defaultValue, value, onChange}) => { //принимает в качестве пропсов массив опций
    return (
        <select 
            value={value}
            onChange={event => onChange(event.target.value)}
        >
            <option disabled value="">{defaultValue}</option>
            {options.map(option =>    //итерируемся по массиву опций с помощью mapи для каждой опции отрисовываем html тег option и то, что мы поместим в поле достаём из name
                     <option key={option.value} value={option.value}> 
                        {option.name}
                    </option>
                )}
        </select>
    );
};

export default MySelect;