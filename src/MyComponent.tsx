import * as React from "react";
import { render } from "react-dom";

interface FooProps {
  foo: number;
  bar?: undefined;
}

interface BarProps {
  foo?: undefined;
  bar: string;
}

type Props = FooProps | BarProps;

class MyComponent extends React.Component<Props> {}

const e1 = <MyComponent foo={123} />
const e2 = <MyComponent bar="foobar" />
const e3 = <MyComponent foo={123} bar="foobar" />
