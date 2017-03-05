import React, {Component} from 'react';
import './App.css';
import Timer from './Timer';

class App extends Component {
    constructor(props) {
        super(props);
        //intialize state of Component
        this.state = {
            tasks: [],
            desc: ""
        };
        // this.setState = ({
        //     tasks: [],
        //     desc: ""
        // });

        this.addTask = this.addTask.bind(this);
        this.changeDesc = this.changeDesc.bind(this);
    }

    addTask() {
        let task = {};
        task.countDown = 120;
        task.desc = this.state.desc;
        if(task.desc) {
            task.shouldRun = true;
            this.state.tasks.push(task)
            this.setState({task: this.state.tasks, desc: ""});
        }

    }

    pauseClock(index) {
        this.state.tasks[index].shouldRun = !this.state.tasks[index].shouldRun;
        this.setState({tasks: this.state.tasks})
    }

    changeDesc(event) {
        this.setState({desc: event.target.value});
    }

    render() {
        let taskList = this.state.tasks.map((task, index) => {
            return <li className="constyle"> <span className="task_text text-left">{task.desc}</span> <Timer start={task.countDown} shouldRun={task.shouldRun}></Timer>
                <button className="btn btn-default" onClick={this.pauseClock.bind(this, index)}> <span className="glyphicon glyphicon-pause"></span></button>
            </li>;
        })
        return (
            <div className="App">
                <div className="App-header">
                    <h2>Task Timer</h2>
                    <div className="form-inline">
                        <div className="form-group" >
                            <input name="task" className="form-control" placeholder="Enter Task name"
                                   onChange={this.changeDesc}/>
                            <button className="btn btn-default" onClick={this.addTask}>Add Task</button>
                        </div>
                    </div>
                </div>
                <div>
                    <ul className="ul">{taskList}</ul>
                </div>
            </div>
        );
    }
}

export default App;
