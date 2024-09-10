"use client";

import { useAtom } from "jotai";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

import { isMenuOpenAtom } from "@/app/store/store";

export const Links = [
	{ title: "О компаний", href: "/about" },
	{ title: "Услуги", href: "/services" },
	{ title: "Выполненные проекты", href: "/projects" },
	{ title: "Контакты", href: "/contacts" },
];

export const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useAtom(isMenuOpenAtom);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<nav className="flex items-center gap-10 container">
			<Link
				href={"/"}
				className="logo text-3xl lowercase font-medium relative 2xl:w-1/4 w-fit">
				<Image
					src={"/logo.png"}
					width={473}
					height={167}
					className="object-cover xl:w-[50%] w-[70%]"
					alt="logo"
				/>
			</Link>
			<div className="justify-end font-medium basis-[80%] gap-20 2xl:text-xl xl:text-lg md:text-sm lg:flex hidden">
				{Links.map((link, index) => (
					<Link
						key={index}
						href={link.href}
						className="text-black/70 hover:text-black/100 transition">
						{link.title}
					</Link>
				))}
			</div>
			<div className="gap-4 lg:flex hidden">
				<Link
					href={"https://web.telegram.org"}
					className="xl:size-10 size-7 relative">
					<Image
						src={"/icons/telegram-64.png"}
						fill
						className="object-cover opacity-75 hover:opacity-100 transition"
						alt="telegram"
					/>
				</Link>
				<Link
					href={"https://web.telegram.org"}
					className="xl:size-10 size-7 relative">
					<Image
						src={"/icons/vk-64.png"}
						fill
						className="object-cover opacity-75 hover:opacity-100 transition"
						alt="vkontakte"
					/>
				</Link>
			</div>
			<div
				className="shrink-0 grow-0 md:h-24 h-20 aspect-square flex flex-col items-center justify-center bg-black/70 space-y-2 cursor-pointer z-30 ml-auto"
				onClick={toggleMenu}>
				{/* Menu icon - animated */}
				<div
					className={clsx(
						"h-[2px] w-[35%] bg-white transition-transform",
						isMenuOpen && "rotate-45 translate-y-2"
					)}></div>
				<div
					className={clsx(
						"h-[2px] w-[35%] bg-white transition-opacity",
						isMenuOpen && "opacity-0"
					)}></div>
				<div
					className={clsx(
						"h-[2px] w-[35%] bg-white transition-transform",
						isMenuOpen && "-rotate-45 translate-y-[-0.7rem]"
					)}></div>
			</div>
		</nav>
	);
};
