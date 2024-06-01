import { motion } from "framer-motion";
import Crown from "../../SVG/Crown";

/* eslint-disable jsx-a11y/img-redundant-alt */
export default function LobbyGameDisplay({
	matchName,
	tournamentName,
	durationTime,
	liveStatus,
	prizePool,
	poolTeams,
}: {
	matchName: string;
	tournamentName: string;
	durationTime: string;
	liveStatus: boolean;
	prizePool: number;
	poolTeams: number;
}) {
	return (
		<div
			className=' my-2 flex min-h-[70px] w-full 
			items-center rounded-[8px] border border-[#FFFFFF]/5 bg-[#1A1B23]'
		>
			<div
				id='Tournament'
				className='flex w-2/6 items-center '
			>
				<div
					id='images'
					className='ml-4 flex w-[14.5%] '
				>
					<TournamentImage />
					<TournamentImageRight />
				</div>
				<div
					id='title'
					className='ml-4 flex w-[43%] flex-col'
				>
					<p className='text-xs text-[#5A5C6F]'>
						{matchName}
					</p>
					<h1 className='m-0 text-lg uppercase'>
						{tournamentName}
					</h1>
				</div>
				<div
					id='badges'
					className="'ml-4 flex w-[43%]"
				>
					<GreenBadge time={durationTime} />
					<YellowBadge />
				</div>
			</div>
			<div id='timer' className='flex w-1/6 '>
				<div
					id='status'
					className='flex items-center justify-center'
				>
					<LiveStatus live={liveStatus} />
				</div>
				<div className='ml-4 flex items-center justify-center'>
					<h1 className='mr-4 font-light text-[#A7ADB9]'>
						View Details
					</h1>
					<DetailsArrow />
				</div>
			</div>
			<div
				id='duration'
				className='flex w-1/6 items-center'
			>
				<Duration time={durationTime} />
				<Duration2 text='GW3' alert={3} />
			</div>
			<div
				id='prize-pool'
				className='flex w-1/6 items-center'
			>
				<Amount amount={prizePool} />
				<Teams teams={poolTeams} />
			</div>
			<div id='button' className='w-1/6'>
				<Participate />
			</div>
		</div>
	);
}

// Tournament Components

function TournamentImage() {
	return (
		<div
			id='image'
			className=' flex h-3/5 w-3/5 items-center justify-center rounded-full bg-[#131619] py-2  '
		>
			<img
				src='/Lobby/Madrid.png'
				alt='Tournament Image'
				className='h-1/2 w-1/2 object-cover'
			/>
		</div>
	);
}
function TournamentImageRight() {
	return (
		<div
			id='image'
			className='z-10 -ml-6 flex h-3/5 w-3/5 items-center justify-center rounded-full bg-[#131619] py-2  '
		>
			<img
				src='/Lobby/Madrid.png'
				alt='Tournament Image'
				className='h-1/2 w-1/2 object-cover'
			/>
		</div>
	);
}

function GreenBadge({ time }: { time: string }) {
	return (
		<div
			className=' flex h-[35px] w-fit items-center justify-center rounded-[6px] bg-[#52BE70]/35 px-4'
			style={{
				boxShadow: "0px 0px 12px 0px #52BE7038",
			}}
		>
			<p className='text-[12px] text-[#52BE70]'>
				{time}
			</p>
		</div>
	);
}
function YellowBadge() {
	return (
		<div
			className='ml-3 flex h-[35px] w-fit items-center justify-center rounded-[6px] bg-[#FFC42E54] px-4'
			style={{
				boxShadow: "0px 0px 12px 0px #FFC42E38",
			}}
		>
			<p className='text-[12px] text-[#FFC42E]'>
				Guaranteed
			</p>
		</div>
	);
}

// Starts In Components
function LiveStatus({ live }: { live: boolean }) {
	return live ? (
		<div className='flex items-center justify-center'>
			<motion.svg
				width='24'
				height='24'
				viewBox='0 0 16 16'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
				animate={{ opacity: [1, 0, 1] }}
				transition={{
					repeat: Infinity,
					duration: 2,
				}}
			>
				<defs>
					<filter
						id='filter0_d_67_348'
						x='0'
						y='0'
						width='16'
						height='16'
						filterUnits='userSpaceOnUse'
						colorInterpolationFilters='sRGB'
					>
						<feFlood
							floodOpacity='0'
							result='BackgroundImageFix'
						/>
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						/>
						<feOffset />
						<feGaussianBlur stdDeviation='2' />
						<feComposite
							in2='hardAlpha'
							operator='out'
						/>
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0.321569 0 0 0 0 0.745098 0 0 0 0 0.439216 0 0 0 1 0'
						/>
						<feBlend
							mode='normal'
							in2='BackgroundImageFix'
							result='effect1_dropShadow_67_348'
						/>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_dropShadow_67_348'
							result='shape'
						/>
					</filter>
				</defs>
				<g filter='url(#filter0_d_67_348)'>
					<motion.circle
						cx='8'
						cy='8'
						r='4'
						fill='#52BE70'
					/>
				</g>
			</motion.svg>
			<h1
				className='ml-2 text-lg tracking-wider text-[#52BE70]'
				style={{
					textShadow: "0px 0px 10px #52BE70",
				}}
			>
				LIVE
			</h1>
		</div>
	) : (
		<div className='flex items-center'>
			<svg
				width='24'
				height='24'
				viewBox='0 0 16 16'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<g filter=''>
					<circle
						cx='8'
						cy='8'
						r='4'
						fill='#A7ADB9'
					/>
				</g>
			</svg>
			<h1 className='ml-2 tracking-wider text-[#A7ADB9]'>
				Offline
			</h1>
		</div>
	);
}

function DetailsArrow() {
	return (
		<svg
			width='7'
			height='11'
			viewBox='0 0 7 11'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M6.016 5.30803L0.707999 10.616L-3.09477e-08 9.90803L4.6 5.30803L-4.33092e-07 0.708027L0.707999 2.66719e-05L6.016 5.30803Z'
				fill='#A7ADB9'
			/>
		</svg>
	);
}

// Duration Components
function Duration({ time }: { time: string }) {
	return (
		<div
			className='flex h-[35px] w-fit items-center justify-center rounded-[6px] 
		border-2 border-[#A7ADB9] bg-transparent px-3'
		>
			<h1 className='text-[12px] font-semibold text-[#A7ADB9]'>
				{time}
			</h1>
		</div>
	);
}

function Duration2({
	text,
	alert,
}: {
	text: string;
	alert: number;
}) {
	return (
		<div
			className='relative ml-3 flex h-[35px] w-fit items-center justify-center rounded-[6px] 
		border-2 border-[#A7ADB9] bg-transparent px-3'
		>
			<h1 className='text-[12px] font-semibold text-[#A7ADB9]'>
				{text}
			</h1>
			<div
				className='absolute -right-2 -top-2 flex h-[20px] w-[20px] 
				items-center justify-center rounded-full bg-[#52BE70]'
				style={{
					boxShadow: "0px 0px 8px 0px #52BE70",
				}}
			>
				<p className='text-[12px] font-light text-[#121418]'>
					{alert}
				</p>
			</div>
		</div>
	);
}

// Prize Pool Components

function Amount({ amount }: { amount: number }) {
	return (
		<div className='flex h-[35px] items-center'>
			<SOLLogo />
			<p className='mx-2 text-[18px] font-medium text-white'>
				{amount}
			</p>
		</div>
	);
}
function Teams({ teams }: { teams: number }) {
	return (
		<div className='ml-2 flex h-[35px] items-center'>
			<TeamIcon />
			<p className='mx-2 text-[18px] font-medium text-white'>
				{teams} Teams
			</p>
		</div>
	);
}

function SOLLogo() {
	return (
		<svg
			width='22'
			height='22'
			viewBox='0 0 14 12'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M11.7437 2.452C11.6583 2.53057 11.5468 2.57473 11.4307 2.576H0.441717C0.0517173 2.576 -0.145283 2.13 0.124717 1.869L1.92972 0.129C2.01361 0.0480096 2.12513 0.00190088 2.24172 0H13.2737C13.6677 0 13.8607 0.45 13.5867 0.712L11.7437 2.452Z'
				fill='url(#paint0_linear_67_354)'
			/>
			<path
				d='M11.7437 11.028C11.6577 11.1051 11.5463 11.1478 11.4307 11.148H0.441717C0.0517173 11.148 -0.145283 10.706 0.124717 10.445L1.92972 8.69999C2.01383 8.61996 2.12561 8.57553 2.24172 8.57599H13.2737C13.6677 8.57599 13.8607 9.02199 13.5867 9.28299L11.7437 11.028Z'
				fill='url(#paint1_linear_67_354)'
			/>
			<path
				d='M11.7437 4.40998C11.6577 4.33287 11.5463 4.29015 11.4307 4.28998H0.441717C0.0517173 4.28998 -0.145283 4.73198 0.124717 4.99298L1.92972 6.73798C2.0149 6.81631 2.126 6.86047 2.24172 6.86198H13.2737C13.6677 6.86198 13.8607 6.41598 13.5867 6.15498L11.7437 4.40998Z'
				fill='url(#paint2_linear_67_354)'
			/>
			<defs>
				<linearGradient
					id='paint0_linear_67_354'
					x1='0.00071734'
					y1='8.866'
					x2='14.0437'
					y2='8.309'
					gradientUnits='userSpaceOnUse'
				>
					<stop stop-color='#599DB0' />
					<stop offset='1' stop-color='#47F8C3' />
				</linearGradient>
				<linearGradient
					id='paint1_linear_67_354'
					x1='0.000717365'
					y1='9.36399'
					x2='13.9607'
					y2='8.90099'
					gradientUnits='userSpaceOnUse'
				>
					<stop stop-color='#C44FE2' />
					<stop offset='1' stop-color='#73B0D0' />
				</linearGradient>
				<linearGradient
					id='paint2_linear_67_354'
					x1='0.789717'
					y1='5.57598'
					x2='13.1837'
					y2='5.57598'
					gradientUnits='userSpaceOnUse'
				>
					<stop stop-color='#778CBF' />
					<stop offset='1' stop-color='#5DCDC9' />
				</linearGradient>
			</defs>
		</svg>
	);
}

function TeamIcon() {
	return (
		<svg
			width='22'
			height='22'
			viewBox='0 0 14 12'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M7 0.00201416C6.73762 0.00201416 6.47781 0.0536939 6.2354 0.154103C5.99299 0.254512 5.77273 0.401683 5.5872 0.587215C5.40167 0.772746 5.2545 0.993004 5.15409 1.23541C5.05368 1.47782 5.002 1.73763 5.002 2.00001C5.002 2.2624 5.05368 2.52221 5.15409 2.76462C5.2545 3.00702 5.40167 3.22728 5.5872 3.41281C5.77273 3.59834 5.99299 3.74552 6.2354 3.84593C6.47781 3.94633 6.73762 3.99801 7 3.99801C7.5299 3.99801 8.0381 3.78751 8.4128 3.41281C8.7875 3.03812 8.998 2.52992 8.998 2.00001C8.998 1.47011 8.7875 0.961912 8.4128 0.587215C8.0381 0.212517 7.5299 0.00201416 7 0.00201416ZM11.5 1.00001C11.1022 1.00001 10.7206 1.15805 10.4393 1.43935C10.158 1.72066 10 2.10219 10 2.50001C10 2.89784 10.158 3.27937 10.4393 3.56067C10.7206 3.84198 11.1022 4.00001 11.5 4.00001C11.8978 4.00001 12.2794 3.84198 12.5607 3.56067C12.842 3.27937 13 2.89784 13 2.50001C13 2.10219 12.842 1.72066 12.5607 1.43935C12.2794 1.15805 11.8978 1.00001 11.5 1.00001ZM2.5 1.00001C2.10218 1.00001 1.72064 1.15805 1.43934 1.43935C1.15804 1.72066 1 2.10219 1 2.50001C1 2.89784 1.15804 3.27937 1.43934 3.56067C1.72064 3.84198 2.10218 4.00001 2.5 4.00001C2.89783 4.00001 3.27936 3.84198 3.56066 3.56067C3.84197 3.27937 4 2.89784 4 2.50001C4 2.10219 3.84197 1.72066 3.56066 1.43935C3.27936 1.15805 2.89783 1.00001 2.5 1.00001ZM4 5.99301C4.00185 5.72901 4.10802 5.47645 4.29536 5.29043C4.48269 5.1044 4.73599 5.00001 5 5.00001H9C9.26522 5.00001 9.51957 5.10537 9.70711 5.29291C9.89464 5.48044 10 5.7348 10 6.00001V9.00001C10.0003 9.31476 9.95099 9.62759 9.854 9.92701C9.63257 10.6057 9.17644 11.1833 8.56751 11.5559C7.95859 11.9286 7.23675 12.0719 6.53163 11.9603C5.8265 11.8486 5.18428 11.4893 4.72028 10.9467C4.25628 10.4041 4.0009 9.71392 4 9.00001V5.99301ZM3 6.00001C3 5.63501 3.097 5.29401 3.268 5.00001H1C0.734784 5.00001 0.48043 5.10537 0.292893 5.29291C0.105357 5.48044 1.38413e-07 5.7348 1.38413e-07 6.00001V8.50001C-0.000136048 8.90932 0.100226 9.3124 0.292273 9.67385C0.48432 10.0353 0.762177 10.3441 1.10144 10.5731C1.44071 10.802 1.831 10.9442 2.23806 10.9871C2.64511 11.03 3.05646 10.9723 3.436 10.819C3.14879 10.2554 2.99937 9.63162 3 8.99901V6.00001ZM11 6.00001V9.00001C11 9.65501 10.843 10.273 10.564 10.819C10.9435 10.9723 11.3549 11.03 11.7619 10.9871C12.169 10.9442 12.5593 10.802 12.8986 10.5731C13.2378 10.3441 13.5157 10.0353 13.7077 9.67385C13.8998 9.3124 14.0001 8.90932 14 8.50001V6.00001C14 5.7348 13.8946 5.48044 13.7071 5.29291C13.5196 5.10537 13.2652 5.00001 13 5.00001H10.732C10.902 5.29401 11 5.63501 11 6.00001Z'
				fill='#5A5D6F'
			/>
		</svg>
	);
}

// Participate Components
function Participate() {
	return (
		<motion.button
			className='relative flex h-[35px] w-fit items-center rounded-[6px] bg-[#52BE70] px-3'
			whileHover={{
				scale: 1.1,
				boxShadow: "0px 0px 18px 0px #52BE70",
			}}
		>
			<p className='text-[16px] font-semibold text-[#141414]'>
				participate
			</p>
			<div className='absolute -right-2 -top-2 rotate-[30deg]'>
				<Crown />
			</div>
		</motion.button>
	);
}
