import { Container } from "./styled";
import { useDispatch, useSelector } from "react-redux";import { changeView, selectPopup, selectView, showPopup } from "../../newsSlice";
import { Button } from "../../../../common/Button";
import Popup from "../../../../common/Popup";

const Buttons = () => {
	const dispatch = useDispatch();
	const viewList = useSelector(selectView);
	const popup = useSelector(selectPopup);

	return (
		<Container>
			<Button
				onClick={() => dispatch(changeView())}
			>
				change view to {viewList ? "tiles" : "list"}
			</Button>
			<Button
				onClick={() => dispatch(showPopup("description"))}>
				show more info
			</Button>
			{popup["description"] && (
				<Popup
					title={"Difficulties and fun"}
					author={"Grzegorz Jendernal"}
					content={"When creating this project, the difficulty was coming up with the design. I prefer to work on projects" +
						" developed by professional graphic designers, which is why I focus on raw minimalism. I was also" +
						" disappointed with the API as it doesn't allow sharing apps on gh sites and I haven't had time to look for a better replacement. I gave up on the tests because I didn't want to imply them without understanding well how they work. I see that I need to expand my knowledge in this field. And when it comes to fun, the whole project gave me a lot of satisfaction, I'm glad that I could try my hand under the pressure of time."
					}
				/>)}
		</Container>
	);
};

export default Buttons;