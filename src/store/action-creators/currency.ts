import axios from "axios";
import { Dispatch } from "redux";
import { CurrencyAction, CurrencyActionTypes } from "../../types/currency";

export const fetchCurrencies = () => {
	return async (dispatch: Dispatch<CurrencyAction>) => {
		try {
            dispatch({ type: CurrencyActionTypes.FETCH_CURRENCIES });
			const { data } = await axios.get("https://api.exchangeratesapi.io/latest");
            dispatch({ type: CurrencyActionTypes.FETCH_CURRENCIES_SUCCESS, payload: data.rates });
		} catch (e) {
			dispatch({
				type: CurrencyActionTypes.FETCH_CURRENCIES_ERROR,
				payload: `Произошла ошибка при загрузке todos. Ошибка: ${e}`,
			});
		}
	};
};

export const setCurrent = (current: string): CurrencyAction => {
    return {type: CurrencyActionTypes.FETCH_CURRENT, payload: current}
}