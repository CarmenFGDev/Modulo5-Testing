import { act, renderHook } from '@testing-library/react';
import {useConfirmationDialog} from './confirmation-dialog.hook';
import { createEmptyLookup, Lookup } from 'common/models';

describe('useConfirmationDialog specs',() =>{
    it('should return an object with values isOpen, itemToDelete, onAccept, onClose, onOpenDialog', ()=>{
        //Arrange
        //Act
        const {result} = renderHook(()=> useConfirmationDialog());
        //Assert
        expect(result.current.isOpen).toBeFalsy();
        expect(result.current.itemToDelete).toEqual(createEmptyLookup());
        expect(result.current.onAccept).toEqual(expect.any(Function));
        expect(result.current.onClose).toEqual(expect.any(Function));
        expect(result.current.onOpenDialog).toEqual(expect.any(Function));

     })

    it('when onAccept is called itemToDelete should be emptyLookup', ()=>{
        //Arrange
        //Act
        const {result} = renderHook(()=> useConfirmationDialog());
        result.current.onAccept();
        //Assert
        expect(result.current.itemToDelete).toEqual(createEmptyLookup());
    })

    it('when onClose is called isOpen should be false', ()=>{
        //Arrange
        //Act
        const {result} = renderHook(()=> useConfirmationDialog());
        result.current.onClose();
        //Assert
         expect(result.current.isOpen).toBeFalsy();
    })

    it('when onOpenDialog is called isOpen should be true and itemToDelete has value',()=>{
        //Arrange
        const item: Lookup ={ id:'1', name:'name1'} ;
        //Act
        const {result} = renderHook(()=> useConfirmationDialog());
        act(() => {
        result.current.onOpenDialog(item);
         });
        //Assert
        expect(result.current.isOpen).toBeTruthy();
         expect(result.current.itemToDelete).toEqual(item);

    })

    it('when setIsOpen is called with false', ()=> {
        //Arrange
        //Act
        const {result} = renderHook(()=> useConfirmationDialog());
        act(() => {
            result.current.setIsOpen(false);
        });
        //Assert
         expect(result.current.isOpen).toBeFalsy();
    })

    it('when setIsOpen is called with true', ()=> {
        //Arrange
        //Act
        const {result} = renderHook(()=> useConfirmationDialog());
        act(() => {
            result.current.setIsOpen(true);
        });
        //Assert
         expect(result.current.isOpen).toBeTruthy();
    })
    
    it('when setItemToDelete is called with a item',()=> {
        //Arrange
        const item: Lookup ={ id:'1', name:'name1'} ;
        //Act
        const {result} = renderHook(()=> useConfirmationDialog());
        act(() => {
        result.current.setItemToDelete(item);
         });
        //Assert
        expect(result.current.itemToDelete).toEqual(item);

    })
})