import React from "react"
import styled from "styled-components"

import { site, style } from "../const"

const StyledLogo = styled.div`
  margin: ${style.SPACE_SIZE};

  h1 {
    font-size: 8rem;
  }
`

const Header = () => (
  <StyledLogo>
    <h1>{site.title}</h1>
  </StyledLogo>
)

export default Header
