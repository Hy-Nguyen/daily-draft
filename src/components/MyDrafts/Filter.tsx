import FilterItem from "./FilterItem";
import { motion } from "framer-motion";

export default function Filter({
	states,
	setStates,
}: {
	states: any[];
	setStates: any[];
}) {
	return (
		<>
			<form
				id='filters'
				className='h-full w-1/4 rounded-[8px] bg-[#1A1B23] px-6 py-4'
				onSubmit={(e) => e.preventDefault()}
			>
				<div
					id='filter-header'
					className='flex h-[50px] w-full items-center justify-between'
				>
					<h1 className='text-2xl'>Filters</h1>
					<motion.button
						id='reset-filters'
						type='reset'
						className='flex aspect-square w-[40px] items-center justify-center rounded-[6px] border border-white/10 bg-[#1B1D28]'
						whileHover={{
							scale: 1.05,
							boxShadow:
								"0 0 15px rgba(256, 256, 256, 0.5)",
						}}
					>
						<RefreshIcon />
					</motion.button>
				</div>
				<div className='mb-6 mt-4'>
					<hr
						style={{
							borderColor:
								"rgba(255, 255, 255, 0.1)",
						}}
					/>
				</div>
				<div
					id='filter-content'
					className='h-full w-full'
				>
					<FilterItem
						id='Sports'
						label='Sports'
						options={[
							"Football",
							"Basketball",
							"Baseball",
							"Hockey",
						]}
						selected={states[0]}
						setSelected={setStates[0]}
					/>
					<FilterItem
						id='Leagues'
						label='Leagues'
						options={[
							"UEFA Euro 2024",
							"UEFA Champions League",
							"Premier League",
						]}
						selected={states[1]}
						setSelected={setStates[1]}
					/>
					<FilterItem
						id='Duration'
						label='Duration'
						options={[
							"All Duration",
							"50M",
							"2H",
						]}
						selected={states[2]}
						setSelected={setStates[2]}
					/>
					<FilterItem
						id='Draft Types'
						label='Draft Types'
						options={[
							"All Types",
							"Type 1",
							"Type 2",
						]}
						selected={states[3]}
						setSelected={setStates[3]}
					/>
					<FilterItem
						id='Draft'
						label='Draft'
						options={[
							"All Drafts",
							"Drafts",
							"Drafts",
						]}
						selected={states[4]}
						setSelected={setStates[4]}
					/>
					<motion.button
						type='submit'
						className='my-2 h-[60px] w-full rounded-[6px] bg-[#52BE70] text-2xl font-semibold text-white'
						whileHover={{
							scale: 1.05,
							boxShadow:
								"0px 4px 8px 0px rgba(82, 190, 112, 0.2), 0px 6px 20px 0px rgba(82, 190, 112, 0.19)",
						}}
					>
						Apply Filters
					</motion.button>
				</div>
			</form>
		</>
	);
}

function RefreshIcon() {
	return (
		<motion.svg
			width='20'
			height='20'
			viewBox='0 0 12 12'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			whileHover={{
				rotate: 360,
				transition: { duration: 0.3 },
				fill: "#ffffff",
			}}
			initial={{
				fill: "#5A5C6F",
			}}
		>
			<motion.path d='M9.76667 2.23334C9.27327 1.73657 8.68641 1.34238 8.03994 1.07349C7.39347 0.804606 6.70017 0.666342 6.00001 0.666672C3.05334 0.666672 0.67334 3.05334 0.67334 6.00001C0.67334 8.94667 3.05334 11.3333 6.00001 11.3333C8.48667 11.3333 10.56 9.63334 11.1533 7.33334H9.76667C9.49205 8.11302 8.98224 8.78826 8.30757 9.2659C7.6329 9.74354 6.82664 10 6.00001 10C3.79334 10 2.00001 8.20667 2.00001 6.00001C2.00001 3.79334 3.79334 2.00001 6.00001 2.00001C7.10667 2.00001 8.09334 2.46001 8.81334 3.18667L6.66667 5.33334H11.3333V0.666672L9.76667 2.23334Z' />
		</motion.svg>
	);
}
