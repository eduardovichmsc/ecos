import Link from "next/link";
import { Footer } from "./shared/components/Footer";
import { Navbar } from "./shared/components/Navbar";

export default function NotFound() {
	return (
		<main className="min-h-screen min-w-screen flex flex-col justify-between">
			<Navbar />

			<div className="container text-center text-lg">
				Мы не смогли найти эту страницу. <br />
				Вы можете перейти на{" "}
				<Link
					href={"/"}
					className="text-blue-500 underline underline-offset-4 cursor-pointer hover:text-blue-700">
					домашнюю страницу
				</Link>
			</div>
			<Footer />
		</main>
	);
}
