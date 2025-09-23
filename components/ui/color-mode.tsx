'use client'

import type { IconButtonProps, SpanProps } from '@chakra-ui/react'
import {
  ClientOnly,
  IconButton,
  Skeleton,
  Span,
  ChakraProvider,
  defaultSystem,
} from '@chakra-ui/react'
import { ThemeProvider, useTheme } from 'next-themes'
import type { ThemeProviderProps } from 'next-themes'
import * as React from 'react'
import { LuMoon, LuSun } from 'react-icons/lu' // Assuming you're using react-icons for LuMoon/LuSun

export interface ColorModeProviderProps extends ThemeProviderProps {}

// Use defaultSystem from Chakra UI v3, or create a custom system if needed
// For now, we'll use defaultSystem to keep it simple
const system = defaultSystem

export function ColorModeProvider({ children, ...props }: ColorModeProviderProps) {
  return (
    <ThemeProvider {...props} attribute="class" defaultTheme="light">
      <ChakraProvider value={system}>{children}</ChakraProvider>
    </ThemeProvider>
  )
}

export type ColorMode = 'light' | 'dark'

export interface UseColorModeReturn {
  colorMode: ColorMode
  setColorMode: (colorMode: ColorMode) => void
  toggleColorMode: () => void
}

export function useColorMode(): UseColorModeReturn {
  const { resolvedTheme, setTheme, forcedTheme } = useTheme()
  const colorMode = (forcedTheme || resolvedTheme) as ColorMode
  const toggleColorMode = () => setTheme(colorMode === 'dark' ? 'light' : 'dark')
  return { colorMode, setColorMode: setTheme, toggleColorMode }
}

export function useColorModeValue<T>(light: T, dark: T) {
  const { colorMode } = useColorMode()
  return colorMode === 'light' ? light : dark
}

export function ColorModeIcon() {
  const { colorMode } = useColorMode()
  return colorMode === 'light' ? <LuMoon /> : <LuSun />
}

interface ColorModeButtonProps extends Omit<IconButtonProps, 'aria-label'> {}

export const ColorModeButton = React.forwardRef<HTMLButtonElement, ColorModeButtonProps>(
  function ColorModeButton(props, ref) {
    const { toggleColorMode } = useColorMode()
    return (
      <ClientOnly fallback={<Skeleton boxSize="9" />}>
        <IconButton
          onClick={toggleColorMode}
          variant="ghost"
          aria-label="Toggle color mode"
          size="sm"
          ref={ref}
          icon={<ColorModeIcon />}
          {...props}
        />
      </ClientOnly>
    )
  },
)

export const LightMode = React.forwardRef<HTMLSpanElement, SpanProps>(function LightMode(
  props,
  ref,
) {
  return <Span display="contents" className="chakra-theme light" ref={ref} {...props} />
})

export const DarkMode = React.forwardRef<HTMLSpanElement, SpanProps>(function DarkMode(props, ref) {
  return <Span display="contents" className="chakra-theme dark" ref={ref} {...props} />
})
