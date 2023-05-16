import React from "react"
import Budget from "./Budget"
import Categories from "./Categories"
import CategoriesList from "./CategoriesList"


const Setting = (props) => {

    return(
        <div>
            <Budget />
            <Categories />
            <CategoriesList />
        </div>
    )
}

export default Setting