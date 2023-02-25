import styled from "styled-components";

const StyledNav = styled.nav`
min-height: 10vh;
display: flex;
margin: auto;
justify-content: space-between;
align-items: center;
padding: 1rem 8rem;
background-color: 282828;
a {
  color: white;
  text-decoration: none;
}
ul {
  display: flex;
  list-style: none;
}
h1 {
  font-size: 1.8rem;
  /* font-weight: lighter; */
}
li {
  padding-left: 10rem;
  position: relative;
}
#logo {
  color: #23d997;
  border: solid 2px #23d997;
  padding: 0.5rem;

}
`
const Nav = () => {
  return(
    <StyledNav>
      <h1><a id="logo"href="/">AC</a></h1>
      <ul>
        <li><a href="/aboutme">About</a></li>
        <li><a href="/work">My Projects</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </StyledNav>
  )
}

export default Nav;

