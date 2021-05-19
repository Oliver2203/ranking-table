import React, { Fragment } from 'react';
import './App.scss';

import Header from './components/Header';
import Table from './components/Table';

const driversData = [
  {
    number: 1,
    name: 'Banh Trang Tron',
    country: 'Vietnam',
    Voted: '10,000,000'
  },
  {
    number: 2,
    name: 'Hu Tieu',
    country: 'Vietnam',
    Voted: '9,000,000'
  },
  {
    number: 3,
    name: 'Masala dosa',
    country: 'India',
    Voted: '8,000,000'
  },
  {
    number: 4,
    name: 'Rendang',
    country: 'Indonesia',
    Voted: '7,000,000'
  },
  {
    number: 5,
    name: 'Tom yum goong',
    country: 'Thailands',
    Voted: '6,000,000'
  },
  {
    number: 6,
    name: 'Hamburger',
    country: 'German',
    Voted: '5,000,000'
  },
  {
    number: 7,
    name: 'Penang assam laksa',
    country: 'Malaysia',
    Voted: '4,000,000'
  },
  {
    number: 8,
    name: 'Com tam',
    country: 'Vietnam',
    Voted: '3,000,000'
  },
  {
    number: 9,
    name: 'Sushi',
    country: 'Japan',
    Voted: '2,000,000'
  },
  {
    number: 10,
    name: 'Neapolitan pizza',
    country: 'Italy',
    Voted: '1,000,000'
  },
];

const tracksData = [
  {
    name: 'Foody',
    country: 'Vietnam',
    Interactions: 10.972,
    
  },
  {
    name: 'TripAdvisor',
    country: 'United States',
  Interactions: 9.268
  },
  {
    name: 'Zomato',
    country: 'England',
    Interactions: 5.891,
  },
  {
    name: 'The Infatuation',
    country: 'United States',
    Interactions: 5.807,
  },
];

const App = () => {
  return (
    <Fragment>
      <Header title="Ranking Table" />
      <Table 
        tableData={driversData}
        headingColumns={['#', 'Name', 'Country', 'Voted']}
        title="Top foods of the week"
      />
      <Table 
        tableData={tracksData}
        headingColumns={['Website', 'Country', 'Interactions']}
        title="Top website"
        breakOn="small"
      />
    </Fragment>
  );
}

export default App;