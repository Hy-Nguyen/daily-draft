import { motion } from "framer-motion";

export default function LiveStatus({
	live,
}: {
	live: boolean;
}) {
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
