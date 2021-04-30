import { FC } from 'react'
import * as S from './styles'

interface iProps {
  title?: string
  description?: string
}

const Main: FC<iProps> = ({
  title = 'React Avanzado',
  description = 'Typescript, React, NextJS and Styled Components'
}) => (
  <S.Wrapper>
    <S.Logo src="/img/logo.svg" />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration src="/img/hero-illustration.svg" alt="Coding" />
  </S.Wrapper>
)

export default Main
