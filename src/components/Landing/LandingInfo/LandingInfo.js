import React from "react"
import * as S from "./LandingInfo.styles"

export const LandingInfo = () => {
  return (
    <S.Main>
      <S.InfoBlock>
        <S.MainText>Welcome to Leder Stil Meister!</S.MainText>
        <S.Description>
          You have a set of elements, and you’d like to loop over them to
          generate a JSX partial. In templating languages, you can write a for
          loop directly inside the template. For example, you can use the
          following code to loop over a list in Jinja:
        </S.Description>
      </S.InfoBlock>
      <S.InfoBlock>
        <S.Description>
          You have a set of elements, and you’d like to loop over them to
          generate a JSX partial. In templating languages, you can write a for
          loop directly inside the template. For example, you can use the
          following code to loop over a list in Jinja:
        </S.Description>
        <S.MainText style={{ textAlign: "right" }}>
          Why choose our products
        </S.MainText>
      </S.InfoBlock>
    </S.Main>
  )
}
