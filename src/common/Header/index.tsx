import { Logo, Wrapper } from "./styled";
import Buttons from "./Buttons";
import { Link } from "react-router-dom";
import gnNews from "../assets/gnNews.png";

const Header = () => {
	return (
		<Wrapper>
			<Link to={"/country/poland"}>
			<Logo
				src={gnNews}
				alt={"gnNews"}
			/>
			</Link>
			<Buttons/>
		</Wrapper>
	);
};

export default Header;