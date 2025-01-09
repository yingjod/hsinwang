import React, { Component } from 'react'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  // 当组件树中的任何组件抛出错误时，React 会调用 getDerivedStateFromError
  static getDerivedStateFromError(error) {
    // 更新 state 以便下次渲染时显示备用 UI
    return { hasError: true }
  }

  // componentDidCatch 会捕获错误并记录错误信息
  componentDidCatch(error, errorInfo) {
    // 你可以将错误信息记录到外部服务
    this.setState({ error, errorInfo })
  }

  render() {
    if (this.state.hasError) {
      // 渲染备用 UI
      return (
        <div>
          <h1>Something went wrong.</h1>
          <details>
            <summary>Click for details</summary>
            <pre>{this.state.error && this.state.error.toString()}</pre>
            <pre>{this.state.errorInfo.componentStack}</pre>
          </details>
        </div>
      );
    }

    return this.props.children// 正常渲染子组件
  }
}

export default ErrorBoundary
