import { Logo, Wrapper } from "./styled";
import Buttons from "./Buttons";
import { Link } from "react-router-dom";
import gnNews from "../../../common/assets/gnNews.png";

const Header = () => (
		<Wrapper>
			<Link to={"/country/united-states"}>
				<Logo
					src={gnNews}
					alt={"gnNews"}
				/>
			</Link>
			<Buttons/>
		</Wrapper>
	);

export default Header;