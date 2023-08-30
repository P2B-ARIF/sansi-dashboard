import { Box, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
import React from "react";

const Skeleton = ({ noOfLines, spacing }) => {
	return (
		<Box rounded={"lg"} width={"full"} padding='6' boxShadow='lg' bg='white'>
			<SkeletonCircle size='10' />
			<SkeletonText
				mt='4'
				noOfLines={noOfLines}
				spacing={spacing || "5"}
				skeletonHeight='2'
			/>
		</Box>
	);
};

export default Skeleton;
