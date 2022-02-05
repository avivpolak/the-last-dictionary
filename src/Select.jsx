import React, { useRef } from "react";
// import "./Select.scss";
export default function Select({ options, onChange, availables }) {
    if (!availables) availables = [];

    const selectRef = useRef(null);
    if (options) {
        return (
            <select
                defaultValue={"random"}
                ref={selectRef}
                onClick={() => {
                    console.log(selectRef.current.value);

                    onChange(selectRef.current.value);
                }}
            >
                <option>random</option>
                {options?.map((option) => (
                    <option disabled={!availables.includes(option)}>
                        {option}
                    </option>
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
