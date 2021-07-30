/* eslint-disable */
import React, {useState} from 'react';
import Day from './component/Day';
import DayList from './component/DayList';
import Header from './component/Header';
import {BrowserRouter, Route, Switch } from "react-router-dom";
import EmptyPage from './component/EmptyPage';
import CreateWord from './component/CreateWord';
import CreateDay from './component/CreateDay';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <DayList />
        </Route>
        <Route path="/day/:day">
          {/* day가 1로 들어왔을때 day에 대한걸 가져온다 */}
          <Day />
        </Route>
        <Route path="/create_word">
          <CreateWord />
        </Route>
        <Route path="/create_day">
          <CreateDay />
        </Route>
        <Route>
          <EmptyPage />
        </Route>
      </Switch> 
    </div>
    </BrowserRouter>
  );
}

export default App;
