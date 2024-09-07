import Image from "next/image";
import { Button } from "@/app/shared/ui/Button";

export const Hero = () => {
	return (
		<div className="w-full h-full container relative lg:pl-0 pl-6">
			<div className="h-full absolute z-20 w-full flex flex-col justify-center lg:gap-24 gap-10">
				<div className="justify-center">
					<div className="font-semibold lg:text-6xl text-4xl">
						<p>Сохраняем природу,</p>
						<p>
							строим будущее <span className="text-green-800">вместе</span>
						</p>
					</div>
				</div>
				<p className="lg:text-4xl text-2xl">
					Внедряем комплексные технологические
					<br />
					решения по обращению с опасными
					<br />
					отходами в сфере ТЭК
				</p>
				<div className="flex lg:gap-10">
					<Button primary>Услуги</Button>
					<Button secondary>Получить консультацию</Button>
				</div>
			</div>
			<div className="bg-stone-500 ml-auto relative z-10 lg:w-[925px] md:w-[600px] w-[450px] lg:h-[800px] md:h-[550px] h-[350px] lg:mr-24">
				<Image
					src={"/hero.jpg"}
					fill
					className="object-cover"
					style={{ transform: "scaleX(-1)" }}
					alt=""
				/>
			</div>
		</div>
	);
};
