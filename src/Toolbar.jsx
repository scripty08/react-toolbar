import React from 'react';

import styled from 'styled-components';
import { AddButton, DeleteButton, EditButton, MoveButton, SaveButton } from '@scripty/react-buttons';

const Container = styled.div`
    padding: 8px;
    border-top: 1px solid #dedede;
    border-bottom: 1px solid #dedede;
    background-color: #1F517F;
    button {
        margin: 0 3px;
    };
`;

export const Toolbar = (props) => {
    const {
        children,
        onAddBtnClick,
        onEditBtnClick,
        onSaveBtnClick,
        onDeleteBtnClick,
        onMoveBtnClick,
        visible = false
    } = props;

    const getButtons = () => {
        const buttons = [];

        if (typeof onAddBtnClick !== 'undefined') {
            buttons.push(<AddButton onClick={onAddBtnClick}/>);
        }
        if (typeof onEditBtnClick !== 'undefined') {
            buttons.push(<EditButton onClick={onEditBtnClick} color={'#fff'}/>);
        }
        if (typeof onSaveBtnClick !== 'undefined') {
            buttons.push(<SaveButton onClick={onSaveBtnClick} color={'#12a525'}/>);
        }
        if (typeof onDeleteBtnClick !== 'undefined') {
            buttons.push(<DeleteButton onClick={onDeleteBtnClick} color={'#c40000'}/>);
        }
        if (typeof onMoveBtnClick !== 'undefined') {
            buttons.push(<MoveButton onClick={onMoveBtnClick}/>);
        }

        return buttons;
    }

    return (visible) ? (
            <Container className={'col-12'}>
                {getButtons()}
                {children}
            </Container>
        ) : null
}
