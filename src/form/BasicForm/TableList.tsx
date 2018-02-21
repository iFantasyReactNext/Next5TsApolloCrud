import * as React from 'react';

export interface TableListProps {
  initData?: any
}

export default class TableList extends React.Component<TableListProps, any> {
  render() {
    console.log(this.props.initData)
    const Data = this.props.initData.map(v => {
      return <div key={v.name}><li>{v.name} {v.nickName}   </li></div>
    })
    return (
      <div>
        列表清單
        {Data}
      </div>
    );
  }
}
