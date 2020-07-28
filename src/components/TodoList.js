import React from 'react'
import TodoForm from './TodoForm';
import Todo from './Todo';

export default class TodoList extends React.Component {

    state = {
        todos: []
    };

    addTodo = (todo) => {
        this.setState({
            todos: [todo, ...this.state.todos]
        })
    }

    handleComplete = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        complete: !todo.complete
                    };
                } else {
                    return todo;
                }
            })
        })
    }

    handleDeleteTodo = (id) => {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        })
    }

    render() {
        return <div>
            <TodoForm onSubmit={this.addTodo} />
            {this.state.todos.map(todo => (
                <Todo
                    key={todo.id}
                    toggleComplete={() => this.handleComplete(todo.id)}
                    onDelete={() => this.handleDeleteTodo(todo.id)}
                    todo={todo}
                />
            ))}
        </div>
    }
}