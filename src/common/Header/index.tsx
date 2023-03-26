import { Logo, Wrapper } from "./styled";
import Buttons from "./Buttons";

const Header = () => {
	return (
		<Wrapper>
			<Logo
				src={"/src/common/assets/gnNews.png"}
				alt={"gnNews"}
			/>
			<Buttons/>
		</Wrapper>
	);
};

export default Header;