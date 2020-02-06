//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const age = (planet, seconds) => {
  
  // This conversion factor will give seconds
  const YEAR_TO_SECOND_CONV = 31557600

  let years = seconds / YEAR_TO_SECOND_CONV

  // Ojbect with planets and their orbital periods in earth years
  const PLANET_ORBITS = {
    mercury: 0.2408467,
    venus: 0.61519726,
    earth: 1,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132
  }

  // Calculate planet years fixed to two decimal places
  let planetYears = Number((years / PLANET_ORBITS[planet]).toFixed(2))

  return  planetYears
  
};

/* 
- Mercury: orbital period 0.2408467 Earth years
- Venus: orbital period 0.61519726 Earth years
- Earth: orbital period 1.0 Earth years, 365.25 Earth days, or 31,557,600 seconds
- Mars: orbital period 1.8808158 Earth years
- Jupiter: orbital period 11.862615 Earth years
- Saturn: orbital period 29.447498 Earth years
- Uranus: orbital period 84.016846 Earth years
- Neptune: orbital period 164.79132 Earth years
*/