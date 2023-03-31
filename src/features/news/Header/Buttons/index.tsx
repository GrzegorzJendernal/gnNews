import { Container } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage, changeView, selectLanguage, selectPopup, selectView, showPopup } from "../../newsSlice";
import { Button } from "../../../../common/Button";
import Popup from "../../../../common/Popup";
import { Flag } from "../../../../common/Flag";

const Buttons = () => {
	const dispatch = useDispatch();
	const viewList = useSelector(selectView);
	const popup = useSelector(selectPopup);
	const english = useSelector(selectLanguage);
	const language = !english ? "gb" : "pl";


	return (
		<Container>
			<Button
				onClick={() => dispatch(changeView())}
			>
				{english ? `change view to ${viewList ? "tiles" : "list"}` : `zmień widok na ${viewList ? "kafelki" : "listę"}`}
			</Button>
			<Button
				onClick={() => dispatch(showPopup("description"))}>
				{english ? "show more info" : "pokaż informacje"}
			</Button>
			<Button
				onClick={() => dispatch(changeLanguage())}
			>
				<Flag
					src={`https://flagcdn.com/${language}.svg`}
					alt={`${language}`}
				/>
			</Button>
			{popup["description"] && (
				<Popup
					title={english ? "Difficulties and fun" : "Trudności i frajda"}
					author={"Grzegorz Jendernal"}
					content={english
						? "When creating this project, the difficulty was coming up with the design. I prefer to work on projects" +
						" developed by professional graphic designers, which is why I focus on raw minimalism. I was also" +
						" disappointed with the API as it doesn't allow sharing apps on gh sites and I haven't had time to look for a better replacement. I gave up on the tests because I didn't want to imply them without understanding well how they work. I see that I need to expand my knowledge in this field. And when it comes to fun, the whole project gave me a lot of satisfaction, I'm glad that I could try my hand under the pressure of time."
						: "Podczas tworzenia tego projektu trudność polegała na wymyśleniu designu. Wolę pracować nad projektami" +
						" opracowanymi przez profesjonalnych grafików, dlatego postawiłem na surowy minimalizm. Byłem również" +
						" rozczarowany interfejsem API, ponieważ nie pozwala on udostępniać aplikacji na stronach gh, a nie" +
						" miałem czasu szukać lepszego zamiennika. Odpuściłem testy, ponieważ nie chciałem ich implikować nie rozumiejąc dobrze zasady ich działania. Widzę, że na tym polu muszę poszerzyć swoją wiedzę. A jeśli chodzi o zabawę to cały projekt dał mi dużo satysfakcji, cieszę się że mogłem spróbować swoich sił pod presją czasu."}
				/>)}
		</Container>
	);
};

export default Buttons;