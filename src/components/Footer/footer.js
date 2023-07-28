import React from "react"
import * as S from "./footer.styles"
import { StaticImage } from "gatsby-plugin-image"
export const Footer = () => {
  return (
    <S.Main>
      <S.CompName>LederStilMeister</S.CompName>
      <StaticImage
        src="../../images/insta.svg"
        style={{ width: "30px", height: "30px" }}
      />
    </S.Main>
  )
}
