
import { Outlet } from "react-router-dom"
import NavbarPanel from "./NavbarPanel"
import { Provider } from "react-redux"
import appStore from "../store/appStore"

const RootLayout = () => {
    return (
        <Provider store={appStore}>
            <NavbarPanel />
            <main>
                <Outlet />
            </main>
        </Provider>
    )
}

export default RootLayout