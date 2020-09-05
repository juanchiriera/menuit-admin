import * as React from "react";
import { Create, Resource, Edit, SimpleForm, TextInput, List, ReferenceField, ReferenceManyField, Datagrid, TextField, DateField, EditButton, Button } from 'react-admin';
import RichTextInput from 'ra-input-rich-text';
import { Link } from 'react-router-dom';
import { search } from "global-prefix";


export const RestauranteCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="nombre" label="Restaurante" />
            {/* <TextInput source="teaser" options={{ multiLine: true }} /> */}
            {/* <RichTextInput source="Descripcion" /> */}
            {/* <DateInput label="Publication date" source="published_at" defaultValue={new Date()} /> */}
        </SimpleForm>
    </Create>
);

const NuevaCategoriaBoton = ({ record }) => (
    <Button
        component={Link}
        to={`/categorias/create?restauranteId=${record.id}`}
        label="Agregar una Categoria"
        title="Agregar una Categoria"
    />
    //TODO: Agregar un icono
);


export const RestauranteEdit = (props, categorias) => (
    <Edit {...props}>
        <SimpleForm>
            {/* <TextInput disabled label="Id" source="id" /> */}
            <TextInput source="nombre" label="Restaurante" />
            {/* <TextInput multiline source="teaser" />
            <RichTextInput source="body" />
            <DateInput label="Publication date" source="published_at" /> */}
            <ReferenceManyField
                addLabel={false}
                reference="categorias"
                target="restauranteId"
                sort={{ field: "id", order: "DESC" }}
            >
                <Datagrid>
                    <TextField source="nombre" />
                    <EditButton />
                </Datagrid>
            </ReferenceManyField>
            <NuevaCategoriaBoton />
        </SimpleForm>

    </Edit>
);

export const RestauranteList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="nombre" label="Restaurante" />
        </Datagrid>
    </List>
);