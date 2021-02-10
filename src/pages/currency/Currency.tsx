import React, { useEffect } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CurrencyTable from "../../components/table/CurrencyTable";
import { useTypedSelector } from "../../components/hooks/useTypedSeletor";
import { useActions } from "../../components/hooks/useActions";

const useStyles = makeStyles((theme: any) => ({
	input: {
		marginRight: 10,
	},
    centered: {
        display: "flex",
        justifyContent: "center"
    }
}));

const Currency = () => {
    const classes = useStyles();

    const { currencies, error, loading, current } = useTypedSelector((state) => state.currency);
    const { fetchCurrencies, setCurrent } = useActions();

    useEffect(() => {
        fetchCurrencies();
    }, []);

    if (loading) {
        return <h1>Идет загрузка...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }

	return <div>
        <Container className={classes.centered}>
            <CurrencyTable current={current} currencies={currencies} />
        </Container>
    </div>;
};

export default Currency;
