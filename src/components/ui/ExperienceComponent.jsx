import React from 'react';
import InputComponent from './InputComponent';
import { IoClose } from 'react-icons/io5';

const ExperienceComponent = ({ index, data, onChange, onRemove, errors}) => {
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
          <IoClose size={18} />
        </button>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <InputComponent
          label="Job Title"
          id={`jobTitle-${index}`}
          name='jobTitle'
          required={true}
          error={errors.jobTitle}
          placeholder="e.g. Software Engineer"
          value={data.jobTitle}
          onChange={(e) => handleFieldChange('jobTitle', e.target.value)}
        />

        <InputComponent
          label="Company Name"
          id={`companyName-${index}`}
          value={data.companyName}
          name='companyName'
          required={true}
          error={errors.companyName}
          onChange={(e) => handleFieldChange('companyName', e.target.value)}
        />

        <InputComponent
          label="Location"
          id={`location-${index}`}
          placeholder="City, State"
          required={true}
          error={errors.location}
          name='location'
          value={data.location}
          onChange={(e) => handleFieldChange('location', e.target.value)}
        />

        <InputComponent
          label="Start Date"
          id={`startDate-${index}`}
          type="date"
          required={true}
          error={errors.startDate}
          name='startDate'
          placeholder="YYYY-MM-DD"
          value={data.startDate}
          onChange={(e) => handleFieldChange('startDate', e.target.value)}
        />

        {!data.isPresent ? (
          <InputComponent
            label="End Date"
            id={`endDate-${index}`}
            type="date"
            placeholder="YYYY-MM-DD"
            required={true}
          error={errors.endDate}
            name='endDate'
            value={data.endDate}
            onChange={(e) => handleFieldChange('endDate', e.target.value)}
          />
        ) : (
          <InputComponent
            label="Expected End Year"
            id={`expectedYear-${index}`}
            placeholder="YYYY"
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
          Currently Working
        </label>
      </div>

      <div className="mt-4">
        <label className="text-sm font-medium text-white">Description</label>
        <textarea
          rows={4}
          className="w-full p-2 mt-1 text-sm bg-transparent border border-br-primary/50 rounded-md outline-none text-white"
          placeholder="Describe your responsibilities, projects, or achievements..."
          value={data.description}
          onChange={(e) => handleFieldChange('description', e.target.value)}
        />
      </div>
    </div>
  );
};

export default ExperienceComponent;
