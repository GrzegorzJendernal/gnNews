import { countries } from "../data/countries";
import { Country, Flag, Item, List, StyledNavLink, Wrapper } from "./styled";

const SideMenu = () => {
	return (
		<Wrapper>
			<List>
				{countries.map(({country, short, url}) => (
					<StyledNavLink
						to={`/country/${url}`}
						key={country}
					>
						<Item>
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