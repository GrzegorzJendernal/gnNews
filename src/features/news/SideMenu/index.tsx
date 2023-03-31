import { countries } from "../../../common/functions/countries";
import { Button, Country, Item, List, StyledNavLink, Title, Wrapper } from "./styled";
import { useState } from "react";
import { Flag } from "../../../common/Flag";
import { useSelector } from "react-redux";
import { selectLanguage } from "../newsSlice";

const SideMenu = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const english = useSelector(selectLanguage);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<Wrapper>
			<Button
				onClick={toggleMenu}>
				<Title>
					{english ? "Select country" : "Wybierz kraj"}
				</Title>
			</Button>
			{isMenuOpen && (
				<List>
					{countries.map(({country, short, url, countryPl}) => (
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
									{english ? `${country}` : `${countryPl}`}
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