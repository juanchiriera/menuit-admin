import * as React from "react";
import { Create, Edit, SimpleForm, TextInput, List, DateInput, ReferenceManyField, Datagrid, TextField, DateField, EditButton, NumberInput } from 'react-admin';
import RichTextInput from 'ra-input-rich-text';
import { parse } from "query-string";


export const ItemCreate = (props) => {
    const { categoriaId: categoriaId_string } = parse(props.location.search);
    const categoriaId = categoriaId_string ? parseInt(categoriaId_string, 10) : "";
    return (
        <Create {...props}>
            <SimpleForm defaultValue={{ categoriaId }}>
                <TextInput source="nombre" label="Comida" />
                <TextInput source="descripcion" label="Descripcion" />
                <TextInput source="precio" label="Precio" />
            </SimpleForm>
        </Create>
    );
}

export const ItemEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="nombre" label="Comida" />
            <TextInput source="descripcion" label="Descripcion" />
            <TextInput source="precio" label="Precio" />
        </SimpleForm>
    </Edit>
);

export const ItemsList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="nombre" label="Comida" />
            <TextField source="precio" label="Precio" />
        </Datagrid>
    </List>
);