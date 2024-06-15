import {
	AnimatePresence,
	motion,
} from "framer-motion";
import {
	useEffect,
	useRef,
	useState,
} from "react";
import DropdownArrow from "../../Icons/DropdownArrow";

interface DropdownFilterProps {
	selected: any;
	setSelected: React.Dispatch<
		React.SetStateAction<any>
	>;
	options: any[];
	label?: string;
	height?: string;
}

export default function DropdownFilter({
	selected,
	setSelected,
	options,
	label,
	height,
}: DropdownFilterProps) {
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef =
		useRef<HTMLDivElement>(null);

	const handleClickOutside = (
		event: MouseEvent
	) => {
		if (
			dropdownRef.current &&
			!dropdownRef.current.contains(
				event.target as Node
			)
		) {
			setIsOpen(false);
		}
	};

	useEffect(() => {
		document.addEventListener(
			"mousedown",
			handleClickOutside
		);
		return () => {
			document.removeEventListener(
				"mousedown",
				handleClickOutside
			);
		};
	}, []);
	return (
		<div
			ref={dropdownRef}
			className={`bg-draft border-draft relative flex h-[${height || 50}px] w-full items-center justify-start`}
		>
			<div
				className='flex w-full items-center justify-between p-4'
				onClick={() => setIsOpen(!isOpen)}
			>
				<h1 className='text-draft text-sm'>
					{label || ""}
				</h1>

				<div className='flex items-center space-x-3'>
					<h1>{selected ? selected : "All"}</h1>
					<DropdownArrow isOpen={isOpen} />
				</div>
			</div>
			<AnimatePresence>
				{isOpen && (
					<motion.div
						className='dropdown-content bg-draft border-draft absolute left-0 top-[60px] h-fit w-full space-y-2 overflow-hidden'
						initial={{ opacity: 0, height: 0 }}
						animate={{
							opacity: 1,
							height: "auto",
						}}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.3 }}
					>
						{options.map((option) => (
							<motion.div
								key={option}
								onClick={() => {
									setSelected(option);
									setIsOpen(false);
								}}
								className='flex items-center p-2'
								whileHover={{
									backgroundColor: "#FFFFFF1E",
								}}
							>
								<h1 className='w-full text-center text-lg'>
									{option}
								</h1>
							</motion.div>
						))}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
