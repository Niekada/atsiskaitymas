import HomeNavBar from "../../components/HomeNavBar/HomeNavBar"
import { fetchItems } from "./HomeApi";
import styled from "styled-components";

const Home = () => {
  const { data } = fetchItems()
  const items = data || [];

  return ( 
    <>
      <HomeNavBar />
        {items.map((item: any) => (
            <ItemBlock>
                {item.email} 
                {item.password} 
            </ItemBlock> 
        ))}

    </>
  )
};

export default Home;

const ItemBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;