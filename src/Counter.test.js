import React from 'react';
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'; 
import Counter from "./Counter";


describe('Counter Component', () => {
    // test intial Rendering with counter value
    test('render intial value as 0', () => {
        render(<Counter />)
        expect(screen.getByText('you clicked count 0')).toBeInTheDocument();
    });

    // test increment button functionality
    test('increments count value when plus button is clicked', () => {
        render(<Counter />);
        userEvent.click(screen.getByText('Plus'));
        expect(screen.getByText('you clicked count 1')).toBeInTheDocument();
    });

    // test decrement button functionality
    test('decrements count value when Minus button is clicked', () => {
        render(<Counter />);
        userEvent.click(screen.getByText('minus'));
        expect(screen.getByText('you clicked count -1')).toBeInTheDocument();
    });

})