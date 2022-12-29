import HomeController from "./controllers/HomeController";
import { ChakraProvider, Stack } from '@chakra-ui/react'

function App() {

  return (
    <ChakraProvider>
      <Stack paddingInline={'5%'} paddingTop='10px'>
        <HomeController />
      </Stack>
    </ChakraProvider>
  )
}

export default App
