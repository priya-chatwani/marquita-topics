import React from 'react';
import { Accordion, Card, ListGroup } from 'react-bootstrap';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Topic } from "../types/Topic";
import "./TopicInfo.css";

type Props = {
    topic: Topic;
}

export default function TopicInfo({topic}: Props) {
    return (
        <Card>
            <Accordion.Toggle as={Card.Header} variant="button" eventKey={topic.name} style={{cursor: 'pointer'}}>
                <b>{topic.name}</b>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={topic.name}>
                <Card.Body className="mb-2 text-muted">
                    <ListGroup>
                        {topic.responses.map((response) =>
                            <CopyToClipboard text={response}>
                                <button className="Response">{response}</button>
                            </CopyToClipboard>
                        )}
                    </ListGroup>
                </Card.Body>
            </Accordion.Collapse>
        </Card>
	);
}