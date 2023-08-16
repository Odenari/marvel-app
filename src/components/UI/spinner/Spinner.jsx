export default function Spinner() {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			style={{
				margin: '0 auto',
				background: 'transparent',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				shapeRendering: 'auto',
				width: '72',
				height: '80',
				viewBox: '0 0 100 100',
				preserveAspectRatio: 'xMidYMid',
			}}
		>
			<g transform='rotate(0 50 50)'>
				<rect
					x='46.5'
					y='28.5'
					rx='1.8'
					ry='1.8'
					width='7'
					height='9'
					fill='#7f745b'
				>
					<animate
						attributeName='opacity'
						values='1;0'
						keyTimes='0;1'
						dur='1.4492753623188404s'
						begin='-1.2882447665056358s'
						repeatCount='indefinite'
					></animate>
				</rect>
			</g>
			<g transform='rotate(40 50 50)'>
				<rect
					x='46.5'
					y='28.5'
					rx='1.8'
					ry='1.8'
					width='7'
					height='9'
					fill='#7f745b'
				>
					<animate
						attributeName='opacity'
						values='1;0'
						keyTimes='0;1'
						dur='1.4492753623188404s'
						begin='-1.1272141706924315s'
						repeatCount='indefinite'
					></animate>
				</rect>
			</g>
			<g transform='rotate(80 50 50)'>
				<rect
					x='46.5'
					y='28.5'
					rx='1.8'
					ry='1.8'
					width='7'
					height='9'
					fill='#7f745b'
				>
					<animate
						attributeName='opacity'
						values='1;0'
						keyTimes='0;1'
						dur='1.4492753623188404s'
						begin='-0.9661835748792269s'
						repeatCount='indefinite'
					></animate>
				</rect>
			</g>
			<g transform='rotate(120 50 50)'>
				<rect
					x='46.5'
					y='28.5'
					rx='1.8'
					ry='1.8'
					width='7'
					height='9'
					fill='#7f745b'
				>
					<animate
						attributeName='opacity'
						values='1;0'
						keyTimes='0;1'
						dur='1.4492753623188404s'
						begin='-0.8051529790660225s'
						repeatCount='indefinite'
					></animate>
				</rect>
			</g>
			<g transform='rotate(160 50 50)'>
				<rect
					x='46.5'
					y='28.5'
					rx='1.8'
					ry='1.8'
					width='7'
					height='9'
					fill='#7f745b'
				>
					<animate
						attributeName='opacity'
						values='1;0'
						keyTimes='0;1'
						dur='1.4492753623188404s'
						begin='-0.6441223832528179s'
						repeatCount='indefinite'
					></animate>
				</rect>
			</g>
			<g transform='rotate(200 50 50)'>
				<rect
					x='46.5'
					y='28.5'
					rx='1.8'
					ry='1.8'
					width='7'
					height='9'
					fill='#7f745b'
				>
					<animate
						attributeName='opacity'
						values='1;0'
						keyTimes='0;1'
						dur='1.4492753623188404s'
						begin='-0.48309178743961345s'
						repeatCount='indefinite'
					></animate>
				</rect>
			</g>
			<g transform='rotate(240 50 50)'>
				<rect
					x='46.5'
					y='28.5'
					rx='1.8'
					ry='1.8'
					width='7'
					height='9'
					fill='#7f745b'
				>
					<animate
						attributeName='opacity'
						values='1;0'
						keyTimes='0;1'
						dur='1.4492753623188404s'
						begin='-0.32206119162640895s'
						repeatCount='indefinite'
					></animate>
				</rect>
			</g>
			<g transform='rotate(280 50 50)'>
				<rect
					x='46.5'
					y='28.5'
					rx='1.8'
					ry='1.8'
					width='7'
					height='9'
					fill='#7f745b'
				>
					<animate
						attributeName='opacity'
						values='1;0'
						keyTimes='0;1'
						dur='1.4492753623188404s'
						begin='-0.16103059581320447s'
						repeatCount='indefinite'
					></animate>
				</rect>
			</g>
			<g transform='rotate(320 50 50)'>
				<rect
					x='46.5'
					y='28.5'
					rx='1.8'
					ry='1.8'
					width='7'
					height='9'
					fill='#7f745b'
				>
					<animate
						attributeName='opacity'
						values='1;0'
						keyTimes='0;1'
						dur='1.4492753623188404s'
						begin='0s'
						repeatCount='indefinite'
					></animate>
				</rect>
			</g>
		</svg>
	);
}
