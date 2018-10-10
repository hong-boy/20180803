import React, { Component } from 'react';

// import Counter from '@components/Counter/Counter.container.js';
// import Counter from '@components/CounterAsync/Counter.container.js';
import Counter from '@components/CounterSaga/Counter.container.js';

class App extends Component {
    render() {
        return (
            <div>
                <Counter/>
            </div>
        );
    }
}

export default App;