import Image from "next/image";
import { Button } from "@/app/shared/ui/Button";

export const Hero = () => {
	return (
		<div className="w-full md:h-full h-[75vh] container relative lg:pl-0 md:pl-6">
			<div className="h-full absolute z-20 md:w-full flex flex-col justify-center lg:gap-24 gap-10 md:pl-0 p-6">
				<div className="justify-center">
					<div className="font-semibold lg:text-6xl text-4xl">
						<p>Табиғатты аялайық,</p>
						<p>
							болашақты <span className="text-green-800">бірге </span>
							қалайық
						</p>
					</div>
				</div>
				<p className="lg:text-4xl text-2xl">
					Біз отын-энергетика секторында
					<br />
					қауіпті қалдықтарды басқару бойынша кешенді
					<br />
					технологиялық шешімдерді енгіземіз
				</p>
				<div className="flex lg:gap-10 gap-4 md:w-max w-full md:flex-row flex-col">
					<Button primary>Қызметтер</Button>
					<Button secondary>Кеңес алу</Button>
				</div>
			</div>
			<div className="md:bg-stone-500 bg-white ml-auto relative z-10 lg:w-[925px] md:w-[600px] w-full lg:h-[800px] md:h-[550px] h-full lg:mr-24">
				<Image
					src={"/hero.jpg"}
					fill
					className="object-cover md:opacity-100 opacity-75"
					style={{ transform: "scaleX(-1)" }}
					alt=""
				/>
			</div>
		</div>
	);
};
