import { GlobalStyle } from "./GlobalStyle";
import { Normalize } from "styled-normalize";
import Header from "../../common/Header";
import { Container } from "../../common/Container";
import SideMenu from "../../common/SideMenu";

const App = () => {
	return (
		<>
		<Normalize/>
		<GlobalStyle/>
			<Header/>
			<Container>
				<SideMenu/>
			</Container>
		</>
	)
}

export default App
