import { DefaultTheme } from 'styled-components';

export enum AvailableThemes {
	// eslint-disable-next-line no-unused-vars
	Light = 'light',
	// eslint-disable-next-line no-unused-vars
	Dark = 'dark',
}

const lightTheme: DefaultTheme = {
	name: AvailableThemes.Light,
	primary: '#75598e',
	primaryAccent: '#9c77bd',
	secondary: '#F7FAEF',
	grey: '#928779',
	text: '#0A100D',
	background: '#F7FAEF',
	boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
	boxShadowAccent: '0 8px 16px 0 rgba(0, 0, 0, 0.2)',
};

const darkTheme: DefaultTheme = {
	name: AvailableThemes.Dark,
	primary: '#0057a8',
	primaryAccent: '#2676c2',
	secondary: '#ffffff',
	grey: '#252D29',
	text: '#ffffff',
	background: '#001931',
	boxShadow: '0 4px 8px 0 rgba(240, 240, 240, 0.2)',
	boxShadowAccent: '0 8px 30px 0 rgba(97, 190, 236, 0.2)',
};

export default { lightTheme, darkTheme };