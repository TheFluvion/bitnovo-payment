export const truncateToTwoDecimals = (number: number) => {
    return Math.floor(number * 100) / 100;
};

export const formatNumberToLocal = (
    num: number,
    truncate: number = 2,
    truncateHasMinFraction: boolean = false
) => {
    const truncateNumber = truncateToTwoDecimals(num);

    if (!num) {
        return 0;
    }

    if (!truncateNumber) {
        if (typeof num !== 'number') {
            return num;
        }
        return num?.toFixed(truncate);
    }

    const hasDecimals = truncateHasMinFraction ? true : truncateNumber % 1 !== 0;
    return truncateNumber.toLocaleString('es-Ar', {
        minimumFractionDigits: hasDecimals ? truncate : 0,
        maximumFractionDigits: 2,
    });
};