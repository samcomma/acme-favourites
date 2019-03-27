import React, { Component } from 'react'

export default class UserCreate extends Component {

  constructor() {
    super()
    this.state = {
      name: '',
      error: ''
    }
  }

  onChange = (ev)=> {
    this.setState({[ev.target.name]: ev.target.value})
  }

  onSave = (ev)=> {
    ev.preventDefault()
    this.props.onSave(this.state)
      .then(()=> this.props.history.push('/users'))
      .catch( ex => this.setState({ error: 'there was an error' }))
  }

  render() {
    const { name, error } = this.state
    const { onChange, onSave } = this
    const disabled = name.length === 0

    console.log(error.length)

    return (
      <form onSubmit={ onSave }>
        {
          error && (<div>{ error }</div>)
        }

        <div>
          <label>Name</label>
          <input value={ name } name='name' onChange={ onChange }/>
        </div>
        <button disabled={ disabled }>Save</button>
      </form>
    )
  }

}

