import Alert from './alert'
import Footer from './footer'
import Meta from './meta'
import styled from 'styled-components'
import theme from '../components/Theme'

const OuterContainer = styled.div`
background: ${theme.colours.green};
`

export default function PageWrapper({ preview, children }) {
  return (
    <>
      <Meta />
      <OuterContainer>
        <div className="min-h-screen">
          <Alert preview={preview} />
          <main>{children}</main>
        </div>
        <Footer />
      </OuterContainer>
    </>
  )
}
