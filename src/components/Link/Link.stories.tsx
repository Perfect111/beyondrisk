import Link, { LinkProps } from './Link'

export default {
  title: 'Components/Link',
  component: Link
}

const Template = (args: LinkProps): JSX.Element => <Link {...args} />
export const Standard: any = Template.bind({})
Standard.args = {
  text: 'Trouble connecting?',
  linkProps: {
    href: 'https://google.com',
    target: '_blank'
  }
}
