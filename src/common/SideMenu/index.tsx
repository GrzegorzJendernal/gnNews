import { countries } from "../funtions/countries";
import { Button, Country, Flag, Item, List, StyledNavLink, Title, Wrapper } from "./styled";
import { useState } from "react";

const SideMenu = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<Wrapper>
			<Button
			onClick={toggleMenu}>
			<Title>
				Select country:
			</Title>
			</Button>
			{isMenuOpen && (
			<List>
				{countries.map(({country, short, url}) => (
					<Item
						key={short}>
					<StyledNavLink
						to={`/country/${url}`}
					>
							<Flag
								src={`https://flagcdn.com/${short}.svg`}
								alt={`${country}`}
							/>
							<Country>
								{country}
							</Country>
					</StyledNavLink>
					</Item>
				))}
			</List>
				)}
		</Wrapper>
	);
};

export default SideMenu;