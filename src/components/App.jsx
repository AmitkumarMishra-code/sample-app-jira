import { Box } from "@chakra-ui/layout";
import Body from "./Body";
import Navigation from "./Navigation";

export default function App(){
    return(
        <Box
            w = '100%'
            minH = '100vh'
            d='flex'
        >
            <Navigation />
            <Body />
        </Box>
    )
}