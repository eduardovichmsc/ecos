import { useEffect, useState } from "react";

export const useWindowSize = () => {
	const [values, setValues] = useState({
		width: window.innerWidth,
		height: window.innerHeight,
	});

	useEffect(() => {
		const handleResize = () => {
			setValues({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		};

		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return values;
};
