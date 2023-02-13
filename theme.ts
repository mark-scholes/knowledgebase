import {buildLegacyTheme, defineConfig} from 'sanity'

const props = {
    '--my-white': '#FFF',
    '--my-black': '#1a1a1a',
    '--my-blue': '#1C97C2',
    '--my-red': '#db4437',
    '--my-yellow': '#f4b400',
    '--my-green': '#0f9d58',
  }
  
  export const myTheme = buildLegacyTheme({
    /* Base theme colors */
    '--black': props['--my-black'],
    '--white': props['--my-white'],
  
    '--gray': '#666',
    '--gray-base': '#666',
  
    '--component-bg': props['--my-white'],
    '--component-text-color': props['--my-black'],
  
    /* Brand */
    '--brand-primary': props['--my-blue'],
  
    // Default button
    '--default-button-color': props['--my-blue'],
    '--default-button-primary-color': props['--my-blue'],
    '--default-button-success-color': props['--my-green'],
    '--default-button-warning-color': props['--my-yellow'],
    '--default-button-danger-color': props['--my-red'],
  
    /* State */
    '--state-info-color': props['--my-blue'],
    '--state-success-color': props['--my-green'],
    '--state-warning-color': props['--my-yellow'],
    '--state-danger-color': props['--my-red'],
  
    /* Navbar */
    '--main-navigation-color': props['--my-white'],
    '--main-navigation-color--inverted': props['--my-black'],
  
    '--focus-color': props['--my-blue'],
  })
  
