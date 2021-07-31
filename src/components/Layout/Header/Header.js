import React from "react";
import classes from "./Header.module.css"
import mealsImage from "../../../assets/meals.jpg"
import HeaderCartBtn from '../HeaderCartBtn/HeaderCartBtn'

const Header = (props) => {
    return <React.Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCartBtn onClick={props.onShowCart} />
        </header>
        <div className={classes["main-image"]}>
            <img src={mealsImage} alt="a table with meals" />
        </div>
    </React.Fragment>
};

export default Header;