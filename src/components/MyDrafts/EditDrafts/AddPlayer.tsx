import { motion } from "framer-motion";
import Jersey from "../../../Icons/Jersey";

export default function AddPlayer() {
	return (
		<div className='flex flex-col'>
			<Jersey width='70' />
			<motion.button
				className='-mt-[15px] flex w-full items-center justify-center bg-gradient-to-b from-black to-slate-900'
				initial={{
					border: "1px solid #000",
				}}
				whileHover={{
					border: "1px solid #fff",
				}}
				onClick={() => alert("Add Player")}
			>
				<h1 className=''>+</h1>
			</motion.button>
		</div>
	);
}
