import Link from "next/link";
import { Navbar } from "@/app/shared/components/Navbar";
import SidebarProvider from "./shared/HOC/SidebarProvider";

export default function NotFound() {
	return (
		<SidebarProvider>
			<Navbar />
			<main className="min-w-screen flex flex-col">
				<div className="flex flex-col justify-center min-h-[70vh]">
					<div className="container text-center text-lg">
						Мы не смогли найти то, что вы искали. <br />
						Но вы можете перейти на{" "}
						<Link
							href={"/"}
							className="text-blue-500 underline underline-offset-4 cursor-pointer hover:text-blue-700">
							домашнюю страницу
						</Link>
					</div>
				</div>
			</main>
		</SidebarProvider>
	);
}
