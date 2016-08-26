import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { HOC as hoc } from 'formsy-react'
import classNames from 'classnames'

class TextInput extends Component {

  constructor(props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    this.changeValue = this.changeValue.bind(this)
  }

  changeValue(e) {
    const value = e.target.value
    this.props.setValue(value)
    this.props.onChange(this.props.name, value)
  }

  render() {
    const { label, name, type, placeholder, wrapperClass } = this.props
    const hasError = !this.props.isPristine() && !this.props.isValid()
    const classes = classNames('tc-file-field__inputs', {error: hasError})
    const disabled = this.props.isFormDisabled() || this.props.disabled
    const errorMessage = this.props.getErrorMessage() || this.props.validationError

    return (
      <div className={wrapperClass}>
        <label className="tc-label">{label}</label>
        <input
          name={name}
          className={classes}
          type={type}
          placeholder={placeholder}
          value={this.props.getValue()}
          disabled={disabled}
          onChange={this.changeValue}
        />
      { hasError ? (<p className="error-message">{errorMessage}</p>) : null}
      </div>
    )
  }
}

TextInput.defaultProps = {
  onChange: () => {}
}

export default hoc(TextInput)
