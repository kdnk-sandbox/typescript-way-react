import * as React from "react";
import { render } from "react-dom";

import "./styles.css";

interface State {
  isLoading: boolean;
  user?: {
    name: string;
  }
}

class App extends React.Component<{}, State> {
  state: State = {
    isLoading: true,
    user: undefined,
  };

  loadUserData = async () => {
    // return {
    //   name: 'Kodai',
    // }
    return undefined;
  }

  componentDidMount() {
    this.loadUserData().then(user => {
      this.setState({
        isLoading: false,
        user,
      });
    });
  }

  render() {
    if (this.state.isLoading) {
      return <p>読み込み中</p>
    }

    return <p>こんにちは、{this.state.user.name}</p>
  }
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
