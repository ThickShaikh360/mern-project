import { Container,Flex} from "@chakra-ui/react";
import Homepage from "../Pages/Homepage";
import CreatePage from "../Pages/CreatePage";
import { Link } from "react-router-dom";

const Navbar = () => {
  return <Container maxW={"1140px"}>
   <Flex
				h={16}
				alignItems={"center"}
				justifyContent={"space-between"}
				flexDir={{
					base: "column",
					sm: "row",
				}}
			>
    <nav>
      <Link to="/">Home</Link>||
      <Link to="/create">Create</Link> || 
    </nav>

    </Flex> 
   </Container>
};

export default Navbar;


