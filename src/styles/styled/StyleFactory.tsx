import { CSSProperties } from 'react'
import styled            from 'styled-components'



export namespace StyleFactory {
  export type TCss = {
    [K in keyof CSSProperties as `$${K}`]: CSSProperties[K]
  }
  export const transpiler = ( p: TCss ) =>
    Object.keys( p )
          .filter( key => key.startsWith( '$' ) )
          .map( key => `${
            key
              .slice( 1 )
              .replace( /([A-Z])/g, '-$1' )
          }: ${p[key as keyof typeof p]};` )
}

export const Elem = styled.div<StyleFactory.TCss>`
  ${p => StyleFactory.transpiler( p )}
`