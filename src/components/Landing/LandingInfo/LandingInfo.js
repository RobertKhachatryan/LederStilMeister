import React from "react"
import * as S from "./LandingInfo.styles"

export const LandingInfo = () => {
  return (
    <S.Main>
      <S.MainText>Welcome to Leder Stil Meister!</S.MainText>
      <S.Description>
        You have a set of elements, and you’d like to loop over them to generate
        a JSX partial. In templating languages, you can write a for loop
        directly inside the template. For example, you can use the following
        code to loop over a list in Jinja:
      </S.Description>
    </S.Main>
  )
}
