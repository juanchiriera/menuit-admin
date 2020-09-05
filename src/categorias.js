import * as React from "react";
import { Create, Resource, Button, Edit, SimpleForm, TextInput, List, ReferenceField, ReferenceManyField, Datagrid, TextField, DateField, EditButton } from 'react-admin';
import { Link } from 'react-router-dom';
import { parse } from "query-string";



export const CategoriaList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="nombre" label="Categoria" />
        </Datagrid>
    </List>
);

export const CategoriaCreate = (props) => {
    const { restauranteId: restauranteId_string } = parse(props.location.search);
    const restauranteId = restauranteId_string ? parseInt(restauranteId_string, 10) : "";
    return (
        <Create {...props}>
            <SimpleForm defaultValue={{ restauranteId }}>
                <TextInput source="nombre" label="Categoria" />
            </SimpleForm>
        </Create>
    );
}

export const CategoriaEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="nombre" label="Categoria" />
            <ReferenceManyField
                addLabel={false}
                reference="items"
                target="categoriaId"
                sort={{ field: "id", order: "DESC" }}
            >
                <Datagrid>
                    <TextField source="nombre" />
                    <TextField source="descripcion" />
                    <TextField source="precio" />
                    <EditButton />
                </Datagrid>
            </ReferenceManyField>
            <NuevoItemBoton />
        </SimpleForm>
    </Edit>
);

const NuevoItemBoton = ({ record }) => (
    <Button
        component={Link}
        to={`/items/create?categoriaId=${record.id}`}
        label="Agregar un Item"
        title="Agregar un Item"
    />
);