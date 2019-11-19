// index.js
import React from "react";

import { Button, Container, Card, Form } from 'react-bootstrap';
import "./style.css"


export function CardAnnouncements(props) {
  return <div className="card mt-5">
    <div className="card-body text-center">
      <h1 className="card-title">Current Announcement</h1>
      <h4 className="card-text">Announcements: {props.announcements}</h4>
    </div>
    <div>
      {props.children}
    </div>
  </div>;
}

export function CardAnnModify(props) {
  return <div className="card mt-5 mb-5">
    <div className="card-body text-center">
      <h3 className="card-title">Modify Announcements</h3>
      <h4>Enter the new announcement below:</h4>
    </div>
    <div>
      {props.children}
    </div>
  </div>;
}

export function CardStuMod(props) {
  return <Form data={props.student._id}>
    <Form.Check 
    type="switch"
    id="stuMod"
    label={props.student.name}
    />
  </Form>
}

export function CardTeaMod(props) {
  return <Form data={props.teacher._id}>
    <Form.Check 
    type="switch"
    id="stuMod"
    label={props.teacher.name}
    />
  </Form>
}



