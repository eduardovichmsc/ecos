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
