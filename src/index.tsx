import * as React from "react";
import { render } from "react-dom";

import "./styles.css";

// interface State {
//   isLoading: boolean;
//   user?: {
//     name: string;
//   }
// }

interface State {
  user: {
    isLoading: false;
    name: string;
  } | {
    isLoading: true;
  }
}


class App extends React.Component<{}, State> {
  state: State = {
    user: {
      isLoading: true,
    }
  };

  loadUserData = async () => {
    return {
      name: 'Kodai',
    }
  }

  componentDidMount() {
    this.loadUserData().then(user => {
      this.setState({
        user: {
          isLoading: false,
          name: user.name,
        }
      });
    });
  }

  render() {
    if (this.state.user.isLoading) {
      return <p>読み込み中</p>
    }

    return <p>こんにちは、{this.state.user.name}</p>
  }
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
