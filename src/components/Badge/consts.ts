import type { TTextSize, TTextTypes } from '../SVGIcons/types'

export const TEXT_SIZE_MAPPING: { [key: string]: TTextSize } = {
  large: 'standard',
  small: 'small'
}

export const COLOR_TYPE_MAPPING: { [key: string]: TTextTypes } = {
  transparent: 'tertiary',
  red: 'inverse',
  grey: 'secondary',
  greyDark: 'secondary',
  green: 'inverse'
}
