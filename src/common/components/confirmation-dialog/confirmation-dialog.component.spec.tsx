import * as React from 'react';
import { ConfirmationDialogComponent, Props } from './confirmation-dialog.component';
import { render,screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('common/ConfirmationDialogComponent', () => {
    const props : Props= {
        isOpen: true,
        onAccept: jest.fn(),
        onClose: jest.fn(),
        title: 'Confirmation',
        labels: {
        closeButton: 'Close',
        acceptButton: 'Accept'
        },  
        children: null
      };
  
  it('should be render dialog as expected passing required properties', () => {
    // Arrange
    // Act
    render(<ConfirmationDialogComponent {...props}>Test children</ConfirmationDialogComponent>);
    const dialogElement = screen.getByRole('dialog');
  
    //Assert
     expect(dialogElement).toBeInTheDocument();

  });
   it('should no be render dialog when isOpen is false', () => {
    // Arrange
     const propsClose : Props= {
        isOpen: false,
        onAccept: jest.fn(),
        onClose: jest.fn(),
        title: 'Confirmation',
        labels: {
        closeButton: 'Close',
        acceptButton: 'Accept'
        },  
        children: null
      };
    // Act
    render(<ConfirmationDialogComponent {...propsClose}>Test children</ConfirmationDialogComponent>);
   screen.debug();
    //Assert
     expect(screen.queryByRole('dialog')).not.toBeInTheDocument();

  });

  it('should be render close button as expected passing required properties', () => {
    // Arrange
    // Act
    render(<ConfirmationDialogComponent {...props}>Test children</ConfirmationDialogComponent>);
    const buttonCloseElement = screen.getByRole('button', { name:/Close/i,})
  
    //Assert
     expect(buttonCloseElement).toBeInTheDocument();

  });

   it('should be render title as expected passing required properties', () => {
    // Arrange
    // Act
    render(<ConfirmationDialogComponent {...props}>Test children</ConfirmationDialogComponent>);
    const element = screen.getByRole('heading', { name: 'Confirmation' });
    expect(element).not.toBeNull();
    expect(element.tagName).toEqual('H2');
   });
   
   it('should be render accept button as expected passing required properties', () => {
    // Arrange
    // Act
    render(<ConfirmationDialogComponent {...props}>Test children</ConfirmationDialogComponent>);
    const buttonAcceptElement = screen.getByRole('button', { name:/Accept/i,})
  
    //Assert
     expect(buttonAcceptElement).toBeInTheDocument();

  });

  it('should call onAccept when it click Accept button', async() => {
    // Arrange
    // Act
    render(<ConfirmationDialogComponent {...props}>Test children</ConfirmationDialogComponent>);
    const buttonAcceptElement = screen.getByRole('button', { name:/Accept/i,});
    await userEvent.click(buttonAcceptElement);
  
    //Assert
     expect(props.onAccept).toHaveBeenCalled();

  });

   it('should call onclose when it click Close button', async() => {
    // Arrange
    // Act
    render(<ConfirmationDialogComponent {...props}>Test children</ConfirmationDialogComponent>);
    const buttonCloseElement = screen.getByRole('button', { name:/Close/i,});
    await userEvent.click(buttonCloseElement);
    //Assert
     expect(props.onClose).toHaveBeenCalled();

  });
});


































































































































































































































































































































































































































































































































































































































































































