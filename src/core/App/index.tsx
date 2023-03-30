import { GlobalStyle } from "./GlobalStyle";
import { Normalize } from "styled-normalize";
import Header from "../../features/news/Header";
import { Container } from "../../common/Container";
import SideMenu from "../../features/news/SideMenu";
import Content from "../../features/news/Content";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Footer from "../../features/news/Footer";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

const App = () => {

	return (
		<Provider
		store={store}
		>
			<ThemeProvider
				theme={theme}
			>
			<Normalize/>
			<GlobalStyle/>
			<HashRouter>
				<Header/>
				<Container>
					<SideMenu/>
					<Routes>
						<Route path={`/country/:country`} element={<Content/>}/>
						<Route path={"*"} element={<Navigate replace to={"/country/poland"} />} />
					</Routes>
				</Container>
				<Footer/>
			</HashRouter>
			</ThemeProvider>
		</Provider>
	);
};

export default App
