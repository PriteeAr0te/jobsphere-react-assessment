import { useEffect, useRef } from "react";
import { capitalize } from "../../utils/filters";
import { IoClose } from "react-icons/io5";

const ActiveFilterDropdown = ({
    type,
    options,
    selectedValues,
    onChange,
    isOpen,
    onOpen,
    onClose,
    onClear 
}) => {
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isOpen && dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen, onClose]);

    const handleToggle = (e) => {
        e.preventDefault();
        e.stopPropagation();
        isOpen ? onClose() : onOpen(type);
    };

    const handleOptionClick = (option) => {
        onChange(type, option);
        onClose();
    };

    const handleClear = (e) => {
        e.stopPropagation();
        onClear(type);
        onClose();
    };

    return (
        <details className="relative group w-fit mr-2 mt-2" ref={dropdownRef} open={isOpen}>
            <summary
                className="py-1 pl-3 pr-7 bg-light-bg/10 rounded-full cursor-pointer list-none text-sm font-medium capitalize relative"
                onClick={handleToggle}
            >
                {capitalize(type)} ({selectedValues.length})

                <button
                    onClick={handleClear}
                    className="absolute top-1/2 right-2 -translate-y-1/2 text-white/70 hover:text-white focus:outline-none cursor-pointer"
                >
                    <IoClose size={16} />
                </button>
            </summary>

            <ul className="absolute mt-2 w-52 bg-primary rounded-md shadow-lg py-1 z-50 border border-br-primary text-white max-h-56 overflow-y-auto scrollable-container">
                {options.map((option) => {
                    const isSelected = selectedValues.includes(option);
                    return (
                        <li
                            key={option}
                            onClick={() => handleOptionClick(option)}
                            className={`w-full px-3 py-1.5 hover:bg-light-bg/10 cursor-pointer text-sm ${isSelected ? 'bg-light-bg/10 font-semibold text-white' : ''
                                }`}
                        >
                            {option}
                        </li>
                    );
                })}
            </ul>
        </details>
    );
};

export default ActiveFilterDropdown;
