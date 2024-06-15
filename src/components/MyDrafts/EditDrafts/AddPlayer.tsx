import { motion } from "framer-motion";
import Jersey from "../../../Icons/Jersey";

export default function AddPlayer() {
	return (
		<div className='relative'>
			<Jersey width='60' />
			<motion.div
				className='absolute -bottom-3 left-0 flex w-full items-center justify-center bg-gradient-to-b from-black to-slate-900'
				whileHover={{
					border: "1px solid #52BE70",
				}}
			>
				<h1 className=''>+</h1>
			</motion.div>
		</div>
	);
}
