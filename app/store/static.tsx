import { BookCopy, Bus, RefreshCcw, Trash, Trash2 } from "lucide-react";

export const doneThingsData = [
	{ title: "7 000 м³", body: "утилизированных <br/> нефтешламов" },
	{ title: "3 000 м²", body: "утилизированных <br/> буровых отходов" },
	{ title: "100 +", body: "многолетних <br/> партнёров в сфере" },
];

export const howWeWorkData = [
	{ id: 0, text: "Утилизация отходов бурения", icon: <Trash2 /> },
	{ id: 1, text: "Утилизация нефтесодержащих отходов", icon: <Trash /> },
	{ id: 2, text: "Рекультивация загрязненных земель", icon: <RefreshCcw /> },
	{ id: 3, text: "Экологический консталтинг", icon: <BookCopy /> },
	{ id: 4, text: "Транспортные услуги", icon: <Bus /> },
];

export const swiperData = [
	{
		img: "/neft.jpg",
		text: "Выполнение работ по утилизации нефтесодержащих отходов",
	},
	{
		img: "/othod.jpg",
		text: "Выполнение работ по зачистке резервуаров и утилизаций отходов",
	},
	{
		img: "/neft.jpg",
		text: "Выполнение работ по утилизации нефтесодержащих отходов",
	},
	{
		img: "/othod.jpg",
		text: "Выполнение работ по зачистке резервуаров и утилизаций отходов",
	},
];
