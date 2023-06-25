import React from 'react';
import '../Styles.css/goals.css';
import {Button} from 'react-bootstrap';

const Goals = () => {
  return <section className="goals" id='goals'>
    <h3 className="end">SET THE GOALS</h3>
    <h3 className="end">LOG WORKOUTS</h3>
    <h3 className="end of">STAY ON TRACK</h3>
    <Button variant='secondary'>Download</Button>
  </section>
}

export default Goals