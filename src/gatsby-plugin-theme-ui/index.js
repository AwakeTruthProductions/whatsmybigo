// example theme
import { tailwind, tosh } from '@theme-ui/presets'

export default {
  ...tailwind,
  fonts: {
    ...tosh.fonts
  },
  forms: {
    select: {
      marginBottom: 16
    }
  }
}