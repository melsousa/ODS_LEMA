import React from 'react';
import { List, Datagrid, TextField, EmailField, ResourceComponentInjectedProps } from 'react-admin';

export const UserList = (props: ResourceComponentInjectedProps) => (
  <List >
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <EmailField source="email" />
    </Datagrid>
  </List>
);
