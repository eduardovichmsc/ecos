"use client";
import { Sidebar } from "@/app/shared/components/Sidebar";
import { isMenuOpenAtom } from "@/app/store/store";

import { ReactNode } from "react";
import { useAtomValue } from "jotai/react";
import clsx from "clsx";
import { useWindowSize } from "@/app/hooks/useWindowSize";

export default function SidebarProvider({ children }: { children: ReactNode }) {
	const isMenuOpen = useAtomValue(isMenuOpenAtom);
	const values = useWindowSize();

	return (
		<div className="relative">
			{/* Main content */}
			<div
				className={clsx(
					"transition-transform duration-300 ease-in-out",
					isMenuOpen &&
						(values.width <= 600 ? "-translate-x-20" : "-translate-x-48")
				)}>
				{children}
			</div>

			{/* Hidden navbar */}
			<Sidebar />
		</div>
	);
}
