import React, { Component } from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends Component {
  render() {
    // const { name, image } = planets;
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {planets.map((el) => <PlanetCard 
          key={ el.name }
          planetName={ el.name }
          planetImage={ el.image }
        / >)}
      </div>
    );
  }
}

export default SolarSystem;
