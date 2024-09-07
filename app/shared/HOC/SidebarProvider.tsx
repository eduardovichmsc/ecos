"use client";
import { Sidebar } from "@/app/shared/components/Sidebar";
import { isMenuOpenAtom } from "@/app/store/store";

import { ReactNode } from "react";
import { useAtomValue } from "jotai/react";
import clsx from "clsx";

export default function SidebarProvider({ children }: { children: ReactNode }) {
	const isMenuOpen = useAtomValue(isMenuOpenAtom);
	return (
		<div className="relative">
			{/* Main content */}
			<div
				className={clsx(
					"transition-transform duration-300 ease-in-out",
					isMenuOpen && "-translate-x-48"
				)}>
				{children}
			</div>

			{/* Hidden navbar */}
			<Sidebar />
		</div>
	);
}
