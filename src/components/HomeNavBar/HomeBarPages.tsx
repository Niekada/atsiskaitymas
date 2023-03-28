import { HOME_PATH, ADD_PATH } from '../../routes/Consts';
import styled from "styled-components"

const HomeBarPages = () => {
  return (
    <div>
        <PageButton>
            <a href={HOME_PATH}>
            Home
            </a>
        </PageButton>
        <PageButton>
            <a href={ADD_PATH}>
            Add
            </a>
        </PageButton>
    </div>
  )
}

export default HomeBarPages;

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