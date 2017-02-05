import React, { Component, PropTypes } from 'react';

export default class BreakParagraph extends Component {
  static propTypes = {
    paragraph: PropTypes.string.isRequired,
    renderPlaceholder: PropTypes.func.isRequired,
    renderLines: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.spans = [];
    this.state = {
      breakParagraph: false
    };
  }

  componentDidMount() {
    setTimeout(()=>{
      this.breakPara();
    });
    window.onresize = () => setTimeout(() => this.breakPara());
  }

  breakPara = () => {
    let lines = [];
    let tops = [];
    this.spans.forEach((span) => {
      const _offsetTop = span.offsetTop;
      let topIndex = tops.indexOf(_offsetTop);
      if (topIndex > -1) {
        if (!lines[topIndex]) lines[topIndex] = [];
        lines[topIndex].push(span.innerText.trim());
      } else {
        topIndex = tops.length;
        tops[tops.length] = _offsetTop;
        if (!lines[topIndex]) lines[topIndex] = [];
        lines[topIndex].push(span.innerText.trim());
      }
    });

    lines = lines.map(line => line.join(' '));
    // console.log(lines);

    this.setState({
      breakParagraph: true,
      lines
    });
  };

  render() {
    const { breakParagraph, lines } = this.state;
    const { paragraph, renderPlaceholder, renderLines } = this.props;

    const spans = paragraph
      .split(' ')
      .map((word, i) => <span
        style={{ pointerEvents: 'none' }}
        key={i}
        ref={elem => this.spans[i] = elem}>{word + ' '}</span>);
    return (
      <div style={{
        width: '100%',
        position: 'relative',
        padding: 0
      }}>
        <div style={{
          opacity: 0,
          position: 'absolute',
          width: '100%'
        }}>
          {renderPlaceholder(spans)}
        </div>
        { breakParagraph && renderLines(lines) }
      </div>
    );
  }
}
