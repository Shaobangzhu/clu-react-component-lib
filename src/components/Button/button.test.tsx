import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button, { ButtonProps, ButtonSize, ButtonType } from './button';

const defaultProps = {
    onClick: jest.fn()
}

const testProps: ButtonProps = {
    btnType: ButtonType.Primary,
    size: ButtonSize.Large,
    className: 'klass'
}

const disabledProps: ButtonProps = {
    disabled: true,
    onClick: jest.fn()
}

describe('Test Button Component', () => {
    it('Should render the correct default button', () => {
        const wrapper = render(<Button {...defaultProps}>TestBtn</Button>);
        const element = wrapper.getByText('TestBtn');
        expect(element).toBeInTheDocument();
        expect(element.tagName).toEqual('BUTTON');
        expect(element).toHaveClass('btn btn-default');
        fireEvent.click(element);
        expect(defaultProps.onClick).toHaveBeenCalled();
    }),
    it('Should render the correct component based on different props', () => {
        const wrapper = render(<Button {...testProps}>TestBtn</Button>);
        const element = wrapper.getByText('TestBtn');
        expect(element).toBeInTheDocument();
        expect(element).toHaveClass('btn-primary btn-lg klass');
    }),
    it('Should render a link when btnType equals link and href is provided', () => {
        const wrapper = render(<Button btnType={ButtonType.Link} href="https://www.extron.com/">Link</Button>)
        const element = wrapper.getByText('Link');
        expect(element).toBeInTheDocument();
        expect(element.tagName).toEqual('A');
        expect(element).toHaveClass('btn btn-link');
    }),
    it('Should render disabled button when disabled set to true', () => {
        const wrapper = render(<Button {...disabledProps}>TestBtn</Button>);
        const element = wrapper.getByText('TestBtn') as HTMLButtonElement;
        expect(element).toBeInTheDocument();
        expect(element.disabled).toBeTruthy();
        fireEvent.click(element);
        expect(disabledProps.onClick).not.toHaveBeenCalled();
    })
})