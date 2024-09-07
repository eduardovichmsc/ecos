"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import clsx from "clsx";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import { Hero } from "@/app/shared/components/Hero";
import { doneThingsData, howWeWorkData, swiperData } from "@/app/store/static";
import { Button } from "@/app/shared/ui/Button";

const sectionVariants = {
	initial: {
		opacity: 0,
		y: 50,
	},
	animate: {
		opacity: 1,
		y: 0,
	},
	exit: {
		opacity: 0,
		y: 50,
	},
};

export default function Home() {
	const [activeProperty, setActiveProperty] = useState(0);

	console.log(activeProperty);

	return (
		<main className="min-w-screen min-h-screen">
			{/* wrapper -- start */}

			<div className="flex flex-col gap-20">
				{/* hero */}
				<motion.div
					initial="initial"
					whileInView="animate"
					variants={sectionVariants}
					transition={{ duration: 0.5, delay: 0.3 }}
					viewport={{ once: true }}
					className="">
					<Hero />
				</motion.div>

				{/* under hero */}
				<motion.div
					initial="initial"
					whileInView="animate"
					variants={sectionVariants}
					transition={{ duration: 0.5, delay: 0.3 }}
					viewport={{ once: true }}
					className="container grid lg:grid-cols-3 grid-cols-1 lg:gap-10 gap-2">
					{doneThingsData.map((data, index) => (
						<div
							key={index}
							className="bg-green-800 text-white flex flex-col items-center text-center gap-4 lg:py-8 lg:px-0 py-6 px-8">
							<p className="text-5xl">{data.title}</p>
							<p
								className="text-2xl"
								dangerouslySetInnerHTML={{ __html: data.body }}></p>
						</div>
					))}
				</motion.div>

				{/* Собственные технологии */}
				<motion.div
					initial="initial"
					whileInView="animate"
					variants={sectionVariants}
					transition={{ duration: 0.5, delay: 0.3 }}
					viewport={{ once: true }}
					className="container h-[800px] relative">
					<div className="w-full h-full absolute z-10 top-0 left-0 bg-black/75">
						<Image src={"/medic.jpg"} fill className="object-cover" alt="" />
					</div>
					<div className="absolute w-full h-full z-20 bg-gradient-to-r from-transparent to-white/90"></div>

					<motion.div
						initial="initial"
						whileInView="animate"
						variants={sectionVariants}
						transition={{ duration: 0.5, delay: 0.3 }}
						viewport={{ once: true }}
						className="w-full h-full absolute z-30 flex flex-col items-end justify-center text-end gap-14 p-14">
						<p className="text-4xl">Собственные технологии</p>
						<p className="font-medium text-5xl">
							Оперативно принимаем
							<br />
							<span className="text-green-800">экологичные</span> решения
						</p>
						<p className="text-2xl">
							Разработали и применяем <br />
							&quot;Комплексную Технологию утилизаций <br />
							промышленных отходов&quot; <br /> включающую в себя механическую,{" "}
							<br />
							микробиологическую, а также термическую <br /> утилизацию отходов
							бурение и нефтедобычи
							<br /> в разных климатических зонах РФ
						</p>
						<Button secondary>Подробнее</Button>
					</motion.div>
				</motion.div>

				{/* Выполняем работу в срок */}
				<motion.div
					initial="initial"
					whileInView="animate"
					variants={sectionVariants}
					transition={{ duration: 0.5, delay: 0.3 }}
					viewport={{ once: true }}
					className="w-full h-[900px] bg-black/10 shadow-sm">
					<div className="container h-full flex items-center lg:justify-normal justify-center">
						<div className="lg:w-1/2 flex flex-col gap-10 lg:px-0 px-2 w-max">
							<p className="text-3xl">Выполняем работу в срок</p>
							<p className="font-medium text-5xl w-max">
								Мы являемся <span className="text-green-800">экспертами</span>{" "}
								<br /> в своём деле
							</p>
							<p className="text-2xl w-max">
								Наши знания и опыт обеспечивают качество наших <br /> решений и
								услуг, отвечающее международным <br /> стандартам
							</p>

							<div className="flex gap-10 self-start w-max">
								<Button primary>Услуги</Button>
								<Button secondary>Получить консультацию</Button>
							</div>
						</div>
						<div className="w-1/2 lg:flex flex-col gap-2 hidden">
							{howWeWorkData.map((data) => (
								<div
									key={data.id}
									className="bg-white w-full flex items-center shadow-lg shadow-black/10 gap-10 transition-all"
									onMouseEnter={() => setActiveProperty(data.id)}>
									<div
										className={clsx(
											"flex items-center justify-center aspect-square h-24 bg-white text-black transition-all",
											{
												"text-white bg-green-700": activeProperty === data.id,
											}
										)}>
										{data.icon}
									</div>
									<p className="text-2xl">{data.text}</p>
								</div>
							))}
						</div>
					</div>
				</motion.div>

				<motion.div
					initial="initial"
					whileInView="animate"
					variants={sectionVariants}
					transition={{ duration: 0.5, delay: 0.3 }}
					viewport={{ once: true }}
					className="container h-[800px] relative flex flex-col gap-14 py-14 lg:px-0 px-6">
					<p className="font-semibold text-center text-5xl">
						Выполненные проекты
					</p>
					<div className="flex gap-[inherit] w-full h-full">
						{/* swiper -- start */}

						<Swiper
							spaceBetween={50}
							slidesPerView={2}
							loop
							autoplay={{ delay: 2500, pauseOnMouseEnter: true }}
							modules={[Autoplay]}
							className="w-full h-96 relative">
							{swiperData.map((data, index) => (
								<SwiperSlide
									key={index}
									className="h-96 w-1/2 bg-black/10 relative">
									<div className="absolute w-full h-full">
										<Image
											src={data.img}
											alt={data.text}
											className="object-cover"
											fill
										/>
									</div>
									<div className="bg-white absolute bottom-0 right-0 text-3xl p-10 w-[90%]">
										{data.text}
									</div>
								</SwiperSlide>
							))}
						</Swiper>

						{/* swiper -- end */}
					</div>
				</motion.div>
			</div>

			{/* wrapper -- end */}
		</main>
	);
}
