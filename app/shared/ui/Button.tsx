import clsx from "clsx";
import { FC, ReactNode } from "react";

interface ButtonProps {
	children: ReactNode;
	className?: string;
}

interface PrimaryButtonProps extends ButtonProps {
	primary: boolean;
	secondary?: never;
}

interface SecondaryButtonProps extends ButtonProps {
	secondary: boolean;
	primary?: never;
}

export const Button: FC<PrimaryButtonProps | SecondaryButtonProps> = ({
	primary,
	secondary,
	children,
	className,
}) => {
	return (
		<button
			className={clsx(
				"py-4 px-10",
				{
					"bg-slate-800/90 text-white hover:bg-slate-800/100": primary === true,
					"bg-transparent text-black border-2 border-black hover:bg-black/80 hover:text-white":
						secondary === true,
				},
				className // передаем className как отдельный аргумент
			)}>
			{children}
		</button>
	);
};
