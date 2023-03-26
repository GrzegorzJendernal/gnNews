import { countries } from "../data/countries";
import { Country, Flag, Item, List, StyledNavLink, Wrapper } from "./styled";
import { useDispatch } from "react-redux";
import { setCountry } from "../../features/news/newsSlice";

const SideMenu = () => {
const dispatch = useDispatch();
	return (
		<Wrapper>
			<List>
				{countries.map(({country, short, url}) => (
					<StyledNavLink
						to={`/country/${url}`}
						key={country}
						onClick={() => dispatch(setCountry(short))}
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