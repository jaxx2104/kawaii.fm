import React from "react"
import Link from "next/link"
import styled from "styled-components"

const StyledLink = styled.a`
  margin-right: 15px;
`

const Header = () => (
  <div>
    <Link prefetch href="/" passHref>
      <StyledLink>Home</StyledLink>
    </Link>
    <Link prefetch href="/about" passHref>
      <StyledLink>About</StyledLink>
    </Link>
  </div>
)

export default Header
