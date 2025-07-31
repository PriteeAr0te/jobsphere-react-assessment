import React from 'react';
import InputComponent from './InputComponent';
import { IoClose } from 'react-icons/io5';

const EducationComponent = ({ index, data, onChange, onRemove }) => {
    const handleFieldChange = (field, value) => {
        onChange(index, { ...data, [field]: value });
    };

    return (
        <div className="border border-br-primary/50 rounded-md p-4 relative bg-secondary-bg/30">
            {index > 0 && (
                <button
                    type="button"
                    className="absolute p-2 rounded-md hover:bg-secondary-bg/50 cursor-pointer top-2 right-2 text-red-400 hover:text-red-600"
                    onClick={() => onRemove(index)}
                >
                    <IoClose size={18}  className='cursor-pointer'/>
                </button>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <InputComponent
                    label="Degree"
                    id={`degree-${index}`}
                    placeholder="e.g., B.Tech, M.Sc"
                    name={`degree-${index}`}
                    value={data.degree}
                    onChange={(e) => handleFieldChange('degree', e.target.value)}
                />

                <InputComponent
                    label="Specialization"
                    placeholder="e.g., Computer Science, Mathematics"
                    name="specialization"
                    id={`specialization-${index}`}
                    value={data.specialization}
                    onChange={(e) => handleFieldChange('specialization', e.target.value)}
                />

                <InputComponent
                    label="Institution"
                    id={`institution-${index}`}
                    placeholder="e.g., XYZ University, ABC College"
                    name="institution"
                    value={data.institution}
                    onChange={(e) => handleFieldChange('institution', e.target.value)}
                />

                <InputComponent
                    label="Start Date"
                    id={`startDate-${index}`}
                    placeholder="YYYY-MM-DD"
                    name="startDate"
                    type="date"
                    value={data.startDate}
                    onChange={(e) => handleFieldChange('startDate', e.target.value)}
                />

                {!data.isPresent ? (
                    <InputComponent
                        label="End Date"
                        placeholder="YYYY-MM-DD or 'Present'"
                        name="endDate"
                        id={`endDate-${index}`}
                        type="date"
                        value={data.endDate}
                        onChange={(e) => handleFieldChange('endDate', e.target.value)}
                    />
                ) : (
                    <InputComponent
                        label="Expected Completion Year"
                        id={`expectedYear-${index}`}
                        placeholder="YYYY"
                        name="expectedYear"
                        type="text"
                        value={data.endDate}
                        onChange={(e) => handleFieldChange('endDate', e.target.value)}
                    />
                )}
            </div>

            <div className="mt-4">
                <label className="flex items-center gap-2 text-sm text-white">
                    <input
                        type="checkbox"
                        checked={data.isPresent}
                        onChange={(e) => handleFieldChange('isPresent', e.target.checked)}
                    />
                    Currently Pursuing
                </label>
            </div>
        </div>
    );
};

export default EducationComponent;
