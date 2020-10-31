
import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import Home from '../Pages/Home'
import Alkaram from '../Pages/Products'
import Products from '../Pages/Products'
import LogIn from '../Pages/LogIn'
import Cart from '../Pages/Cart'

function Routes() {
    return (
        <Switch>
            <Route path={"/"} exact component={Home} />
            <Route path={"/products"} exact component={Products} />
            <Route path={"/alkaram"} exact component={Alkaram} />
            <Route path={"/login"} exact component={LogIn} />
            <Route path={"/cart"} exact component={Cart} />
        </Switch>
    )
}
export default withRouter(Routes)