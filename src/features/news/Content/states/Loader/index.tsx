import React from "react";
import { Spinner, SpinnerBox } from "./styled";

const Loader = () => (
		<SpinnerBox>
			<div>
				Please wait, news are being loaded...
			</div>
			<Spinner/>
		</SpinnerBox>
	);

export default Loader;
