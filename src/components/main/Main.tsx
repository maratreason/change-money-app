import React, { useEffect, useState } from "react";
import axios from "../../../node_modules/axios/index";
import CurrencyRow from "../CurrencyRow/CurrencyRow";
import "./Main.less";

const BASE_URL = "https://api.exchangeratesapi.io/latest";

const Main = () => {
	const [currencyOptions, setCurrencyOptions] = useState<Array<any>>([]);
	const [fromCurrency, setFromCurrency] = useState<Array<any> | any | null>([]);
	const [toCurrency, setToCurrency] = useState<Array<any> | any>(null);
	const [exchangeRate, setExchangeRate] = useState(0);
	const [amount, setAmount] = useState(1); // величина по умолчанию
	const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);

	let toAmount, fromAmount;
	if (amountInFromCurrency) { // если изменение в первом поле
		fromAmount = amount;
		toAmount = amount * exchangeRate;
	} else { // если изменение во втором поле
		toAmount = amount;
		fromAmount = amount / exchangeRate;
	}

	useEffect(() => {
		axios.get(BASE_URL).then((res) => {
			const firstCurrency = Object.keys(res.data.rates)[0];
			setCurrencyOptions([res.data.base, ...Object.keys(res.data.rates)]);
			setFromCurrency(res.data.base);
			setToCurrency(firstCurrency);
			setExchangeRate(res.data.rates[firstCurrency]);
		});
	}, []);

	useEffect(() => {
		if (fromCurrency != null && toCurrency != null) {
			axios.get(`${BASE_URL}?base=${fromCurrency}&symbols=${toCurrency}`)
			.then((res) => {
				setExchangeRate(res.data.rates[toCurrency]);
			});
		}
	}, [fromCurrency, toCurrency]);

	const handleFromAmountChange = (e: React.ChangeEvent<any>) => {
		setAmount(e.target.value);
		setAmountInFromCurrency(true);
	}

	const handleToAmountChange = (e: React.ChangeEvent<any>) => {
		setAmount(e.target.value);
		setAmountInFromCurrency(false);
	}

	return (
		<div className="Main">
			<CurrencyRow
				currencyOptions={currencyOptions}
				selectedCurrency={fromCurrency}
				onChangeCurrency={(e: React.ChangeEvent<any>): void => setFromCurrency(e.target.value)}
				amount={fromAmount}
				onChangeAmount={handleFromAmountChange}
			/>
			<div className="equals">=</div>
			<CurrencyRow
				currencyOptions={currencyOptions}
				selectedCurrency={toCurrency}
				onChangeCurrency={(e: React.ChangeEvent<any>): void => setToCurrency(e.target.value)}
				amount={toAmount}
				onChangeAmount={handleToAmountChange}
			/>
		</div>
	);
};

export default Main;
