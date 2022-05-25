import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import moon from "./assets/moon.png";
import cat from "./assets/cat.gif";
import land from "./assets/land.png";
import me from "./assets/me.png";
import {
	Button,
	Container,
	Flex,
	HStack,
	Link,
	SimpleGrid,
} from "@chakra-ui/react";
import "./App.css";
import { Card } from "./components/Card";
import {
	SiMedium,
	SiLinkedin,
	SiGithub,
	SiFacebook,
	SiTwitter,
	SiGmail,
} from "react-icons/si";

import { motion } from "framer-motion";

function App() {
	return (
		<>
			<Parallax pages={3.5}>
				<ParallaxLayer
					offset={0}
					speed={1}
					factor={2}
					style={{
						backgroundImage: `url(${moon})`,
						backgroundSize: "cover",
						textAlign: "center",
					}}
				/>
				<ParallaxLayer
					offset={1.8}
					speed={1}
					factor={5}
					style={{
						backgroundImage: `url(${land})`,
						backgroundSize: "cover",
					}}></ParallaxLayer>
				<ParallaxLayer sticky={{ start: 0.7, end: 1.4 }}>
					<img src={cat} />
				</ParallaxLayer>
				<ParallaxLayer offset={0.2} speed={0.05}>
					<div className='intro-section'>
						<h1 className='name'>Hi, I am Aryan Singhal</h1>
						<h3 className='desc'>
							A passionate Full Stack Developer from India 🇮🇳
						</h3>
					</div>
				</ParallaxLayer>
				<ParallaxLayer offset={1.5} factor={0.2} speed={2}>
					<div className='intro-section'>
						<h1 className='skills-heading'>About me</h1>
					</div>
					<div className='wrapper'>
						<div className='about-me'>
							<p>
								I am Aryan Singhal, a Full Stack Developer from Pune, India. I
								work with MERN stack and really love JavaScript <br /> and I
								possess more than 1 year of professional experience. I am
								enthusiastic about new technologies. Problem <br />
								solving comes easy to me. I love to code. I developed this
								interest when I was 16 years old and I wanted to know <br />
								how websites are made. I am currently working as a Technical
								Consultant at Xebia IT Architects India and love <br /> to meet
								new people and play video games.
							</p>
							<img src={me} alt='Aryan Singhal' />
						</div>
					</div>
				</ParallaxLayer>
				<ParallaxLayer offset={1.95} speed={1.5}>
					<div className='intro-section'>
						<h1 className='skills-heading'>My Skills</h1>
						<div className='wrapper skills-upper'>
							<div className='skills-wrapper'>
								<i className='icon devicon-mongodb-plain-wordmark colored'></i>
								<i
									style={{ color: "#fff" }}
									className='icon devicon-express-original-wordmark'></i>
								<i className='icon devicon-react-original colored'></i>
								<i className='icon devicon-nodejs-plain colored'></i>
								<i className='icon devicon-javascript-plain colored'></i>

								<i className='icon devicon-typescript-plain colored'></i>

								<i className='icon devicon-bootstrap-plain colored'></i>

								<i className='icon devicon-html5-plain colored'></i>

								<i className='icon devicon-css3-plain colored'></i>

								<i className='icon devicon-git-plain-wordmark colored'></i>

								<i className='icon devicon-graphql-plain-wordmark colored'></i>

								<i className='icon devicon-postgresql-plain-wordmark colored'></i>

								<i className='icon devicon-docker-plain-wordmark colored'></i>

								<i className='icon devicon-nginx-original colored'></i>

								<i className='icon devicon-ubuntu-plain-wordmark colored'></i>

								<i className='icon devicon-amazonwebservices-plain-wordmark colored'></i>
							</div>
						</div>
					</div>
				</ParallaxLayer>
				<ParallaxLayer offset={2} factor={0.2} speed={2}>
					<div className='intro-section'>
						<h1 className='skills-heading'>Projects and Blogs</h1>
					</div>
					<Container maxW='container.md' marginTop='5rem' centerContent>
						<SimpleGrid columns={3} spacing={15}>
							<Card
								title='DevChirps'
								isProject={true}
								gitLink='devchirps'
								url='https://devchirps.netlify.app'
							/>
							<Card
								title='Cloud Storage: New Generation of Storage'
								url='https://devchirps.netlify.app'
							/>
							<Card
								title='An Outline of Linux File System'
								url='https://aryan-singhal-29418.medium.com/an-outline-of-linux-file-system-3f3db6ea8eb1'
							/>

							<Card
								title='Electronic Waste (E-Waste) Around Us'
								url='https://aryan-singhal-29418.medium.com/electronic-waste-e-waste-around-us-a8eb13ce7d53'
							/>
							<Card
								title='Implementing Information Security'
								url='https://medium.com/@aryan-singhal-29418/implementing-information-security-top-down-and-bottom-approach-f55e42d1a1a6'
							/>
						</SimpleGrid>
					</Container>
				</ParallaxLayer>
				<ParallaxLayer offset={2.9} factor={0.5} speed={3}>
					<div>
						<Flex justifyContent={"center"} alignItems={"center"}>
							<h1 className='skills-heading'>Want to Connect?</h1>
						</Flex>
						<div className='container'>
							<HStack mt='3rem' spacing='5rem' alignItems='center'>
								<Link
									className='gitlink'
									href='https://medium.com/@aryan-singhal-29418'
									isExternal>
									<SiMedium style={{ fontSize: "4rem" }} />
								</Link>
								<Link
									className='linkedin'
									href='https://medium.com/@aryan-singhal-29418'
									isExternal>
									<SiLinkedin style={{ fontSize: "4rem" }} />
								</Link>
								<Link
									className='gitlink'
									href='https://github.com/aryan1306'
									isExternal>
									<SiGithub style={{ fontSize: "4rem" }} />
								</Link>
								<Link
									className='facebook'
									href='https://www.facebook.com/a.4aryan'
									isExternal>
									<SiFacebook style={{ fontSize: "4rem" }} />
								</Link>
								<Link
									className='twitter'
									href='https://twitter.com/aryandotexe'
									isExternal>
									<SiTwitter style={{ fontSize: "4rem" }} />
								</Link>
								<Link
									className='email'
									href='mailto:aryan.singhal@protonmail.com'
									isExternal>
									<SiGmail style={{ fontSize: "4rem" }} />
								</Link>
							</HStack>
						</div>
					</div>
				</ParallaxLayer>
			</Parallax>
		</>
	);
}

export default App;
