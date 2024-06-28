import React from 'react'
import {
	Button,
	Dialog,
	DialogTrigger,
	Heading,
	Modal,
	OverlayTriggerStateContext,
} from 'react-aria-components'
import styled from 'styled-components'
import './styles.css'

function CloseButton() {
	let state = React.useContext(OverlayTriggerStateContext)
	return <Button onPress={() => state.close()}>Close</Button>
}

function DialogAria() {
	return (
		<DialogTrigger>
			<Button>About</Button>
			<Modal isDismissable>
				<StyleDialog>
					<Heading slot="title">About</Heading>
					<p>Copyright © 2023 Adobe. All rights reserved.</p>
					<CloseButton />
				</StyleDialog>
			</Modal>
		</DialogTrigger>
	)
}

export default DialogAria

const StyleDialog = styled(Dialog)`
	outline: none;
	padding: 30px;
	max-height: inherit;
	box-sizing: border-box;
	overflow: auto;
	background-color: red;
	.react-aria-Heading[slot='title'] {
		line-height: 1em;
		margin-top: 0;
	}
`
