"use client";
import { useEffect, useState } from "react";

export const useWindowSize = () => {
	const [values, setValues] = useState({
		width: 0,
		height: 0,
	});

	useEffect(() => {
		const handleResize = () => {
			if (!window) {
				return false;
			}
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
