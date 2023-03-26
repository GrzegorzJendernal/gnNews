import { Button, Container } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { changeView, selectView } from "../../../features/news/newsSlice";

const Buttons = () => {
	const dispatch = useDispatch();
	const viewList = useSelector(selectView);
	return (
		<Container>
			<Button
			onClick={() => dispatch(changeView())}
			>
				change view to {viewList ? "tiles" : "list"}
			</Button>
			<Button>
				show more info
			</Button>
		</Container>
	);
};

export default Buttons;