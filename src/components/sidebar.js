import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Bitmoji from '../content/bitmoji-wfh.png'
import {
  FaHome,
  FaUserSecret,
  FaLinkedin,
  FaGithub,
  FaHashtag
} from 'react-icons/fa'

const Sidebar = styled.div`
  /* Device = Tablets, iPads (portrait) */
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 17.5%;
  }

  /* Device = Tablets, iPads (landscape) */
  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    width: 17.5%;
  }

  /* Device = Low resolution Tablets, Mobiles (landscape) */
  @media (min-width: 320px) and (max-width: 767px) {
    width: 8.75%;
    justify-content: flex-start;
    align-items: center;

    &::before {
      content: '';
      margin: 10px;
    }
  }

  display: flex;
  flex-direction: column;
  width: 25%;
  background-color: #193549;
  color: #dcdcdc;
  justify-content: center;
  align-items: center;
`

const Logo = styled.img`
  /* Device = Tablets, iPads (portrait) */
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 80px;
    height: 80px;
  }

  /* Device = Tablets, iPads (landscape) */
  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    width: 80px;
    height: 80px;
  }

  /* Device = Low resolution Tablets, Mobiles (landscape) */
  @media (min-width: 320px) and (max-width: 767px) {
    width: 30px;
    height: 30px;
  }

  border-radius: 50%;
  overflow: hidden;
  width: 152px;
  height: 152px;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`

const StyledHref = styled.a`
  text-decoration: none;
  color: inherit;
`

const MenuWrapper = styled.div`
  @media (min-width: 320px) and (max-width: 767px) {
    flex-direction: column;
    div {
      margin: 0;
    }
    span {
      display: none;
    }
  }

  display: flex;
  flex-direction: row;
  div {
    margin: 10px;
  }
`

const SiteTitle = styled.h1`
  display: flex;

  /* Device = Tablets, iPads (portrait) */
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 16px;
  }

  /* Device = Tablets, iPads (landscape) */
  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    font-size: 16px;
  }

  /* Device = Low resolution Tablets, Mobiles (landscape) */
  @media (min-width: 320px) and (max-width: 767px) {
    display: none;
  }
`

const NameBoard = styled.h5`
  display: flex;

  /* Device = Tablets, iPads (portrait) */
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 12px;
  }

  /* Device = Tablets, iPads (landscape) */
  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    font-size: 12px;
  }

  /* Device = Low resolution Tablets, Mobiles (landscape) */
  @media (min-width: 320px) and (max-width: 767px) {
    display: none;
  }
`

export default ({ title, authorName, image }) => (
  <Sidebar>
    <StyledLink to="/">
      <SiteTitle>{authorName}</SiteTitle>
    </StyledLink>
    <Logo
      src={Bitmoji}
      alt={authorName}
    />
    <NameBoard>{title}</NameBoard>
    <MenuWrapper>
      <div>
        <p>
          <StyledLink to="/">
            <FaHome /> <span>Home</span>
          </StyledLink>
        </p>
        <p>
          <StyledLink to="/about">
            <FaUserSecret /> <span>About</span>
          </StyledLink>
        </p>
        <p>
          <StyledLink to="/tags">
            <FaHashtag /> <span>Tags</span>
          </StyledLink>
        </p>
      </div>
      <div>
        <p>
          <StyledHref
            href="https://www.linkedin.com/in/samuel-alebachew-91060223"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaLinkedin /> <span>Linkedin</span>
          </StyledHref>
        </p>
        <p>
          <StyledHref
            href="https://github.com/samuelAle"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub /> <span>Github</span>
          </StyledHref>
        </p>
      </div>
    </MenuWrapper>
  </Sidebar>
)
