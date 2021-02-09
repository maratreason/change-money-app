import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import { Container, IconButton, Typography } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme: any) => ({
	navigation: {
		marginBottom: 70,
	},
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
    anchor: {
        color: "#fff",
        textDecoration: "none"
    }
}));

const Navigation = () => {
	const classes = useStyles();

	return (
		<AppBar position="static" className={classes.navigation}>
			<Container>
				<Toolbar>
					<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
						<MenuIcon />
					</IconButton>
                    <NavLink className={classes.anchor} to={"/"}><Button color="inherit">Главная</Button></NavLink>
                    <NavLink className={classes.anchor} to={"/currency"}><Button color="inherit">Баланс валют</Button></NavLink>
					<Button color="inherit">Login</Button>
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export default Navigation;
