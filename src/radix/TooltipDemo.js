import * as React from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import * as Tooltip from '@radix-ui/react-tooltip'
import styled from 'styled-components'

const MyButton = React.forwardRef((props, forwardedRef) => (
	<button className="tooltip-button" {...props} ref={forwardedRef} />
))
function TooltipDemo() {
	return (
		<Div>
			<Dialog.Root>
				<Tooltip.Provider>
					<Tooltip.Root>
						<Tooltip.Trigger asChild>
							<Dialog.Trigger asChild>
								<MyButton>Open dialog</MyButton>
							</Dialog.Trigger>
						</Tooltip.Trigger>
						<Tooltip.Portal>
							<Tooltip.Content
								className="TooltipContent"
								sideOffset={5}
							>
								Add to library
								<Tooltip.Arrow className="TooltipArrow" />
							</Tooltip.Content>
						</Tooltip.Portal>
					</Tooltip.Root>
				</Tooltip.Provider>

				<Dialog.Portal>...</Dialog.Portal>
			</Dialog.Root>
		</Div>
	)
}
export default TooltipDemo

const Div = styled.div`
	/* reset */
	button {
		all: unset;
	}

	.TooltipArrow {
		fill: white;
	}

	.tooltip-button {
		color: var(--violet-11);
		background-color: white;

		border: 1px solid #000;
		border-radius: 4px;
		padding: 10px;
		box-shadow: 0 2px 10px var(--black-a7);
	}
	.tooltip-button:hover {
		background-color: var(--violet-3);
	}
	.tooltip-button:focus {
		box-shadow: 0 0 0 2px black;
	}

	@keyframes slideUpAndFade {
		from {
			opacity: 0;
			transform: translateY(2px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@keyframes slideRightAndFade {
		from {
			opacity: 0;
			transform: translateX(-2px);
		}
		to {
			opacity: 1;
			transform: translateX(0);
		}
	}

	@keyframes slideDownAndFade {
		from {
			opacity: 0;
			transform: translateY(-2px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@keyframes slideLeftAndFade {
		from {
			opacity: 0;
			transform: translateX(2px);
		}
		to {
			opacity: 1;
			transform: translateX(0);
		}
	}
`
