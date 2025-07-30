import React, { useRef, useEffect } from 'react';

const FilterDropdown = ({ filterKey, options, selectedOptions, onSelect }) => {
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                dropdownRef.current.removeAttribute('open');
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    const toggleOption = (option) => {
        if (selectedOptions.includes(option)) {
            onSelect(filterKey, selectedOptions.filter(item => item !== option));
        } else {
            onSelect(filterKey, [...selectedOptions, option]);
        }
    };

    return (
        <details className="relative group mt-2" ref={dropdownRef}>
            <summary className="py-1.5 px-3 rounded-lg cursor-pointer list-none bg-light-bg/10 w-fit">
                {filterKey.charAt(0).toUpperCase() + filterKey.slice(1)}
            </summary>
            <ul className="absolute left-0 mt-2 w-48 bg-primary rounded-md shadow-lg py-2 z-50 border border-br-primary text-white">
                {options.map((option) => (
                    <li
                        key={option}
                        onClick={() => toggleOption(option)}
                        className={`px-3 py-1.5 cursor-pointer hover:bg-light-bg/10 ${selectedOptions.includes(option) ? 'bg-light-bg/20' : ''}`}
                    >
                        {option}
                    </li>
                ))}
            </ul>
        </details>
    );
};

export default React.memo(FilterDropdown);