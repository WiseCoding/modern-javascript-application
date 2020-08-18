export default function windDir(windDegree) {
  let deg = [0];
  for (let i = 0; i < 16; i++) {
    deg.push(i * 22.5 + 11.25);
  }
  const direction = [
    'North',
    'North North East',
    'Nort Eeast',
    'East North East',
    'East',
    'East South East',
    'South East',
    'South South East',
    'South',
    'South South West',
    'South West',
    'West South West',
    'West',
    'West North West',
    'North West',
    'North North West',
  ];
  let windDir;
  for (let i = 0; i < deg.length; i++) {
    if (windDegree >= deg[i] && windDegree <= deg[i + 1]) {
      windDir = direction[i];
    }
  }
  return windDir;
}
