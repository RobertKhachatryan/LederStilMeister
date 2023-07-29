import React from "react"
// import { graphql } from "gatsby"
import * as S from "./header.styles"
import { StaticImage } from "gatsby-plugin-image"
const Header = () => {
  // const query = graphql`
  //   query {
  //     allContentfulHeader {
  //       nodes {
  //         id
  //         headerItems
  //       }
  //     }
  //   }
  // `
  // const data = useStaticQuery(query)

  return (
    <S.Main>
      <S.Logo>LSM</S.Logo>
      <S.HeaderItemsBlock>
        {/* {data.allContentfulHeader.nodes.map(el => {
          return <S.HaederItem>{el.headerItems}</S.HaederItem>
        })} */}
        <StaticImage
          src="../../images/armsymb.png"
          style={{ width: "35px", height: "35px" }}
        />
      </S.HeaderItemsBlock>

      <StaticImage
        src="../../images/UK.svg"
        style={{ width: "35px", height: "35px" }}
      />
    </S.Main>
  )
}

export default Header
