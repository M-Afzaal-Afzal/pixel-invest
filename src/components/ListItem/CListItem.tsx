import React from 'react';
import {ListItem, ListItemProps} from "@chakra-ui/react";

const CListItem = ({children, ...props}: ListItemProps) => {
    return (
        <ListItem fontWeight={'light'}
                  fontSize={'1.2rem'}
                  {...props}
        >
            {children}
        </ListItem>
    );
};

export default CListItem;
