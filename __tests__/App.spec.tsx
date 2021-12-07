import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import App from '../src/App';
import PersonSearch from '../src/components/PersonSearch';
import NoMatch from '../src/components/NoMatch';

jest.mock('../src/components/PersonSearch', () => {
	return jest.fn(() => null);
});
jest.mock('../src/components/NoMatch', () => {
	return jest.fn(() => null);
});

const mockCounter = jest.fn();
jest.mock('../src/components/ModeSwitcher', () => {
	return function DummyModeSwitcher(props: any) {
		mockCounter(props);
		const { handleClick } = props;
		return (
			<button type="submit" onClick={handleClick}>
				DummyButton
			</button>
		);
	};
});

describe('The App component', () => {
	it('Initially sends darkMode false to ModeSwitcher', () => {
		render(
			<MemoryRouter>
				<App />
			</MemoryRouter>
		);

		expect(mockCounter).toHaveBeenCalledTimes(1);
		expect(mockCounter).toHaveBeenLastCalledWith(
			expect.objectContaining({
				darkMode: false,
			})
		);
	});

	it('Calls modeSwitcher again with switched theme if callBack is called', () => {
		render(
			<MemoryRouter>
				<App />
			</MemoryRouter>
		);

		expect(mockCounter).toHaveBeenCalledTimes(1);
		expect(mockCounter).toHaveBeenLastCalledWith(
			expect.objectContaining({
				darkMode: false,
			})
		);

		const button = screen.getByText('DummyButton');

		userEvent.click(button);

		expect(mockCounter).toHaveBeenCalledTimes(2);
		expect(mockCounter).toHaveBeenLastCalledWith(
			expect.objectContaining({
				darkMode: true,
			})
		);

		userEvent.click(button);

		expect(mockCounter).toHaveBeenCalledTimes(3);
		expect(mockCounter).toHaveBeenLastCalledWith(
			expect.objectContaining({
				darkMode: false,
			})
		);
	});

	describe('Handles routing', () => {
		it('Renders PersonSearch if route is /', () => {
			render(
				<MemoryRouter initialEntries={['/']}>
					<App />
				</MemoryRouter>
			);

			expect(PersonSearch).toBeCalledTimes(1);
		});

		it('Renders PersonSearch if route is /person', () => {
			render(
				<MemoryRouter initialEntries={['/person']}>
					<App />
				</MemoryRouter>
			);

			expect(PersonSearch).toBeCalledTimes(1);
		});

		it('Renders NoMatch if route is something not matched', () => {
			render(
				<MemoryRouter initialEntries={['/some/unmatched/route']}>
					<App />
				</MemoryRouter>
			);

			expect(NoMatch).toBeCalledTimes(1);
		});
	});
});
