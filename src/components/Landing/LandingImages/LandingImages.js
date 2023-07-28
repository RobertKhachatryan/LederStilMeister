import React from "react"
import * as S from "./LandingImages.styles"
import { StaticImage } from "gatsby-plugin-image"

export const LandingImages = () => {
  return (
    <S.ImagesMainBLock>
      <S.ImageBlock>
        <StaticImage src="../../../images/time.jpeg" />
      </S.ImageBlock>
      <S.ImageBlock>
        <StaticImage src="../../../images/time.jpeg" />
      </S.ImageBlock>
      <S.ImageBlock>
        <StaticImage src="../../../images/time.jpeg" />
      </S.ImageBlock>
      <S.ImageBlock>
        <StaticImage src="../../../images/time.jpeg" />
      </S.ImageBlock>
      <S.ImageBlock>
        <StaticImage src="../../../images/time.jpeg" />
      </S.ImageBlock>
      <S.ImageBlock>
        <StaticImage src="../../../images/time.jpeg" />
      </S.ImageBlock>
    </S.ImagesMainBLock>
  )
}
