import { countries } from "./countries";
import { Country, Flag, Item, List, StyledNavLink, Wrapper } from "./styled";

const SideMenu = () => {
	return (
		<Wrapper>
			<List>
				{countries.map(({country, short}) => (
					<StyledNavLink to={`/country/${country}`}>
					<Item key={country}>
						<Flag
							src={`https://flagcdn.com/${short}.svg`}
							alt={`${country}`}
					/>
						<Country>
							{country}
						</Country>
					</Item>
					</StyledNavLink>
				))}
			</List>
		</Wrapper>
	);
};

export default SideMenu;