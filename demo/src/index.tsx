import * as React from 'react'
import * as ReactDOM from 'react-dom'

import VirtualList from '../../src/'
import './demo.css'

class Demo extends React.Component {
  state = {
    scrollIdx: 1,
  }

  renderItem = ({
    style,
    index,
  }: {
    style: React.CSSProperties
    index: number
  }) => {
    return (
      <div className="Row" style={style} key={index}>
        Row #{index}
      </div>
    )
  }

  render() {
    const { scrollIdx } = this.state
    return (
      <div className="Root">
        <input
          type="text"
          value={scrollIdx}
          onChange={e => {
            this.setState({
              scrollIdx: e.target.value,
            })
          }}
          onBlur={() => {
            this.refs.scroller['scrollAnimTo'](
              this.refs.scroller['getOffsetForIndex'](Number(scrollIdx))
            )
          }}
        />
        <VirtualList
          ref="scroller"
          width="auto"
          height={300}
          itemCount={1000}
          renderItem={this.renderItem}
          itemSize={60}
          className="VirtualList"
          shouldScrollAlign
          scrollToAlignment="end"
          onAlign={index => {
            console.log('onAlign:', index)
          }}
        />
      </div>
    )
  }
}

ReactDOM.render(<Demo />, document.querySelector('#app'))
