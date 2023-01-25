import {useState} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

    return (
        <div className="App">
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src="/vite.svg" className="logo" alt="Vite logo"/>
                </a>
                <a href="https://reactjs.org" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                This is a CI tutorial with node
                <br/>
                <a href="https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions"
                   target="_blank">
                    learning about github actions
                </a>
            </div>
            <div className="card">
                <ul>
                    <li>Steps: Actions Vs run</li>
                    <li><a href="https://github.com/actions/setup-node" target="_blank">setup-node action"</a></li>
                </ul>
            </div>

        </div>
    )
}

export default App
