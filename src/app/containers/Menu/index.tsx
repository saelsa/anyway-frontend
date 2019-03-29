import * as React from 'react';

export namespace Menu {
  export interface Props {
  }

  export interface State {
  }
}

export class Menu extends React.Component<Menu.Props, Menu.State> {
  constructor(props: Menu.Props, context?: any) {
    super(props, context);
    this.state = {};
  }


  render() {
    const { } = this.props;
    return <div>Menu</div>;
  }
}
