type CurrencyType = 'USD' | 'EUR' | 'GBP'

const CURRENCY: Record<CurrencyType, CurrencyType> = {
    USD: 'USD',
    EUR: 'EUR',
    GBP: 'GBP',
}

export { CurrencyType, CURRENCY }