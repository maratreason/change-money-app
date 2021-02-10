export interface Currency {
	[key: string]: string;
}

export interface CurrencyState {
	currencies: object | any;
	loading: boolean;
	error: string | null;
    current: string;
}

export enum CurrencyActionTypes {
	FETCH_CURRENCIES = "FETCH_CURRENCIES",
	FETCH_CURRENCIES_SUCCESS = "FETCH_CURRENCIES_SUCCESS",
	FETCH_CURRENCIES_ERROR = "FETCH_CURRENCIES_ERROR",
	FETCH_CURRENT = "FETCH_CURRENT",
}

interface FetchCurrencyAction {
	type: CurrencyActionTypes.FETCH_CURRENCIES;
}

interface FetchCurrencySuccessAction {
	type: CurrencyActionTypes.FETCH_CURRENCIES_SUCCESS;
	payload: object;
}

interface FetchCurrencyErrorAction {
	type: CurrencyActionTypes.FETCH_CURRENCIES_ERROR;
	payload: string;
}

interface FetchCurrentAction {
	type: CurrencyActionTypes.FETCH_CURRENT;
	payload: string;
}

export type CurrencyAction = FetchCurrencyAction | FetchCurrencySuccessAction | FetchCurrencyErrorAction | FetchCurrentAction;
