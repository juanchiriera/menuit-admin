import * as React from "react";
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';


const dataProvider = jsonServerProvider('http://localhost/api');


const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="restaurantes" list={ListGuesser}/>
  </Admin>
);


export default App;
