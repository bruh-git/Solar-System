import React, { Component } from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {missions.map((el) => (<MissionCard
          key={ el.name }
          name={ el.name }
          year={ el.year }
          country={ el.country }
          destination={ el.destination }
        />))}
      </div>
    );
  }
}

export default Missions;
