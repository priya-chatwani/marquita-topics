import React, { useEffect, useState } from 'react';
import TopicInfo from './TopicInfo';
import { Topic } from "../types/Topic";
import logo from '../images/logo.png';
import { Accordion, Spinner, Container } from 'react-bootstrap';
import "./App.css";
import { getIssuesAndResponses } from '../data/issuesAndResponses';

function App() {
  const [topics, setTopics] = useState<Topic[] | undefined>(undefined);

  useEffect(() => {
    setTopics(getIssuesAndResponses());
  }, []);


  return (
    <Container className="App-container">
      <header className="App-header">
        <img src={logo} alt="Marquita Bradshaw for US Senate Logo" className='App-logo'/>
        <p>Text Bank Topics</p>
      </header>
      <p className="App-text">Click on one of the topics below to view Marquita's response(s). When you click on a response, the text is copied to your clipboard.</p>
      {topics ? (
        <Accordion data-accordion>
          {topics.map((topic: Topic) =>
            <TopicInfo key={topic.name} topic={topic} />
          )}
        </Accordion>
      ) : (
        <Spinner className="App-loading" animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      )}
    </Container>
  );
}

export default App;