import React from 'react';

import { Toolbar } from '../../../src';

export const Example = () => {

    const onEditBtnClick = () => {
        console.log('edit', '  <------------');
    }

    const onSaveBtnClick = () => {
        console.log('save', '  <------------');
    }

    return (
        <Toolbar
            onEditBtnClick={onEditBtnClick}
            onSaveBtnClick={onSaveBtnClick}
        />
    )

}
