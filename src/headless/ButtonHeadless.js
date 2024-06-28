import React from 'react'
import styled from 'styled-components'
import { Button } from '@headlessui/react'

const BasicButton = styled(Button)`
	width: max-content;
	padding: 6px 20px;
	outline: none;
	vertical-align: middle;
	margin-bottom: 14px;
	border-radius: 4px;

	&[data-disabled] {
		color: var(--disabled);
		border-color: var(--disabled);
	}
`

const PrimaryButton = styled(BasicButton)`
	border: none;
	color: #fff;
	background-color: var(--orange);

	&[data-hover] {
		opacity: 0.7;
	}
`

const CancelButton = styled(BasicButton)`
	color: #fff;
	border: none;
	background-color: var(--red);

	&[data-hover] {
		opacity: 0.7;
	}
`

const ConfirmButton = styled(BasicButton)`
	color: #fff;
	border: none;
	background-color: green;

	&[data-hover] {
		opacity: 0.7;
	}
`

function ButtonHeadless() {
	return (
		<div style={{ display: 'flex', flexDirection: 'column' }}>
			<BasicButton disabled>Basic Button</BasicButton>
			{/* <BasicLinkButton as="a" href="./">
				LINK
			</BasicLinkButton> */}

			<PrimaryButton>Primary Button</PrimaryButton>
			<CancelButton>Cancel Button</CancelButton>
			<ConfirmButton>Confirm Button</ConfirmButton>

			<BasicButton style={{ background: 'hotpink' }}>
				Button Style
			</BasicButton>
		</div>
	)
}

export default ButtonHeadless
