import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	useDisclosure,
} from "@nextui-org/react";
import { motion } from "framer-motion";
import { useCallback, useState } from "react";
import Crown from "../../../../Icons/Crown";
import ParticipateTabs from "./ParticipateTabs";
import OverviewBody from "./Overview";
import FixturesBody from "./Fixtures";
import EntriesBody from "./Entries";
import PrizesBody from "./Prizes";

export default function Participate() {
	// modal functions
	const { isOpen, onOpen, onOpenChange } =
		useDisclosure();
	const [tab, setTab] = useState("Overview");

	const handleTabChange = useCallback(
		(newTab: string) => {
			if (newTab === "Overview") {
				return <OverviewBody />;
			} else if (newTab === "Fixtures") {
				return <FixturesBody />;
			} else if (newTab === "Entries") {
				return <EntriesBody />;
			} else {
				return <PrizesBody />;
			}
		},
		[]
	);
	return (
		<div id='button' className='w-1/6'>
			<motion.button
				className='relative flex h-[35px] w-fit items-center rounded-[6px] bg-[#52BE70] px-3'
				whileHover={{
					scale: 1.1,
					boxShadow: "0px 0px 18px 0px #52BE70",
				}}
				onClick={onOpen}
			>
				<p className='text-[16px] font-semibold text-[#141414]'>
					participate
				</p>
				<div className='absolute -right-2 -top-2 rotate-[30deg]'>
					<Crown />
				</div>
			</motion.button>
			<Modal
				isOpen={isOpen}
				onOpenChange={onOpenChange}
				size='3xl'
				backdrop='blur'
				placement='top'
				classNames={{
					base: "bg-[#121318] rounded-[8px]",
					closeButton:
						"hover:bg-inherit hover:text-white text-4xl text-[#515954] transition-all",
				}}
			>
				<ModalContent>
					{(onClose) => (
						<div className='flex w-full flex-col items-center'>
							<ModalHeader className='grid w-10/12 grid-cols-5 text-white'>
								<div className='flex items-center justify-start'>
									<p>icon</p>
								</div>
								<div className='col-span-3 flex flex-col'>
									<h1 className='text-[16px] font-semibold'>
										Tournament name
									</h1>
									<h1 className='text-[14px] font-normal text-[#52BE70]'>
										Game Week 01
									</h1>
								</div>
								<motion.button
									className='relative col-span-1 my-2 flex w-fit items-center rounded-[6px] bg-[#52BE70] px-3'
									whileHover={{
										scale: 1.1,
										boxShadow:
											"0px 0px 18px 0px #52BE70",
									}}
								>
									<p className='text-[16px] font-semibold text-[#141414]'>
										participate
									</p>
									<div className='absolute -right-2 -top-2 rotate-[30deg]'>
										<Crown />
									</div>
								</motion.button>
							</ModalHeader>
							<ModalBody className='grid w-10/12 grid-cols-4'>
								<ParticipateTabs
									text='Overview'
									activeTab={tab}
									setTab={setTab}
								/>
								<ParticipateTabs
									text='Fixtures'
									activeTab={tab}
									setTab={setTab}
								/>
								<ParticipateTabs
									text='Entries'
									activeTab={tab}
									setTab={setTab}
								/>
								<ParticipateTabs
									text='Prizes'
									activeTab={tab}
									setTab={setTab}
								/>
							</ModalBody>

							<div className='my-10 h-[1px] w-10/12 bg-white/10' />
							<ModalBody className='flex w-10/12 items-center text-[#A7ADB9]'>
								{handleTabChange(tab)}
							</ModalBody>
							{/* footer to act as spacer */}
							<ModalFooter />
						</div>
					)}
				</ModalContent>
			</Modal>
		</div>
	);
}
