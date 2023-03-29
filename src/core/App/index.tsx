import { GlobalStyle } from "./GlobalStyle";
import { Normalize } from "styled-normalize";
import Header from "../../common/Header";
import { Container } from "../../common/Container";
import SideMenu from "../../common/SideMenu";
import Content from "../../features/news/Content";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Footer from "../../common/Footer";

const App = () => {

	return (
		<Provider
		store={store}
		>
			<Normalize/>
			<GlobalStyle/>
			<HashRouter>
				<Header/>
				<Container>
					<SideMenu/>
					<Routes>
						<Route path={`/country/:country`} element={<Content/>}/>
						<Route path={"*"} element={<Navigate replace to="/country/poland" />} />
					</Routes>
				</Container>
				<Footer/>
			</HashRouter>
		</Provider>
	)
}

export default App
