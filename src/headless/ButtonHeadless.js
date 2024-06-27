import React from 'react'
import { Button } from '@headlessui/react'
import styled from 'styled-components'

const BasicButton = styled(Button)`
	padding: 6px 20px;
	outline: none;
	vertical-align: middle;

	border: 1px solid;
	border-radius: 4px;

	&[data-disabled] {
		color: #00000042;
		border-color: #00000042;
	}
	&[data-hover] {
	}
`
const BasicLinkButton = styled(Button)`
	&[data-disabled] {
	}
	&[data-hover] {
	}
`

const PrimaryButton = styled(BasicButton)`
	color: #fff;
	border: none;
	background-color: orange;

	&[data-hover] {
		opacity: 0.7;
	}
`

const CancelButton = styled(BasicButton)`
	color: #fff;
	border: none;
	background-color: red;

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
		<div>
			<BasicButton disabled>Button Headless</BasicButton>
			<BasicLinkButton as="a" href="./">
				LINK
			</BasicLinkButton>
			<PrimaryButton>Primary Button</PrimaryButton>
			<CancelButton>Cancel Button</CancelButton>
			<ConfirmButton>Confirm Button</ConfirmButton>

			<BasicButton
				style={{ borderColor: 'green', background: 'hotpink' }}
			>
				Button Style
			</BasicButton>
		</div>
	)
}

export default ButtonHeadless
