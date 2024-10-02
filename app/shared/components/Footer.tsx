import { LucideBookmark, Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const footerContacts = [
	{
		icon: <LucideBookmark />,
		text: "Кызылорда, Мұстафа Шоқай көшесі, 21",
	},
	{
		icon: <Phone />,
		text: "8 (747) 500 21 42",
	},
	{
		icon: <Mail />,
		text: "contact@ecos.kz",
	},
];

export const Footer = () => {
	return (
		<footer className="bg-neutral-700 w-full text-white py-10 xl:lg-0 lg:px-4 px-6">
			<div className="container w-full h-full flex flex-col gap-10">
				<div className="flex md:flex-row flex-col md:gap-0 gap-10">
					<div className="md:w-3/5 w-full">
						<Link href="/" className="w-1/4">
							<Image
								src={"/logo.png"}
								width={473}
								height={167}
								className="bg-white object-cover md:w-[20%] w-[80%]"
								alt="logo"
							/>
						</Link>
					</div>
					<div className="md:w-2/5 h-full flex flex-col gap-2">
						{footerContacts.map((data, index) => (
							<div
								key={index}
								className="md:text-xl text-base flex items-center">
								<div className="aspect-square md:h-16 h-10 float-left bg-white/10 rounded-full mr-10 flex justify-center items-center">
									{data.icon}
								</div>
								<p>{data.text}</p>
							</div>
						))}
					</div>
				</div>

				<div className="w-full h-px bg-white/50"></div>

				<div className="italic">2024</div>
			</div>
		</footer>
	);
};
