import React from 'react'

const TextareaComponent = ({ name, label, placeholder, value, onChange, id }) => {

    return (
        <div className='w-full mb-2'>
            <label className='font-medium text-white' htmlFor={id}>{label}</label>
            <textarea
                id={id}
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                className='w-full mt-1.5 px-3 py-2 bg-transparent text-white/80 rounded-lg border border-br-primary focus:outline-none focus:border-light-bg/50 placeholder::text-white/60'
                rows={4}
                cols={50}
                autoComplete='off'
            />
        </div>
    )
}

export default TextareaComponent