import * as React from "react";

interface Data1 {
  data: string;
}


interface Data2 {
  data: string;
}

type MaybeLoading<T> = {
  isLoading: true;
} | {
    isLoading: false;
    data: T;
  }

interface State {
  data1: MaybeLoading<Data1>,
  data2: MaybeLoading<Data2>,
}
class BigComponent extends React.Component<{}, State> {
  state: State = {
    data1: { isLoading: true },
    data2: { isLoading: true },
  };


  componentDidMount() {
    // data1とdata2の読み込みを行う
    const loadData1 = () => Promise.resolve();
    const loadData2 = () => Promise.resolve();
    this.load("data1", loadData1);
    this.load("data2", loadData2);
  }

  /**
   * 与えられた関数でデータを読み込んで与えられた名前のstateに突っ込む関数
   */
  load(stateName: string, loader: () => Promise<any>) {
    loader().then(data => {
      this.setState({
        [stateName]: {
          isLoading: false,
          data,
        },
      } as any); // ←ここは型エラーで怒られるのでanyでごまかす
    });
  }
  // ...
}
