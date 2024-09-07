"use client";

import { AnimatePresence, motion } from "framer-motion";

export default function Transition({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<AnimatePresence mode={"wait"}>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.75, delay: 0.1 }}>
				{children}
			</motion.div>
		</AnimatePresence>
	);
}
