import { Provider } from 'react-redux'
import store from 'features/store'
import BrLayout from '../components/BrLayout/BrLayout'
import '/public/fonts.css'
import './index.scss'
import '/public/fonts/icons/style.css'
import '/public/fonts/logos/style.css'

const BeyondRiskApp = ({ Component, pageProps }: any): any => {
  return (
    <Provider store={store}>
      <BrLayout authenticationLayout>
        <Component {...pageProps} />
      </BrLayout>
    </Provider>
  )
}

export default BeyondRiskApp
