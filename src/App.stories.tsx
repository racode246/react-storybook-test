import { ComponentStory, ComponentMeta } from "@storybook/react";
import AppPage from './App'

export default {
  title: 'App/Page',
  component: AppPage
} as ComponentMeta<typeof AppPage>

const Template: ComponentStory<typeof AppPage> = () => <App />

export const App = Template.bind({})
