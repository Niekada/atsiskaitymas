import { LOGIN_PATH, REGISTER_PATH } from '../../routes/Consts';
import styled from "styled-components"; 

const NavBarPages = () => {
  return (
    <div>
        <PageButton>
            <a href={LOGIN_PATH}>
            Login
            </a>
        </PageButton>
        <PageButton>
            <a href={REGISTER_PATH}>
            Register
            </a>
        </PageButton>
    </div>
  )
}

export default NavBarPages;

const PageButton = styled.button`
    margin-right: 20px;
    border: 1px solid white;
    background: inherit;
    height: 30px;
    a {
        font-family: sans-serif;
        letter-spacing: 5px;
        font-weight: 550;
        color: white;
        text-decoration: none;
    }
`