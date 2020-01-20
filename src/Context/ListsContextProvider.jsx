import React from 'react';
import withDataFetching from '../withDataFetching';

export const ListsContext = React.createContext();

const ListsContextProvider = ({ children, data }) => (
    <ListsContext.Provider value = {{ lists: data }}>
      {children}
    </ListsContext.Provider>
);

export withDataFetching({
    dataSource: 'https://my-json-server.typicode.com/PacktPublishing/React-Projects/lists',
})(ListsContextProvider);
