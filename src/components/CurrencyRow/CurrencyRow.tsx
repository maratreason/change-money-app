import React from "react";
import { Container, FormControl, MenuItem, Select, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: any) => ({
	input: {
		marginRight: 10,
	},
    centered: {
        display: "flex",
        justifyContent: "center"
    }
}));

const CurrencyRow = ({ currencyOptions, selectedCurrency, onChangeCurrency, amount, onChangeAmount }: any) => {
    const classes = useStyles();
	const value = selectedCurrency;

	return (
		<div>
			<Container className={classes.centered}>
				<TextField
					label={selectedCurrency}
					variant="outlined"
					type="number"
					className={classes.input}
					value={amount}
					onChange={onChangeAmount}
				/>
				<FormControl variant="outlined">
					<Select
						value={selectedCurrency}
						onChange={onChangeCurrency}
					>
						{currencyOptions.map((option: any) => {
							return (
								<MenuItem value={option} key={option}>
									{option}
								</MenuItem>
							);
						})}
					</Select>
				</FormControl>
			</Container>
		</div>
	);
};

export default CurrencyRow;
