import { CurrencyState, CurrencyAction, CurrencyActionTypes } from "../../types/currency";

const initialState: CurrencyState = {
	currencies: {},
	loading: false,
	error: null,
    current: "EUR",
};

export const currencyReducer = (state = initialState, action: CurrencyAction): CurrencyState => {
    switch(action.type) {
        case CurrencyActionTypes.FETCH_CURRENCIES:
			return {
				...state,
				loading: true,
			};
		case CurrencyActionTypes.FETCH_CURRENCIES_SUCCESS:
			return {
                ...state,
				loading: false,
				currencies: action.payload,
			};
		case CurrencyActionTypes.FETCH_CURRENCIES_ERROR:
			return {
				...state,
				error: action.payload,
				loading: false,
			};
        case CurrencyActionTypes.FETCH_CURRENT:
			return {
				...state,
                current: action.payload,
			};
		default:
			return state;
    }
}