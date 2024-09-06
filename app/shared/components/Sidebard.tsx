import { isMenuOpenAtom } from "@/app/store/store";
import clsx from "clsx";
import { useAtom } from "jotai/react";
import { motion, AnimatePresence } from "framer-motion";
import { Links } from "./Navbar";
import Link from "next/link";

export const Sidebar = () => {
	const [isMenuOpen, setIsMenuOpen] = useAtom(isMenuOpenAtom);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<AnimatePresence>
			{isMenuOpen && (
				<motion.div
					className={clsx(
						"fixed -right-7 top-0 h-full w-[410px] bg-slate-800 text-white shadow-lg flex flex-col justify-between"
					)}
					initial={{ opacity: 0, x: 20 }}
					animate={{ opacity: 1, x: 0 }}
					exit={{ opacity: 0, x: 20 }}
					transition={{ duration: 0.3, ease: "easeInOut" }}>
					<div className="flex flex-col p-16 gap-4">
						{Links.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								className="text-xl text-white/75 py-2 px-2 hover:underline hover:text-white transition">
								{link.title}
							</Link>
						))}
					</div>

					<div
						className="flex py-10 bg-black/10 hover:bg-black/30 transition justify-center text-lg cursor-pointer"
						onClick={toggleMenu}>
						Закрыть
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};
