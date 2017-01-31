# react-break-paragraph

### Props:

1. paragraph: String
2. renderPlaceholder: Function
3. renderLines: Function

### Usage

`import { BreakParagraph } from 'react-break-paragraph'; `

### Example:

```javascript
import React, { Component } from 'react';
import { BreakParagraph } from './components';
import { StaggeredMotion, spring } from 'react-motion'; // Just some animation

class App extends Component {

  render() {
    const renderLines = (lines) => {
      return (
        <StaggeredMotion
          defaultStyles={Array(lines.length).fill({ y: 39 })}
          styles={(styles) => styles.map((_, i) => {
            return i === 0 ? { y: spring(0) } : { y: spring(styles[i - 1].y) };
          })} >
          {(styles) =>
            <h1>
              {styles.map(({ y }, i) =>
                <span key={i}>
                  <span style={{
                    transform: `translateY(${y}px)`
                  }}>{lines[i]}</span>
                </span>
              )}
            </h1>
          }
        </StaggeredMotion>
      );
    };

    return (
      <div style={{
        width: '50vw'
      }}>
        <BreakParagraph
          renderPlaceholder={(children) => <h1>{children}</h1>}
          renderLines={renderLines}
          paragraph="This is a very long text. This is a very long text. This is a very long text. This is a very long text. This is a very long text. This is a very long text. This is a very long text."
        />
      </div>
    );
  }
}

export default App;

```
