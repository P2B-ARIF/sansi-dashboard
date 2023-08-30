import React from "react";
import { AiOutlineBell } from "react-icons/ai";

import {
	LineChart,
	Line,
	CartesianGrid,
	XAxis,
	YAxis,
	Tooltip,
	BarChart,
	Bar,
} from "recharts";
// import { BarChart, Bar, XAxis, YAxis } from "recharts";

const data = [
	{ name: "Page A", uv: 300, pv: 1400, amt: 1500 },
	{ name: "Page B", uv: 900, pv: 1400, amt: 1400 },
	{ name: "Page C", uv: 500, pv: 1900, amt: 2400 },
	{ name: "Page D", uv: 500, pv: 1900, amt: 2400 },
	{ name: "Page E", uv: 600, pv: 1100, amt: 2700 },
	{ name: "Page F", uv: 700, pv: 2200, amt: 2200 },
	{ name: "Page G", uv: 700, pv: 2200, amt: 2200 },
	{ name: "Page H", uv: 700, pv: 2200, amt: 2200 },
	{ name: "Page I", uv: 700, pv: 2200, amt: 2200 },
	{ name: "Page J", uv: 700, pv: 2200, amt: 2200 },
	{ name: "Page K", uv: 700, pv: 2200, amt: 2200 },
	{ name: "Page L", uv: 700, pv: 2200, amt: 2200 },
];

// const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}, ...];

const renderCustomAxisTick = ({ x, y, payload }) => {
	let path = "";

	switch (payload.value) {
		case "Page A":
			return (
				<svg
					x={x - 12}
					y={y + 4}
					width={40}
					height={40}
					viewBox='0 0 1024 1024'
					fill='#666'
				>
					<path d='M265.662 161.4 178.774 22.005c-4.201-6.732-12.195-10.083-19.94-8.395a18.76 18.76 0 0 0-14.583 15.99l-21.878 175.026a18.752 18.752 0 0 0 18.615 21.078c1.95 0 3.926-.306 5.832-.931l108.766-35.63a18.755 18.755 0 0 0 11.783-11.42 18.74 18.74 0 0 0-1.707-16.323zm-102.403 18.522 11.652-93.214 46.269 74.236-57.921 18.978z'></path>
					<path d='M389.624 204.625 367.745 29.6a18.751 18.751 0 0 0-14.008-15.859 18.768 18.768 0 0 0-19.865 7.295l-99.396 139.395a18.752 18.752 0 0 0-2.457 17.015 18.78 18.78 0 0 0 12.439 11.864l121.268 35.63c1.744.513 3.519.763 5.288.763 4.401 0 8.714-1.55 12.152-4.463a18.76 18.76 0 0 0 6.458-16.615zm-109.31-43.869 56.183-78.793 12.371 98.933-68.554-20.14z'></path>
					<path d='M436.024 102.56h-75.011v37.505h68.76V474.49H82.222V140.066h69.385V102.56H75.971c-17.234 0-31.255 14.021-31.255 31.255v346.926c0 17.234 14.021 31.255 31.255 31.255h360.053c17.234 0 31.255-14.021 31.255-31.255V133.815c0-17.234-14.021-31.255-31.255-31.255zM313 6.077c-38.443-8.095-77.424-8.095-115.623-.05l-38.131 7.501 7.239 36.799 38.374-7.551c33.311-7.007 67.097-7.013 100.54.025l40.006 8.126 7.476-36.749L313 6.077z'></path>
					<path d='M237.245 171.32h37.505v321.922h-37.505z'></path>
				</svg>
			);

		case "Page B":
			return (
				<svg
					x={x - 24}
					y={y + 8}
					width={40}
					height={40}
					viewBox='0 0 1024 1024'
					fill='#666'
				>
					<g display='none'>
						<path
							fill='#ccc'
							d='M63.8,0.2v63.5H0.2V0.2H63.8 M64,0H0v64h64V0L64,0z'
						></path>
						<line
							x2='64'
							y2='64'
							fill='none'
							stroke='#ccc'
							strokeMiterlimit='10'
							strokeWidth='.25'
						></line>
						<line
							x2='64'
							y1='64'
							fill='none'
							stroke='#ccc'
							strokeMiterlimit='10'
							strokeWidth='.25'
						></line>
						<circle
							cx='32'
							cy='32'
							r='32'
							fill='none'
							stroke='#ccc'
							strokeMiterlimit='10'
							strokeWidth='.25'
						></circle>
						<rect
							width='45.3'
							height='45.3'
							x='9.4'
							y='9.4'
							fill='none'
							stroke='#ccc'
							strokeMiterlimit='10'
							strokeWidth='.25'
						></rect>
						<line
							x2='64'
							y1='32'
							y2='32'
							fill='none'
							stroke='#ccc'
							strokeMiterlimit='10'
							strokeWidth='.25'
						></line>
						<line
							x1='32'
							x2='32'
							y1='64'
							fill='none'
							stroke='#ccc'
							strokeMiterlimit='10'
							strokeWidth='.25'
						></line>
						<line
							x1='16'
							x2='16'
							y1='64'
							fill='none'
							stroke='#ccc'
							strokeMiterlimit='10'
							strokeWidth='.25'
						></line>
						<line
							x1='48'
							x2='48'
							y1='64'
							fill='none'
							stroke='#ccc'
							strokeMiterlimit='10'
							strokeWidth='.25'
						></line>
						<circle
							cx='32'
							cy='32'
							r='22.6'
							fill='none'
							stroke='#ccc'
							strokeMiterlimit='10'
							strokeWidth='.25'
						></circle>
						<line
							x1='64'
							y1='48'
							y2='48'
							fill='none'
							stroke='#ccc'
							strokeMiterlimit='10'
							strokeWidth='.25'
						></line>
						<line
							x1='64'
							y1='16'
							y2='16'
							fill='none'
							stroke='#ccc'
							strokeMiterlimit='10'
							strokeWidth='.25'
						></line>
						<circle
							cx='32'
							cy='32'
							r='16'
							fill='none'
							stroke='#ccc'
							strokeMiterlimit='10'
							strokeWidth='.25'
						></circle>
						<circle
							cx='32'
							cy='32'
							r='8'
							fill='none'
							stroke='#ccc'
							strokeMiterlimit='10'
							strokeWidth='.25'
						></circle>
					</g>
					<path
						d='M61.5,13.1l-1-0.6C51.8,7.6,42,5,32,5S12.2,7.6,3.5,12.6l-1,0.6c-0.5,0.3-0.6,0.8-0.4,1.3l7,15C9.3,29.8,9.6,30,10,30
			c0.1,0,0.3,0,0.4-0.1c0.9-0.4,1.7-0.7,2.6-1V55c0,0.3,0.1,0.6,0.4,0.8C13.6,56,18.8,60,32,60s18.4-4,18.6-4.2
			c0.2-0.2,0.4-0.5,0.4-0.8V28.9c0.9,0.3,1.8,0.7,2.6,1C53.7,30,53.9,30,54,30c0.4,0,0.7-0.2,0.9-0.6l7-15
			C62.1,14,61.9,13.4,61.5,13.1z M39,7.4c-0.2,3.7-3.3,6.6-7,6.6s-6.7-2.9-7-6.6C27.3,7.2,29.7,7,32,7S36.7,7.2,39,7.4z M53.5,27.7
			c-0.8-0.3-1.7-0.6-2.5-0.9V21h-2v33.5c-1.4,0.8-6.5,3.5-17,3.5c-10.5,0-15.6-2.7-17-3.5V21h-2v5.8c-0.8,0.3-1.7,0.6-2.5,0.9
			L4.3,14.4l0.2-0.1C10.2,11,16.5,8.8,23,7.7c0.4,4.6,4.2,8.3,9,8.3s8.6-3.6,9-8.3c6.5,1.1,12.8,3.3,18.6,6.6l0.2,0.1L53.5,27.7z'
					></path>
					<path
						d='M45,21h-8c-0.6,0-1,0.4-1,1v7c0,0.1,0,0.2,0.1,0.3c0.1,0.2,1.3,3.7,4.9,3.7s4.9-3.5,4.9-3.7c0-0.1,0.1-0.2,0.1-0.3v-7
			C46,21.4,45.6,21,45,21z'
					></path>
				</svg>
			);

		case "Page C":
		case "Page D":
		case "Page E":
		case "Page F":

		default:
	}

	return (
		<svg
			x={x - 12}
			y={y + 4}
			width={24}
			height={24}
			viewBox='0 0 1024 1024'
			fill='#666'
		>
			<path d={path} />
		</svg>
	);
};

const getPath = (x, y, width, height) =>
	`M${x},${y + height}
     C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${
		x + width / 2
	}, ${y}
     C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
		x + width
	}, ${y + height}
     Z`;

const TriangleBar = props => {
	const { fill, x, y, width, height } = props;

	return <path d={getPath(x, y, width, height)} stroke='none' fill={fill} />;
};

const renderCustomBarLabel = ({ payload, x, y, width, height, value }) => {
	return (
		<text
			x={x + width / 2}
			y={y}
			fill='#666'
			textAnchor='middle'
			dy={-6}
		>{`value: ${value}`}</text>
	);
};

const ReCharts = ({ pLength }) => {
	return (
		<BarChart width={1100} height={300} data={data}>
			<XAxis dataKey='name' tick={renderCustomAxisTick} />
			<YAxis />
			<Bar
				dataKey='uv'
				fill='#8884d8'
				shape={<TriangleBar />}
				label={renderCustomBarLabel}
			/>
		</BarChart>
	);
};

export default ReCharts;
