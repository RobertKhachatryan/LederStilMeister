import React from "react"
import * as S from "./LandingSteps.styles"
import { StepData } from "./StepData"

export const LandingSteps = () => {
  console.log(StepData)
  return (
    <S.Main>
      {StepData.map(step => {
        if (step?.id === "2") {
          return (
            <S.StepBlock key={step?.id * Math.random()}>
              <S.StepText>{step?.text}</S.StepText>
              <S.StepNumber>{step?.number}</S.StepNumber>
            </S.StepBlock>
          )
        } else {
          return (
            <S.StepBlock key={step?.id * Math.random()}>
              <S.StepNumber>{step?.number}</S.StepNumber>
              <S.StepText>{step?.text}</S.StepText>
            </S.StepBlock>
          )
        }
      })}
    </S.Main>
  )
}
