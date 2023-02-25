import styled from "styled-components";

const StyledFooter = styled.footer`
   min-height: 10vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 8px;
    font-weight: lighter;
    color: #ccc;
`;

const Footer = () => {
  return (
      <StyledFooter>
          <div className='footer'>
              <p>made with ❤️ by angela choi</p>
          </div>
      </StyledFooter>
  )
}

export default Footer;