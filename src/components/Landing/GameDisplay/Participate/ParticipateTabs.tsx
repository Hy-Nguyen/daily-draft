import { motion } from "framer-motion";

export default function ParticipateTabs({
	text,
	activeTab,
	setTab,
}: {
	text: string;
	activeTab: string;
	setTab: React.Dispatch<
		React.SetStateAction<string>
	>;
}) {
	const active = text === activeTab;
	console.log(text);
	console.log(activeTab);
	return (
		<motion.button
			className={`flex h-[30px] w-full items-center justify-center rounded-[6px] border bg-[#1B1D28] ${active ? "game-filter-glow border-[#52BE70]" : "border-white/5"}`}
			onClick={() => setTab(text)}
			whileHover={{ borderColor: "#52BE70" }}
			animate={{
				borderColor: active
					? "#52BE70"
					: "rgba(255, 255, 255, 0.05)",
			}}
			transition={{ duration: 0.3 }}
		>
			<motion.p
				className={`text-center text-[10px] font-semibold ${active ? "text-[#52BE70]" : "text-[#5A5C6F]"}`}
				animate={{
					color: active ? "#52BE70" : "#5A5C6F",
				}}
				transition={{ duration: 0.3 }}
			>
				{text}
			</motion.p>
		</motion.button>
	);
}