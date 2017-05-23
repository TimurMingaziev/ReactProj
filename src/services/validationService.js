export function validateMinMaxValue(minValue, maxValue) {
    if (!minValue || !maxValue)
        return false;
    if (minValue >= maxValue)
        return false;
    return true;
}