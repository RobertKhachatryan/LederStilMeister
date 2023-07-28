import React from "react"
import * as S from "./MainBlock.styles"
import { StaticImage } from "gatsby-plugin-image"

export const MainBlock = () => {
  return (
    <S.Main>
      <S.MainTitle>
        Leder
        <br />
        Stil
        <br /> Meister
      </S.MainTitle>
      <div>
        <StaticImage src="../../../images/bracelet.png" />
      </div>
    </S.Main>
  )
}
