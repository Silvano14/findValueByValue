const result = []

const findValueByValue = (object = {}, valueToMatch = '') => {
    const keys = []
    if (isObject(object)) {
        const entries = Object.entries(object);
        for (let i = 0; i < entries.length; i += 1) {
            const [key, val] = entries[i];

            if (typeof val === 'string' && val.includes(valueToMatch)) {
                result.push(val)
            }

            if (Array.isArray(val)) {
                for (let k = 0; k < val.length; k += 1) {
                    if (isObject(val[k])) {
                        findNestedObject(val[k], valueToMatch);
                    }
                    if (typeof val[k] === 'string' && val[k].includes(valueToMatch)) {
                        result.push(val)
                    }
                }
            }

            if (isObject(val)) {
                findNestedObject(val, valueToMatch);
            }
        }
    }

    return null;
};
