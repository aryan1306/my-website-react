import React from "react";
import { Box, Flex, Link } from "@chakra-ui/react";
import { FiExternalLink } from "react-icons/fi";
import { VscGithub } from "react-icons/vsc";

interface ICardProps {
	title: string;
	isProject?: boolean;
	gitLink?: string;
	url?: string;
	motion?: any;
}

export const Card: React.FC<ICardProps> = ({
	gitLink,
	isProject = false,
	title,
	url,
	motion,
}) => {
	const item = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
		},
	};
	return (
		<Box borderRadius='10px 30px 10px' bg='black'>
			<Box mt={8} p='1.3rem'>
				<h3 style={{ fontSize: "1.5rem" }}>{title}</h3>
				{isProject ? (
					<Flex mt='2rem' justifyContent='flex-end' alignItems='center'>
						<Link
							// as='p'
							mr='1rem'
							href={`https://github.com/aryan1306/${gitLink}`}
							isExternal>
							View on GitHub
							<VscGithub style={{ paddingLeft: "5px" }} />
						</Link>
						<Link justifySelf='flex-end' mr={8} href={`${url}`}>
							Visit Website
							<FiExternalLink style={{ paddingLeft: "5px" }} />
						</Link>
					</Flex>
				) : (
					<Flex mt='2rem' justifyContent='flex-end' alignItems='center'>
						<Link href={url} isExternal>
							View Blog
							<FiExternalLink style={{ paddingLeft: "5px" }} />
						</Link>
					</Flex>
				)}
			</Box>
		</Box>
	);
};
