import { motion } from "framer-motion";

export default function DropdownArrow({
	isOpen,
}: {
	isOpen: boolean;
}) {
	return (
		<motion.svg
			width='15'
			height='15'
			viewBox='0 0 11 7'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			animate={{ rotate: isOpen ? 180 : 0 }} // Rotate based on isOpen state
			transition={{ duration: 0.3 }}
		>
			<path
				d='M5.308 6.016L0 0.707999L0.708 0L5.308 4.6L9.908 0L10.616 0.707999L5.308 6.016Z'
				fill={isOpen ? "#FFFFFF" : "#5A5C6F"}
			/>
		</motion.svg>
	);
}
