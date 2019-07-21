import React from "react"
import styled from "styled-components"

import { site } from "../const"

const StyledLogo = styled.div`
  margin: 24px;
`

const Header = () => (
  <StyledLogo>
    <h1>{site.title}</h1>
  </StyledLogo>
)

export default Header
