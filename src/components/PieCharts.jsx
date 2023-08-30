import { ResponsivePie } from "@nivo/pie";

const PieCharts = ({ pLength }) => {
	const { shirt, tShirt, poloShirt, panjabi, pajama } = pLength;

	const data = [
		{
			id: "Shirt",
			label: "Shirt",
			value: shirt,
			color: "hsl(232, 70%, 50%)",
		},
		{
			id: "T-Shirt",
			label: "T-Shirt",
			value: tShirt,
			color: "hsl(343, 70%, 50%)",
		},
		{
			id: "Polo-Shirt",
			label: "Polo-Shirt",
			value: poloShirt,
			color: "hsl(336, 70%, 50%)",
		},
		{
			id: "Panjabi",
			label: "Panjabi",
			value: panjabi,
			color: "hsl(98, 70%, 50%)",
		},
		{
			id: "Pajama",
			label: "Pajama",
			value: pajama,
			color: "hsl(42, 70%, 50%)",
		},
	];
	return (
		<ResponsivePie
			data={data}
			margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
			innerRadius={0.5}
			padAngle={0.7}
			cornerRadius={3}
			activeOuterRadiusOffset={8}
			borderWidth={1}
			borderColor={{
				from: "color",
				modifiers: [["darker", 0.2]],
			}}
			arcLinkLabelsSkipAngle={10}
			arcLinkLabelsTextColor='#333333'
			arcLinkLabelsThickness={2}
			arcLinkLabelsColor={{ from: "color" }}
			arcLabelsSkipAngle={10}
			arcLabelsTextColor={{
				from: "color",
				modifiers: [["darker", 2]],
			}}
			defs={[
				{
					id: "dots",
					type: "patternDots",
					background: "inherit",
					color: "rgba(255, 255, 255, 0.3)",
					size: 4,
					padding: 1,
					stagger: true,
				},
				{
					id: "lines",
					type: "patternLines",
					background: "inherit",
					color: "rgba(255, 255, 255, 0.3)",
					rotation: -45,
					lineWidth: 6,
					spacing: 10,
				},
			]}
			fill={[
				{
					match: {
						id: "Shirt",
					},
					id: "lines",
				},
				{
					match: {
						id: "T-Shirt",
					},
					id: "dots",
				},
				{
					match: {
						id: "Polo-Shirt",
					},
					id: "lines",
				},
				{
					match: {
						id: "Panjabi",
					},
					id: "dots",
				},
				{
					match: {
						id: "Pajama",
					},
					id: "lines",
				},
				
			]}
			legends={[
				{
					anchor: "bottom",
					direction: "row",
					justify: false,
					translateX: 0,
					translateY: 56,
					itemsSpacing: 0,
					itemWidth: 75,
					itemHeight: 18,
					itemTextColor: "#999",
					itemDirection: "left-to-right",
					itemOpacity: 1,
					symbolSize: 16,
					symbolShape: "circle",
					effects: [
						{
							on: "hover",
							style: {
								itemTextColor: "#000",
							},
						},
					],
				},
			]}
		/>
	);
};

export default PieCharts;
