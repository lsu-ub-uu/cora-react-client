import React from 'react';
import styled from 'styled-components';
import usePagination from '../../hooks/usePagination';

const PaginationGrid = styled.div`
	display: flex;
	/* 	grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
	grid-template-rows: 1fr; */
	align-items: center;
	justify-items: center;
	justify-content: center;
	/* column-gap: 0.5em; */
	gap: 0;
`;
const PaginationButton = styled.button`
	background-color: rgb(255, 255, 255);
	box-sizing: border-box;
	width: 2em;
	border-radius: 0px;
	color: rgb(33, 33, 33);
	cursor: pointer;
	display: inline-block;
	padding: 0.5em 2em;
	text-align: center;
	//border: 1px solid #e9ecef;
	border-top: 1px solid #e9ecef;
	border-right: 0.5px solid #e9ecef;
	border-bottom: 1px solid #e9ecef;
	border-left: 0.5px solid #e9ecef;
	font-size: 1em;
	height: 2.5em;
	&:hover {
		background-color: #e9ecef;
	}
	&:disabled {
		background-color: #e9ecef;
	}
	&:first-child {
		border-left: 1px solid #e9ecef;
		border-top-left-radius: 4px;
		border-bottom-left-radius: 4px;
	}
	&:last-child {
		border-right: 1px solid #e9ecef;
		border-top-right-radius: 4px;
		border-bottom-right-radius: 4px;
	}
`;

const PaginationComponent = function ({
	start,
	rows,
	toNumber,
	totalNumber,
	onPaginationUpdate,
}: {
	start: number;
	rows: number;
	toNumber: number;
	totalNumber: number;
	onPaginationUpdate(start: number): void;
}) {
	const {
		goToFirstPage,
		goToPreviousPage,
		goToNextPage,
		goToLastPage,
		isFirstPage,
		isLastPage,
	} = usePagination(start, rows, totalNumber, onPaginationUpdate);

	return (
		<PaginationGrid>
			<div>
				{start}-{toNumber} av {totalNumber}
			</div>
			<div>
				<PaginationButton
					onClick={goToFirstPage}
					disabled={isFirstPage}
				>
					&lt;&lt;
				</PaginationButton>

				<PaginationButton
					onClick={goToPreviousPage}
					disabled={isFirstPage}
				>
					&lt;
				</PaginationButton>

				<PaginationButton
					onClick={goToNextPage}
					disabled={isLastPage}
				>
					&gt;
				</PaginationButton>

				<PaginationButton
					onClick={goToLastPage}
					disabled={isLastPage}
				>
					&gt;&gt;
				</PaginationButton>
			</div>
		</PaginationGrid>
	);
};

export default PaginationComponent;
