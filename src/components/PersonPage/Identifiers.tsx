import React from 'react';
import styled from 'styled-components';
import { PersonObject } from '../../converter/Person/PersonDefinitions';
import ListWithLabel from './ListWithLabel';

const StyledDiv = styled.div`
	display: grid;
	grid-template-columns: max-content auto;
	column-gap: 0.5em;
`;

const possiblyOutputListWithLabel = (
	list: string[] | undefined,
	label: string
) => {
	if (list !== undefined && list.length > 0) {
		return <ListWithLabel list={list} label={label} />;
	}
	return undefined;
};

const Identifiers = function ({ person }: { person: PersonObject }) {
	return (
		<StyledDiv>
			<ListWithLabel list={[person.id]} label="pID" />
			{possiblyOutputListWithLabel(person.orcids, 'ORCID')}

			{possiblyOutputListWithLabel(person.viafIDs, 'VIAF')}

			{possiblyOutputListWithLabel(person.librisIDs, 'Libris-id')}
		</StyledDiv>
	);
};

export default Identifiers;