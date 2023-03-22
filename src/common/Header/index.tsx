import { Button, Icon, Logo, Wrapper } from "./styled";

const Header = () => {
	return (
		<Wrapper>
			<Logo
				src={"/src/assets/gnNews.png"}
				alt={"gnNews"}
			/>
			<Button>
				<Icon
					src={"/src/assets/list.svg"}
					alt={"change view to list"}
				/>
			</Button>
			<Button></Button>
		</Wrapper>
	);
};

export default Header;