/**
 * Created by lai on 2016/7/15.
 */
import React from 'react';
import ReactDOM from 'react-dom';

import './css/index.less'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <div className='login-box'>
                <div className='logo'>logo</div>
                <div className='login-item'>
                    <label >用户名</label>
                    <input type="text" placeholder='输入用户名' />
                </div>
                <div className='login-item'>
                    <label >密码</label>
                    <input type="text" placeholder='输入用户密码' />
                </div>
                <div className='login-btn'>
                    <button>登录</button>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

