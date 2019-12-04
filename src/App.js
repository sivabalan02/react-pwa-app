import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
         Welcome to the react world. Used for testing pwa.
        </p>
      </header>
    </div>
  );
}

console.log(navigator.serviceWorker.addEventListener)
navigator.serviceWorker.addEventListener('message', function(event) {
        console.log("Got reply from service worker: " + event.data);
    });

if (window.BroadcastChannel) {
    console.log("testing111");

    let channel = new BroadcastChannel("sw-messages");
    if (window.BroadcastChannel) {
        console.log("sending111");
        channel.postMessage({type: 1, message: "New content available. Click to update"});
    }    

    channel.addEventListener('message', function (data) {
        console.log("tessst");
        if (data.type === 1) {
            alert(data.message);
        }
    });

    channel.addEventListener('messageerror', function (error) {
        console.error(error);
    });
}

export default App;
