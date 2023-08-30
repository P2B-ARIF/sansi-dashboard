import { Button, Input, Textarea } from "@chakra-ui/react";
import React, { useState } from "react";

// {
// 	headline: "",
// 	paragraph: [],
// 	specification: [],
// 	question: "",
// 	lastParagraph: "",
// 	measurement_chart: {
// 		M: {},
// 		L: {},
// 		XL: {},
// 		XLL: {},
// 	},
// }

const CreateDesc = ({ desc, setDesc }) => {
	const [editDesc, setEditDesc] = useState(desc || {});

	const handleInputChange = e => {
		const { name, value } = e.target;
		setEditDesc(prevData => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleParagraphChange = (index, value) => {
		const updatedParagraph = [...editDesc.paragraph];
		updatedParagraph[index] = value;
		setEditDesc(prevData => ({
			...prevData,
			paragraph: updatedParagraph,
		}));
	};

	const handleSpecificationChange = (index, value) => {
		const updatedSpecification = [...editDesc.specification];
		updatedSpecification[index] = value;
		setEditDesc(prevData => ({
			...prevData,
			specification: updatedSpecification,
		}));
	};

	const handleMeasurementChange = (size, field, value) => {
		setEditDesc(prevData => ({
			...prevData,
			measurement_chart: {
				...prevData.measurement_chart,
				[size]: {
					...prevData.measurement_chart[size],
					[field]: value,
				},
			},
		}));
	};

	const handleSubmit = e => {
		e.preventDefault();
		console.log(editDesc);
		setDesc(editDesc);
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label className='block mt-5 font-bold text-slate-600'>Headline:</label>
				<Textarea
					resize={"auto"}
					type='text'
					name='headline'
					value={editDesc?.headline}
					onChange={handleInputChange}
				/>
				<label className='inline-block mt-5 mr-3 mb-2 font-bold text-slate-600'>
					Paragraphs:
				</label>
				<Button
					className='mr-5'
					colorScheme='blue'
					size={"xs"}
					type='button'
					onClick={() =>
						setEditDesc(prevData => ({
							...prevData,
							paragraph: [...prevData.paragraph, ""],
						}))
					}
				>
					Add Paragraph
				</Button>
				{editDesc?.paragraph?.map((para, index) => (
					<Textarea
						className='my-1'
						key={index}
						type='text'
						value={para}
						onChange={e => handleParagraphChange(index, e.target.value)}
					/>
				))}

				<label className='inline-block mt-5 mr-3 mb-2 font-bold text-slate-600'>
					Specifications:
				</label>
				<Button
					colorScheme='blue'
					size={"xs"}
					type='button'
					onClick={() =>
						setEditDesc(prevData => ({
							...prevData,
							specification: [...prevData.specification, ""],
						}))
					}
				>
					Add Specification
				</Button>
				<div className='grid grid-cols-2 lg:grid-cols-3 gap-3'>
					{editDesc?.specification?.map((spec, index) => (
						<Input
							className=''
							key={index}
							type='text'
							value={spec}
							onChange={e => handleSpecificationChange(index, e.target.value)}
						/>
					))}
				</div>

				<label className='block mt-3 font-bold text-slate-600'>Question:</label>
				<Input
					type='text'
					name='question'
					value={editDesc?.question}
					onChange={handleInputChange}
				/>
				<label className='block mt-3 font-bold text-slate-600'>
					Last Paragraph:
				</label>
				<Textarea
					type='text'
					name='lastParagraph'
					value={editDesc?.lastParagraph}
					onChange={handleInputChange}
				/>
				<label className='block mt-3 font-bold text-slate-600'>
					Measurement Chart:
				</label>
				<div className='flex flex-auto gap-3'>
					{editDesc &&
						Object.entries(editDesc?.measurement_chart)?.map(
							([size, measurements], index) => (
								<div key={size} className='w-full'>
									<h4>Size: {size}</h4>
									<label className='block mt-1'>Length:</label>
									<Input
										type='number'
										value={measurements.length}
										onChange={e =>
											handleMeasurementChange(
												size,
												"length",
												parseInt(e.target.value),
											)
										}
									/>
									<label className='block mt-3'>Width:</label>
									<Input
										type='number'
										value={measurements.width}
										onChange={e =>
											handleMeasurementChange(
												size,
												"width",
												parseInt(e.target.value),
											)
										}
									/>
									<label className='block mt-3'>Height:</label>
									<Input
										type='number'
										value={measurements.height}
										onChange={e =>
											handleMeasurementChange(
												size,
												"height",
												parseInt(e.target.value),
											)
										}
									/>
								</div>
							),
						)}
				</div>
				<Button size={"sm"} colorScheme='teal' type='submit' marginY={"15px"}>
					Changes Save
				</Button>
			</form>
		</div>
	);
};

export default CreateDesc;
