import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from '@material-ui/core/Table';
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import { Currency } from "../../types/currency";
import { FormControl, MenuItem, Select } from "@material-ui/core";

const useStyles = makeStyles({
	table: {
		minWidth: 650,
	},
});

interface PropTypes {
	currencies: Currency;
	current: string
}

const CurrencyTable = ({ currencies, current }: PropTypes) => {
	const classes = useStyles();
	const keys: Array<string> = Object.keys(currencies);

	return (
		<TableContainer component={Paper}>
			<Table className={classes.table} size="small" aria-label="a dense table">
				<TableHead>
					<TableRow>
						<TableCell>Курсы валют</TableCell>
						<TableCell align="right">
							Текущая валюта

							<FormControl variant="outlined">
								<Select
									value={current}
									onChange={() => {}}
								>
									{keys.map((option: string) => {
										return (
											<MenuItem value={option} key={option}>
												{option}
											</MenuItem>
										);
									})}
								</Select>
							</FormControl>

						</TableCell>
						<TableCell align="right">Курс</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{
						keys.map(k => {
							return (
								<TableRow key={k}>
									<TableCell component="th" scope="row">
										{k}
									</TableCell>
									<TableCell align="right">1</TableCell>
									<TableCell align="right">{currencies[k]}</TableCell>
								</TableRow>
							)
						})
					}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default CurrencyTable;
