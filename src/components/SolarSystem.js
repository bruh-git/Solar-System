import React, { Component } from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <div className="container-planet-card">
          {planets.map((el) => (<PlanetCard
            key={ el.name }
            planetName={ el.name }
            planetImage={ el.image }
          />))}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
