import { Logo, Wrapper } from "./styled";
import Buttons from "./Buttons";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<Wrapper>
			<Link to={"/country/poland"}>
			<Logo
				src={"/src/common/assets/gnNews.png"}
				alt={"gnNews"}
			/>
			</Link>
			<Buttons/>
		</Wrapper>
	);
};

export default Header;