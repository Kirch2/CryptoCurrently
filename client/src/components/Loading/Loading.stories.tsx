import React from "react";
import { Loading } from "./index";

export default {
  title: "Example/Loading",
  component: Loading,
};
//@ts-ignore
const Template = (args) => <Loading {...args} />;

export const Renders = Template.bind({});
//@ts-ignore
Renders.args = {};
