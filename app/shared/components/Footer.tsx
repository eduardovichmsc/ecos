import { LucideBookmark, Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const footerContacts = [
	{
		icon: <LucideBookmark />,
		text: "Москва, Центральный админстративный округ, улица Академика Королева, 12 корпус 5",
	},
	{
		icon: <Phone />,
		text: "8 (800) 000-00-00",
	},
	{
		icon: <Mail />,
		text: "ecoil.info@mail.ru",
	},
];

export const Footer = () => {
	return (
		<footer className="bg-neutral-700 w-full text-white py-10">
			<div className="container w-full h-full flex flex-col gap-10">
				<div className="flex">
					<div className="w-3/5">
						<Link href="/" className="w-1/4">
							<Image
								src={"/logo.png"}
								width={473}
								height={167}
								className="object-cover w-[20%] bg-white"
								alt="logo"
							/>
						</Link>
					</div>
					<div className="w-2/5 h-full flex flex-col gap-2">
						{footerContacts.map((data, index) => (
							<div key={index} className="text-xl flex items-center">
								<div className="aspect-square h-16 float-left bg-white/10 rounded-full mr-10 flex justify-center items-center">
									{data.icon}
								</div>
								<p>{data.text}</p>
							</div>
						))}
					</div>
				</div>

				<div className="w-full h-px bg-white/50"></div>

				<div className="italic">заспидранено за +-5 часов</div>
			</div>
		</footer>
	);
};
