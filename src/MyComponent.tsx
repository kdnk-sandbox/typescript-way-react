import * as React from "react";

interface CommonProps {
  hoge: string;
  fuga: string;
}

interface FooProps {
  foo: number;
  bar?: undefined;
}

interface BarProps {
  foo?: undefined;
  bar: string;
}

type Props = CommonProps & (FooProps | BarProps);

class MyComponent extends React.Component<Props> {
  render() {
    const props = this.props;
    if (props.foo != undefined) {
      return <p>foo is {props.foo}</p>;
    } else {
      return <p>bar's length is {props.bar.length}</p>
    }
  }
}

const e1 = <MyComponent hoge="foo" fuga="bar" foo={123} />
const e2 = <MyComponent hoge="foo" fuga="bar" bar="foobar" />
const e3 = <MyComponent hoge="foo" fuga="bar" foo={123} bar="foobar" />
