// index.jsx
import * as React from 'react'
import * as Popover from '@radix-ui/react-popover'
import styled from 'styled-components'

const PopoverDemo = () => (
	<Div>
		<Popover.Root>
			<Popover.Trigger className="PopoverTrigger">
				More info
			</Popover.Trigger>
			<Popover.Portal>
				<Popover.Content className="PopoverContent" sideOffset={5}>
					Some more info…
					<Popover.Arrow className="PopoverArrow" />
				</Popover.Content>
			</Popover.Portal>
		</Popover.Root>
	</Div>
)

export default PopoverDemo

const Div = styled.div`
	& {
		.PopoverTrigger {
			display: inline-flex;
			align-items: center;
			justify-content: center;
			border-radius: 4px;
			padding: 0 15px;
			font-size: 15px;
			line-height: 1;
			font-weight: 500;
			height: 35px;
			background-color: rgb(223, 139, 139);
			color: var(--violet-11);
			box-shadow: 0 2px 10px var(--black-a7);
		}

		.PopoverContent {
			border-radius: 4px;
			padding: 20px;
			width: 260px;
			font-size: 15px;
			line-height: 1;
			color: var(--violet-11);
			background-color: rgb(223, 139, 139);
			box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
				hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
		}

		.PopoverArrow {
			fill: rgb(223, 139, 139);
		}
	}
`
