import { BookCopy, Bus, RefreshCcw, Trash, Trash2 } from "lucide-react";

export const doneThingsData = [
	{ title: "7 000 м³", body: "утилизирленген <br/> мұнай шламдары" },
	{ title: "3 000 м²", body: "утилизирленген <br/> бұрғылау қалдықтары" },
	{ title: "100 +", body: "көп жылдық <br/> серіктестер" },
];

export const howWeWorkData = [
	{ id: 0, text: "Бұрғылау қалдықтарын утилизациялау", icon: <Trash2 /> },
	{ id: 1, text: "Мұнай қалдықтарын утилизациялау", icon: <Trash /> },
	{ id: 2, text: "Ластанған жерлерді рекультивациялау", icon: <RefreshCcw /> },
	{ id: 3, text: "Экологиялық консалтинг", icon: <BookCopy /> },
	{ id: 4, text: "Транспорттық қызметтер", icon: <Bus /> },
];

export const swiperData = [
	{
		img: "/neft.jpg",
		text: "Мұнай қалдықтарын утилизациялау бойынша жұмыстарды орындау",
	},
	{
		img: "/othod.jpg",
		text: "Резервуарларды тазалау және қалдықтарды утилизациялау бойынша жұмыстарды орындау",
	},
];
