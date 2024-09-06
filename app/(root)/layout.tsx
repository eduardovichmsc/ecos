"use client";

import { useAtom, useAtomValue } from "jotai/react";
import Link from "next/link";
import clsx from "clsx";

import { Links, Navbar } from "@/app/shared/components/Navbar";
import { Footer } from "@/app/shared/components/Footer";
import { isMenuOpenAtom } from "@/app/store/store";
import { Sidebar } from "@/app/shared/components/Sidebard";
import SmoothScrollProvider from "../shared/HOC/SmoothScroll";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const [isMenuOpen, setIsMenuOpen] = useAtom(isMenuOpenAtom);

	return (
		<div className="relative">
			{/* Main content */}
			<div
				className={clsx(
					"transition-transform duration-300 ease-in-out",
					isMenuOpen && "-translate-x-48"
				)}>
				<Navbar />
				{children}
				<Footer />
			</div>

			{/* Hidden navbar */}
			<Sidebar />
		</div>
	);
}
