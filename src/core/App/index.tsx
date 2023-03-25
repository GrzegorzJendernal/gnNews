import { GlobalStyle } from "./GlobalStyle";
import { Normalize } from "styled-normalize";
import Header from "../../common/Header";
import { Container } from "../../common/Container";
import SideMenu from "../../common/SideMenu";
import Content from "../../common/Content";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

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
				<Content/>
				{/*<Routes>*/}
				{/*	<Route path={`/country/${country}`} element={}/>*/}
				{/*</Routes>*/}
			</Container>
			</HashRouter>
		</Provider>
	)
}

export default App
