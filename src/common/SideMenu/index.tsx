import { countries } from "./countries";
import { Flag, Item, List, Wrapper } from "./styled";

const SideMenu = () => {
	return (
		<Wrapper>
			<List>
				{countries.map(({country, short}) => (
					<Item key={country}>
						<Flag
							src={`https://flagcdn.com/${short}.svg`}
							alt={`${country}`}
					/>
						{country}
					</Item>
				))}
			</List>
		</Wrapper>
	);
};

export default SideMenu;