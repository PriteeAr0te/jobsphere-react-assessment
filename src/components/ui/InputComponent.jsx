import React from 'react'

const InputComponent = ({ id, name, value, placeholder, onChange, label, required = false, error }) => {
    return (
        <div className='w-full relative mb-2'>
            <label className='font-medium text-white' htmlFor={id}>{label}</label>{required && <span className='text-red-500 pl-0.5'>*</span>}
            <input
                id={id}
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                required={required}
                className='w-full mt-1.5 px-3 py-2 bg-transparent text-white/80 rounded-lg border border-br-primary focus:outline-none focus:border-light-bg/50 placeholder::text-white/60'
                type='text'
                autoComplete='off'
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    )
}

export default InputComponent