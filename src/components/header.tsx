import React from "react"
import styled from "styled-components"

import { site, style } from "../const"

const StyledLogo = styled.div`
  margin: ${style.SPACE_SIZE};

  @media only screen and (max-width: 768px) {
    margin: calc(${style.SPACE_SIZE} * 2.5) calc(${style.SPACE_SIZE} / 2);
  }
`

const LogoTitle = styled.div`
  font-size: 8rem;

  @media only screen and (max-width: 768px) {
    font-size: 4rem;
  }
`

const Header = () => (
  <StyledLogo>
    <LogoTitle>{site.title}</LogoTitle>
  </StyledLogo>
)

export default Header
