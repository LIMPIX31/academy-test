import React                                     from 'react'
import { ReactNode }                             from 'react'
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'

import * as theme                                from './theme'
import { GlobalStyles }                          from './global.styles'

export const ThemeProvider = ({ children }: { children: ReactNode }) => (
  <>
    <GlobalStyles />
    <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
  </>
)
