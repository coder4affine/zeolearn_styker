/* eslint-disable react/static-property-placement */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import TextInput from '../textInput/TextInput';
import Button from '../button/Button';
import styles from './styles';

export default class Form extends PureComponent {
  text = '';

  static propTypes = {
    onAddTodo: PropTypes.func.isRequired,
  };

  addTodo = e => {
    e.preventDefault();
    const { onAddTodo } = this.props;
    onAddTodo(this.textInput.value);
    this.textInput.value = '';
  };

  render() {
    return (
      <form onSubmit={this.addTodo}>
        <div style={styles.container}>
          <TextInput
            forwardRed={ref => {
              this.textInput = ref;
            }}
            type="text"
            name="text"
            style={{
              height: 30,
            }}
            placeholder="Please Write your TODO Here"
            required
          />
          <Button type="submit">
            <span>Add Todo</span>
          </Button>
        </div>
      </form>
    );
  }
}
