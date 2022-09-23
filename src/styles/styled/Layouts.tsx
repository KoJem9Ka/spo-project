import styled, { css } from 'styled-components'
import { Property }    from 'csstype'
import { PickOne }     from '../../typeHelpers'



export const Container = css`
  padding-left  : calc((100% - 1200px) / 2);
  padding-right : calc((100% - 1200px) / 2);
`
type IndentsParams = PickOne<{
  vertical: string
  horizontal: string
  top: string
  right: string
  bottom: string
  left: string
}>
export const Indents = ( params: IndentsParams ) => css`
  ${params.vertical ? css`
    padding-top    : ${params.vertical};
    padding-bottom : ${params.vertical};
  ` : ''}
  ${params.horizontal ? css`
    padding-top    : ${params.horizontal};
    padding-bottom : ${params.horizontal};
  ` : ''}
  ${params.top ? css` padding-top : ${params.top}; ` : ''}
  ${params.right ? css` padding-right : ${params.right}; ` : ''}
  ${params.bottom ? css` padding-bottom : ${params.bottom}; ` : ''}
  ${params.left ? css` padding-left : ${params.left}; ` : ''}
`


type FlexProps = {
  dir?: Property.FlexDirection
  axis1?: Property.JustifyContent
  axis2?: Property.AlignItems
  gap?: Property.Gap
}
export const Flex = styled.div<FlexProps>`
  display : flex;
  ${( { dir } ) => dir && css` flex-direction : ${dir}; `}
  ${( { axis1 } ) => axis1 && css` justify-content : ${axis1}; `}
  ${( { axis2 } ) => axis2 && css` align-items : ${axis2}; `}
  ${( { gap } ) => gap && css` gap : ${gap}; `}
`

type SpaceProps = PickOne<{
  height: string
  width: string
}>
export const Gap = styled.div<SpaceProps>`
  ${( { height } ) => height && css`height : ${height};`}
  ${( { width } ) => width && css`width : ${width};`}
`