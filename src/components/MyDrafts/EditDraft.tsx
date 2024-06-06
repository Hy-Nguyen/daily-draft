import { motion } from "framer-motion";
import Crown from "../../SVG/Crown";

export default function EditDraft() {
	return (
		<>
			<div className='col-span-2 h-[60%]'>
				<motion.button
					className='relative flex h-full w-full items-center justify-center rounded-[6px] bg-[#52BE70] px-3'
					whileHover={{
						scale: 1.1,
						boxShadow: "0px 0px 18px 0px #52BE70",
					}}
				>
					<p className='text-[16px] font-semibold text-[#141414]'>
						Edit Draft
					</p>
					<div className='absolute -right-2 -top-2 rotate-[30deg]'>
						<Crown />
					</div>
				</motion.button>
			</div>
		</>
	);
}
