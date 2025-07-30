import React from 'react'

const InputComponent = ({ id, name, value, placeholder, onChange, label }) => {
    return (
        <div className='w-full relative mb-2'>
            <label className='font-medium pb-1.5 text-white' htmlFor={id}>{label}</label>
            <input
                id={id}
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                className='w-full px-3 py-2 bg-transparent text-white/80 rounded-lg border border-br-primary focus:outline-none focus:border-light-bg/50 placeholder::text-white/60'
                type='text'
                autoComplete='off'
            />
        </div>
    )
}

export default InputComponent