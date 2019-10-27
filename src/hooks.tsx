import * as React from "react";


type Props = {}

export const MyComponent: React.FC<Props> = props => {
  return <div>{props.children}</div>
}
