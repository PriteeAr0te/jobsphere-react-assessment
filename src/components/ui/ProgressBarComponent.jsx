import React from 'react'

const ProgressBarComponent = ({currentStep, steps}) => {
    return (
        <div className="w-full mb-6">
            <div className="w-full bg-gray-400 dark:bg-gray-700 rounded-full h-2">
                <div
                    className="bg-blue-500 dark:bg-light-bg h-2 rounded-full transition-all duration-300"
                    style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                />
            </div>
            <div className="text-sm text-white mt-2 text-center">
                Step {currentStep + 1} of {steps.length}: {steps[currentStep]}
            </div>
        </div>
    )
}

export default ProgressBarComponent