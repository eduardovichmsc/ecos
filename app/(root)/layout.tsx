// "use client";

// import { useAtomValue } from "jotai/react";
// import clsx from "clsx";

// import { Navbar } from "@/app/shared/components/Navbar";
// import { Footer } from "@/app/shared/components/Footer";
// import { isMenuOpenAtom } from "@/app/store/store";
// import { Sidebar } from "@/app/shared/components/Sidebard";

// export default function RootLayout({
// 	children,
// }: Readonly<{
// 	children: React.ReactNode;
// }>) {
// 	const isMenuOpen = useAtomValue(isMenuOpenAtom);

// 	return (
// 		<div className="relative">
// 			{/* Main content */}
// 			<div
// 				className={clsx(
// 					"transition-transform duration-300 ease-in-out",
// 					isMenuOpen && "-translate-x-48"
// 				)}>
// 				<Navbar />
// 				{children}
// 				<Footer />
// 			</div>

// 			{/* Hidden navbar */}
// 			<Sidebar />
// 		</div>
// 	);
// }

import { Navbar } from "@/app/shared/components/Navbar";
import { Footer } from "@/app/shared/components/Footer";
import SidebarProvider from "../shared/HOC/SidebarProvider";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<SidebarProvider>
			<Navbar />
			{children}
			<Footer />
		</SidebarProvider>
	);
}
