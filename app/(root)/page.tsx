"use client";

import Image from "next/image";

import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Hero } from "@/app/shared/components/Hero";
import { Navbar } from "@/app/shared/components/Navbar";
import { Footer } from "@/app/shared/components/Footer";
import { doneThingsData, howWeWorkData, swiperData } from "@/app/store/static";

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
	return (
		<main className="min-w-screen min-h-screen">
			{/* wrapper -- start */}

			<div className="flex flex-col gap-20">
				<motion.div
					initial="initial"
					whileInView="animate"
					variants={sectionVariants}
					transition={{ duration: 0.5, delay: 0.3 }}
					viewport={{ once: true }}
					className="">
					<Hero />
				</motion.div>
				<motion.div
					initial="initial"
					whileInView="animate"
					variants={sectionVariants}
					transition={{ duration: 0.5, delay: 0.3 }}
					viewport={{ once: true }}
					className="container grid grid-cols-3 gap-10">
					{doneThingsData.map((data, index) => (
						<div
							key={index}
							className="bg-green-700 text-white flex flex-col items-center text-center gap-4 py-8">
							<p className="text-5xl">{data.title}</p>
							<p
								className="text-2xl"
								dangerouslySetInnerHTML={{ __html: data.body }}></p>
						</div>
					))}
				</motion.div>

				<motion.div
					initial="initial"
					whileInView="animate"
					variants={sectionVariants}
					transition={{ duration: 0.5, delay: 0.3 }}
					viewport={{ once: true }}
					className="container h-[85vh] relative">
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
						<button className="bg-transparent text-black border-2 border-black hover:bg-black/80 hover:text-white py-4 px-10">
							Подробнее
						</button>
					</motion.div>
				</motion.div>

				<motion.div
					initial="initial"
					whileInView="animate"
					variants={sectionVariants}
					transition={{ duration: 0.5, delay: 0.3 }}
					viewport={{ once: true }}
					className="w-full h-screen bg-black/10">
					<div className="container h-full flex items-center">
						<div className="w-1/2 flex flex-col gap-10">
							<p className="text-3xl">Выполняем работу в срок</p>
							<p className="font-medium text-5xl">
								Мы являемся <span className="text-green-800">экспертами</span>{" "}
								<br /> в своём деле
							</p>
							<p className="text-2xl">
								Наши знания и опыт обеспечивают качество наших <br /> решений и
								услуг, отвечающее международным <br /> стандартам
							</p>

							<div className="flex gap-10 self-start">
								<button className="bg-slate-800/90 text-white hover:bg-slate-800/100 py-4 px-10">
									Услуги
								</button>
								<button className="bg-transparent text-black border-2 border-black hover:bg-black/80 hover:text-white py-4 px-10">
									Получить консультацию
								</button>
							</div>
						</div>
						<div className="w-1/2 flex flex-col gap-2">
							{howWeWorkData.map((data, index) => (
								<div
									key={index}
									className="bg-white w-full flex items-center shadow-lg shadow-black/10 gap-10 group transiton-all">
									<div className="flex items-center justify-center aspect-square h-24 bg-white group-hover:bg-green-800 *:text-black *:group-hover:text-white *:transiton-all transiton-all">
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
					className="container h-screen relative flex flex-col gap-14 py-14">
					<p className="font-semibold text-center text-5xl">
						Выполненные проекты
					</p>
					<div className="flex gap-[inherit]">
						{/* swiper -- start */}

						{/* <Swiper
							spaceBetween={50}
							slidesPerView={3}
							className="w-full h-full">
							{swiperData.map((data, index) => (
								<SwiperSlide
									key={index}
									className="h-96 w-1/2 bg-black/50 relative">
									<div className="absolute w-full h-full"></div>
									<div className="bg-white absolute bottom-0 right-0 text-3xl p-10 w-[90%]">
										{data.text}
									</div>
								</SwiperSlide>
							))}
						</Swiper> */}

						{swiperData.map((data, index) => (
							<div key={index} className="h-96 w-1/2 bg-black/10 relative">
								<div className="absolute w-full h-full"></div>
								<div className="bg-white absolute bottom-0 right-0 text-3xl p-10 w-[90%]">
									{data.text}
								</div>
							</div>
						))}

						{/* swiper -- end */}
					</div>
				</motion.div>
			</div>

			{/* wrapper -- end */}
		</main>
	);
}
