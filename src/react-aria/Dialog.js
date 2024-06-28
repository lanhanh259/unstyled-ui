import React, { useContext } from 'react'
import {
	Button,
	Dialog as DialogAria,
	DialogTrigger,
	Heading,
	Modal,
	OverlayTriggerStateContext,
} from 'react-aria-components'

function CloseButton() {
	let state = useContext(OverlayTriggerStateContext)
	return <Button onPress={() => state.close()}>Close</Button>
}

function Dialog() {
	return (
		<div>
			<DialogTrigger>
				<Button>About</Button>
				<Modal isDismissable>
					<DialogAria>
						<Heading slot="title">About</Heading>
						<p>Copyright © 2023 Adobe. All rights reserved.</p>
						<CloseButton />
					</DialogAria>
				</Modal>
			</DialogTrigger>
		</div>
	)
}

export default Dialog
