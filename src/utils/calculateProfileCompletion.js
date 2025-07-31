export const calculateProfileCompletion = (data) => {
    let filled = 0;
    let total = 0;

    const checkFields = (obj) => {
        for (const key in obj) {
            total++;
            const value = obj[key];
            if (
                typeof value === 'string' && value.trim() !== '' ||
                typeof value === 'boolean' ||
                Array.isArray(value) && value.length > 0
            ) {
                filled++;
            }
            else if (typeof value === 'object' && !Array.isArray(value) && value !== null) {
                checkFields(value);
            }
        }
    };

    checkFields(data);

    return Math.round((filled / total) * 100); // Returns percentage
};
