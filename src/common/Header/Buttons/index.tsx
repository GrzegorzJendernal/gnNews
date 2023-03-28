import { Container } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { changeView, selectPopup, selectView, showPopup } from "../../../features/news/newsSlice";
import { Button } from "../../Button";
import Popup from "../../Popup";

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
			onClick={() => dispatch(showPopup("opis"))}>
				show more info
			</Button>
			{popup["opis"] && (
				<Popup
					title={"tytuł"}
					author={"Grzegorz Jendernal"}
					content={"Opis tego co ma być opisane"}
				/>)}
		</Container>
	);
};

export default Buttons;