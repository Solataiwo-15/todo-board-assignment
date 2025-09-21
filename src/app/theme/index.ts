import { extendTheme } from '@chakra-ui/react'

const colors = {
  brand: {
    primary: '#FFFFFF',      
    secondary: '#2D3748',       
    background: '#F7F7F7',
    PrimaryTextColor: '#464B50',
    SecondaryTextColor: '#1A1C1E',
    Green: '#75C5C1',
    LightGreen: '#75C5C1',
    VeryLightGreen: '#E9F5F7',
    BorderColor: '#CDD6E9',
    Purple: '#41245F',
    LightPurple: '#CFB7E8',
    VeryLightPurple: '#F9F3FF',
    Yellow: '#F6BE38',
    LightYellow: '#FBF4E4',
  },
}

export const theme = extendTheme({ colors })