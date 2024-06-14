import Jersey from "../../../Icons/Jersey";

export default function PlayerDisplay() {
	return (
		<>
			<div className='grid grid-cols-7 '>
				<div className='col-span-4 flex justify-start space-x-3'>
					<div className='border-draft flex aspect-square w-[50px] items-center justify-center'>
						+
					</div>
					<div className='relative flex aspect-square w-[50px] items-center justify-center'>
						<Jersey />
						<div className='absolute bottom-0 w-full rounded-[4px] bg-[#52BE70]/80 text-center'>
							FOR
						</div>
					</div>
					<div className='flex flex-col'>
						<h1 className='font-bold'>
							O. Watkins
						</h1>
						<div className='flex items-center space-x-1 text-sm'>
							<div className='w-fit rounded-[4px] border border-[#52BE70] px-2 text-[#52BE70]'>
								May
							</div>
							<h1 className='whitespace-nowrap text-xs'>
								AstonVilla -{" "}
								<span className='text-[#A7ADB9]'>
									Brentford
								</span>
							</h1>
						</div>
					</div>
				</div>
				<h1 className='col-span-1 flex items-center'>
					5.84
				</h1>
				<h1 className='col-span-1 flex items-center'>
					197.9
				</h1>
				<h1 className='col-span-1 flex items-center text-[#52BE70]'>
					12.5M
				</h1>
			</div>
			<hr className='my-4 border-white/30' />
		</>
	);
}
