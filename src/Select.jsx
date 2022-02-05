import React, { useRef } from "react";
// import "./Select.scss";
export default function Select({ options, onChange }) {

   
    const selectRef = useRef(null);
    if (options) { 
      
        return (
            <select
                ref={selectRef}
                defaultValue={options[0]}
                onChange={() => {
                    console.log(selectRef.current.value);
                    onChange(selectRef.current.value);
                }}
            >
                {options?.map((option) => (
                    <option className="title animated fadeIn">{option}</option>
                ))}
            </select>
        );
    } else {
        return (
            <select>
                <option>no options</option>
            </select>
        );
    }
}
