import * as React from "react";
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { RestauranteCreate, RestauranteEdit, RestauranteList } from './restaurantes';
import { CategoriaList } from "./categorias";
import PostIcon from '@material-ui/icons/Book';
import { ItemsList, ItemCreate, ItemEdit } from "./items";
import { CategoriaCreate } from "./categorias";
import { CategoriaEdit } from "./categorias";




const dataProvider = jsonServerProvider('http://localhost:8081/api');


const App = () => (
  <Admin title="Administracion" dataProvider={dataProvider}>
    <Resource name="restaurantes" list={RestauranteList} create={RestauranteCreate} edit={RestauranteEdit} icon={PostIcon}/>
    <Resource name="categorias" list={CategoriaList} create={CategoriaCreate} edit={CategoriaEdit} icon={PostIcon}/>
    <Resource name="items" list={ItemsList} create={ItemCreate} edit={ItemEdit} icon={PostIcon}/>
  </Admin>
);


export default App;
