import {countries} from "../../../common/functions/countries";
import {
  Button,
  Country,
  Item,
  List,
  StyledNavLink,
  Title,
  Wrapper,
} from "./styled";
import {useState} from "react";
import {Flag} from "../../../common/Flag";

const SideMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Wrapper>
      <Button onClick={toggleMenu}>
        <Title>Select country</Title>
      </Button>
      {isMenuOpen && (
        <List>
          {countries.map(({country, short, url}) => (
            <Item key={short}>
              <StyledNavLink to={`/country/${url}`}>
                <Flag
                  src={`https://flagcdn.com/${short}.svg`}
                  alt={`${country}`}
                />
                <Country>{country}</Country>
              </StyledNavLink>
            </Item>
          ))}
        </List>
      )}
    </Wrapper>
  );
};

export default SideMenu;
