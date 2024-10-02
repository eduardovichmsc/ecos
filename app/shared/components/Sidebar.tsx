"use client";
import { isMenuOpenAtom } from "@/app/store/store";
import { Links } from "@/app/shared/components/Navbar";

import clsx from "clsx";
import { useAtom } from "jotai/react";
import { motion, AnimatePresence } from "framer-motion";
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
						"fixed right-0 top-0 h-full 2xl:w-[20%] bg-slate-800 text-white shadow-lg flex flex-col justify-between"
					)}
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					exit={{ opacity: 0, x: 200 }}
					transition={{ duration: 0.3 }}>
					<div className="flex flex-col p-16 gap-4">
						{Links.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								className="text-xl text-white/75 py-2 px-2 hover:underline underline-offset-4 hover:text-white transition">
								{link.title}
							</Link>
						))}
					</div>

					<div
						className="flex py-10 bg-black/10 hover:bg-black/30 transition justify-center text-lg cursor-pointer"
						onClick={toggleMenu}>
						Жабу
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};
