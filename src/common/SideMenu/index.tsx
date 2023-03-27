import { countries } from "../data/countries";
import { Country, Flag, Item, List, StyledNavLink, Title, Wrapper } from "./styled";

const SideMenu = () => {
	return (
		<Wrapper>
			<Title>
				Select country:
			</Title>
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
		</Wrapper>
	);
};

export default SideMenu;