import TestemonialGallery, {
  TestemonialGalleryProps
} from './TestemonialGallery'

export default {
  title: 'Widgets/TestemonialGallery',
  component: TestemonialGallery,
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#212121' }]
    }
  }
}

const testemonialsData = [
  {
    text: 'BeyondRisk is helping cybersecurity and IT risk professionals solve two.',
    image: 'https://mui.com/static/images/avatar/1.jpg',
    fullName: 'Darth Vader',
    title: 'CISO',
    companyName: 'Yum! Brands'
  },
  {
    text: 'BeyondRisk is helping cybersecurity and IT risk professionals solve two, long-standing problems: accurately assessing and quantifying enterprise risk.',
    image: 'https://mui.com/static/images/avatar/2.jpg',
    fullName: 'King Arthur',
    title: 'CISO',
    companyName: 'Yum! Brands'
  },
  {
    text: 'BeyondRisk is helping cybersecurity and IT risk professionals solve two, long-standing problems: accurately assessing and quantifying enterprise risk. BeyondRisk is helping cybersecurity and IT risk professionals solve two.',
    image: 'https://mui.com/static/images/avatar/3.jpg',
    fullName: 'Elias Oxendine',
    title: 'CISO',
    companyName: 'Yum! Brands'
  }
]

const Template = (args: TestemonialGalleryProps): JSX.Element => (
  <TestemonialGallery {...args} />
)
export const Gallery: any = Template.bind({})
Gallery.args = {
  testemonials: testemonialsData
}

export const SingleTestemonial: any = Template.bind({})
SingleTestemonial.args = {
  testemonials: [testemonialsData[0]]
}

export const LoadingGallery: any = Template.bind({})
LoadingGallery.args = {
  loading: true
}

export const Animated: any = Template.bind({})
Animated.args = {
  testemonials: testemonialsData,
  animated: true
}
