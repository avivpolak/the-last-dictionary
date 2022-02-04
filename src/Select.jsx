import React, { useRef } from "react";
// import "./Select.scss";
export default function Select({ options, onChange }) {
    const selectRef = useRef(null);
    return (
        <select ref={selectRef} onChange={()=>{onChange(selectRef.current.value)}}>
            {options?.map((option) => (
                <option className="title animated fadeIn">{option}</option>
            ))}
        </select>
    );
}
