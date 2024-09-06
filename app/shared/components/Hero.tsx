import Image from "next/image";

export const Hero = () => {
	return (
		<div className="w-full h-full container relative">
			<div className="h-full absolute z-20 w-full flex flex-col justify-center gap-24">
				<div className="justify-center">
					<div className="font-semibold text-6xl">
						<p>Сохраняем природу,</p>
						<p>
							строим будущее <span className="text-green-800">вместе</span>
						</p>
					</div>
				</div>
				<p className="text-4xl">
					Внедряем комплексные технологические
					<br />
					решения по обращению с опасными
					<br />
					отходами в сфере ТЭК
				</p>
				<div className="flex gap-10 *:transition *:duration-150">
					<button className="bg-slate-800/90 text-white hover:bg-slate-800/100 py-4 px-10">
						Услуги
					</button>
					<button className="bg-transparent text-black border-2 border-black hover:bg-black/80 hover:text-white py-4 px-10">
						Получить консультацию
					</button>
				</div>
			</div>
			<div className="bg-stone-500 ml-auto relative z-10 w-[925px] h-[800px] mr-24">
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
