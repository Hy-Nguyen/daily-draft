import { YellowBadge } from "../../Landing/GameDisplay/Tournament/Badges";
import SOLIcon from "../../ui/SOLIcon";
import TeamIcon from "../../ui/TeamIcon";
import { Tooltip } from "@nextui-org/react";

export default function EditDraftHero({
	title,
	date,
	team,
	prizePool,
	buyIn,
}: {
	title: string;
	date: string;
	team: string;
	prizePool: string;
	buyIn: string;
}) {
	return (
		<header
			id='hero'
			className='bg-hero flex h-[400px] w-full flex-col justify-start rounded-3xl p-8 text-white '
		>
			<div className='space-y-6'>
				<div
					id='cup-title'
					className='flex items-center space-x-3'
				>
					<img
						src='/Lobby/EURO.png'
						alt=''
						className='aspect-square w-[56px]'
					/>
					<h1 className='text-5xl font-semibold uppercase '>
						{title}
					</h1>
				</div>

				<div
					id='date'
					className='flex items-center text-2xl '
				>
					{date}
				</div>

				<div
					id='teams'
					className='flex items-center space-x-3'
				>
					<TeamIcon fill='52BE70' />
					<h1 className='text-base'>
						{team} Teams
					</h1>
				</div>

				<div
					id='prize-pool'
					className='flex items-center space-x-3'
				>
					<SOLIcon />
					<h1 className='text-base'>
						{prizePool} SOL Prize Pool
					</h1>
				</div>

				<div
					id='buy-in'
					className='flex items-center space-x-3'
				>
					<SOLIcon />
					<h1 className='text-base'>
						{buyIn} SOL Buy-In
					</h1>
				</div>

				<div
					id='info'
					className='flex items-center space-x-6 text-[#5A5C6F]'
				>
					<Tooltip
						classNames={{
							base: "w-full flex justify-center",
							content:
								"bg-[#1A1B23] border border-white/10 w-1/2 px-5 py-3",
						}}
						color='default'
						content={
							<div className='  text-white'>
								<h1 className='text-small mb-3 font-bold'>
									How to Play
								</h1>
								<p className='text-tiny'>
									Lorem ipsum dolor sit amet,
									consectetur adipisicing elit. Ex
									at minus maiores a molestias
									dolore illo.
								</p>
							</div>
						}
					>
						<p className='text-sm underline'>
							How to Play
						</p>
					</Tooltip>
					<Tooltip
						classNames={{
							base: "w-full flex justify-center",
							content:
								"bg-[#1A1B23] border border-white/10 w-1/2 px-5 py-3",
						}}
						color='default'
						content={
							<div className='  text-white'>
								<h1 className='text-small mb-3 font-bold'>
									Details
								</h1>
								<p className='text-tiny'>
									Lorem ipsum dolor sit amet,
									consectetur adipisicing elit. Ex
									at minus maiores a molestias
									dolore illo.
								</p>
							</div>
						}
					>
						<p className='text-sm underline'>
							Details
						</p>
					</Tooltip>
					<Tooltip
						classNames={{
							base: "w-full flex justify-center",
							content:
								"bg-[#1A1B23] border border-white/10 w-1/2 px-5 py-3",
						}}
						color='default'
						content={
							<div className='  text-white'>
								<h1 className='text-small mb-3 font-bold'>
									Scoring
								</h1>
								<p className='text-tiny'>
									Lorem ipsum dolor sit amet,
									consectetur adipisicing elit. Ex
									at minus maiores a molestias
									dolore illo.
								</p>
							</div>
						}
					>
						<p className='text-sm underline'>
							Scoring
						</p>
					</Tooltip>
					<YellowBadge />
				</div>
			</div>
		</header>
	);
}
