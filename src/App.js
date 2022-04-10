import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { 
	Flex,
	Image,
	Text,
  	ChakraProvider,
	Spacer
} from "@chakra-ui/react";
import "./App.scss";
import "./mdi/css/materialdesignicons.css";
import Icon from "./dp.webp";


function App() {
	const [modal, setModal] = useState(false)
	const [err, setErr] = useState(false)
	return (
		<ChakraProvider>
			<Flex className="bg" w="100%" h="100vh" align="center" justify="center" direction="column">
				<Flex bg="rgba(255,255,255,0.5)" w="100%" h="100vh" align="center" justify="center" direction="column">
					{
						err &&
						<Flex position="fixed" top="0" left="0" right="0" bottom="0" bg="rgba(0,0,0,0.75)" justify="center" align="center" color="#fff" zIndex="1000">
							<Flex w={["90%", "30%"]} h={["80vh", "90vh"]} borderRadius="6px" justify="center" align="center" px="5%" pt={["40%", "10%"]} pb="5%" direction="column" bg="slateblue">
								<Image src={Icon} w="100px" h="100px" borderRadius="100px" mb="8" />
								<Text textAlign="center">Hello, oops! huh this feature is coming soon....</Text>
								<Flex py={["9%", "5%"]} mt="auto" px="6%" bg="rgb(0,0,30)" cursor="pointer" direction="column" w={["100%", "100%"]} textAlign="center" borderRadius="8px" _hover={{ opacity: "0.7"}} transition="all 300ms ease-in-out" mb={["4", "0"]} onClick={() => setErr(false)}>
								<Text fontWeight="bold">Ok!</Text>
							</Flex>
							</Flex>
						</Flex>
					}
					<Flex w={["90%", "60%"]} h="80vh" bg="#000" color="#fff" py={["8%", "5%"]} px={["5%", "6%"]} direction="column" borderRadius="10px">
						<Flex w="100%" align="center">
							<Flex direction="column" align="center">
								<Text fontWeight="bold" fontSize="24px">Olivia's Keys!</Text>
								<Text fontSize="12px">Your easy to go music trainer</Text>
							</Flex>
							<Spacer />
							<Image src={Icon} w="40px" h="40px" borderRadius="100px" mb="8" cursor="pointer" onClick={() => setErr(true)} />
						</Flex>
						<Text mt="4" color="slategray">Select a service and explore the world of premium music</Text>
						<Flex mt="8" justify="space-between" w="100%" flexWrap="wrap">
							<Flex py={["6%", "5%"]} px="6%" bg="rgb(10,180,50)" cursor="pointer" direction="column" w={["100%", "30%"]} borderRadius="8px" _hover={{ opacity: "0.7"}} transition="all 300ms ease-in-out" mb={["4", "0"]} onClick={() => setErr(true)}>
								<Text fontWeight="bold">Music Trainer</Text>
							</Flex>
							
							<Flex py={["9%", "5%"]} px="6%" bg="rgb(200,100,30)" cursor="pointer" direction="column" w={["100%", "30%"]} borderRadius="8px" _hover={{ opacity: "0.7"}} transition="all 300ms ease-in-out" mb={["4", "0"]} onClick={() => setErr(true)}>
								<Text fontWeight="bold">Instrument Space</Text>
							</Flex>
							
							<Flex py={["12%", "5%"]} px="6%" bg="rgb(30,60,100)" cursor="pointer" direction="column" w={["100%", "30%"]} borderRadius="8px" _hover={{ opacity: "0.7"}} transition="all 300ms ease-in-out" mb={["4", "0"]} onClick={() => setErr(true)}>
								<Text fontWeight="bold">Consult a Pro</Text>
							</Flex>
						</Flex>

						<Flex w="100%" p="1% 3%" bg="rgba(255,255,255,0.2)" mt="auto" fontSize="12px" borderRadius="6px">
							<Flex flex="1">&copy; 2022 Olivia Jenkins</Flex>
							<Flex flex="" justify="flex-end">All rights reserved.</Flex>
						</Flex>
					</Flex>
				</Flex>
			</Flex>
		</ChakraProvider>
	)
}

export default App;
