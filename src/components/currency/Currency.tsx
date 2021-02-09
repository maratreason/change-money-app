import React, { useState, useEffect } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import CurrencyTable from "../table/CurrencyTable";

const useStyles = makeStyles((theme: any) => ({
	input: {
		marginRight: 10,
	},
    centered: {
        display: "flex",
        justifyContent: "center"
    }
}));

const BASE_URL = "https://api.exchangeratesapi.io/latest";

const Currency = () => {
    const classes = useStyles();

    const [currencies, setCurrencies] = useState<Array<any>>([]);

    useEffect(() => {
        axios.get(`${BASE_URL}`)
			.then((res) => {
				setCurrencies(res.data.rates);
			});
    }, []);

	return <div>
        <Container className={classes.centered}>
            <CurrencyTable currencies={currencies} />
        </Container>
    </div>;
};

export default Currency;
