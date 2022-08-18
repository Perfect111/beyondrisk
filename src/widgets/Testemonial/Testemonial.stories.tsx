import Testemonial, { TestemonialProps } from './Testemonial'

export default {
  title: 'Widgets/Testemonial',
  component: Testemonial,
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#212121' }]
    }
  }
}

const Template = (args: TestemonialProps): JSX.Element => (
  <Testemonial {...args} />
)
export const Default: any = Template.bind({})
Default.args = {
  testemonial: {
    text: 'BeyondRisk is helping cybersecurity and IT risk professionals solve two, long-standing problems: accurately assessing and quantifying enterprise risk.',
    image: 'https://mui.com/static/images/avatar/1.jpg',
    fullName: 'Elias Oxendine IV',
    title: 'CISO',
    companyName: 'Yum! Brands'
  }
}

export const Loading: any = Template.bind({})
Loading.args = {
  loading: true
}
