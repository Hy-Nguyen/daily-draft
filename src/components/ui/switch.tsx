import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Switch() {
	const [isOn, setIsOn] = useState(false);

	const toggleSwitch = () => {
		setIsOn(!isOn);
	};

	return (
		<div
			className='flex items-center border border-white/5'
			style={{
				width: "40px",
				height: "20px",
				borderRadius: "5px",
				background: "#2B2D3D",
				display: "flex",

				padding: "2px",
				cursor: "pointer",
			}}
			onClick={toggleSwitch}
		>
			<motion.div
				className='h-[16px] w-[16px] rounded-[5px]  shadow-lg'
				layout
				transition={{
					type: "spring",
					stiffness: 700,
					damping: 30,
				}}
				style={{
					marginLeft: isOn ? "16px" : "0px",
					background: isOn ? "#F4B24E" : "#fff",
				}}
			/>
		</div>
	);
}
