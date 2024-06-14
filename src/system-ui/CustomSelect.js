import React, { useEffect, useRef, useState } from 'react'
import styled, { css } from 'styled-components'

const Icon = ({ isOpen, color }) => {
	return (
		<svg
			viewBox="0 0 24 24"
			width="18"
			height="18"
			stroke={color ? color : '#222'}
			strokeWidth="1.5"
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
			className={isOpen ? 'translate' : ''}
		>
			<polyline points="6 9 12 15 18 9"></polyline>
		</svg>
	)
}

const CustomSelect = ({
	placeHolder: placeHolderProp,
	defaultValue,
	options,
	onChange,
	align,
	noOptionsMessage = 'no data',
	styles,
	isSearchable = true,
}) => {
	const [showMenu, setShowMenu] = useState(false)
	const [selectedValue, setSelectedValue] = useState(
		defaultValue ? defaultValue : placeHolderProp ? null : options[0]
	)
	const [searchValue, setSearchValue] = useState(
		defaultValue
			? defaultValue?.label
			: placeHolderProp
			? ''
			: options[0].label
	)
	const [placeHolder, setPlaceHolder] = useState(
		defaultValue?.label
			? defaultValue.label
			: placeHolderProp
			? placeHolderProp
			: ''
	)
	const [isOptions, setIsOptions] = useState(true)

	const controlRef = useRef()
	const menuRef = useRef()

	useEffect(() => {
		const handler = (e) => {
			if (
				menuRef.current &&
				controlRef.current &&
				!menuRef.current.contains(e.target) &&
				!controlRef.current.contains(e.target)
			) {
				if (isSearchable && selectedValue) {
					setSearchValue(selectedValue?.label)
				} else {
					setSearchValue('')
				}
			}

			if (controlRef.current && controlRef.current.contains(e.target)) {
				setShowMenu(!showMenu)
			} else {
				setShowMenu(false)
			}
		}

		window.addEventListener('click', handler)
		return () => {
			window.removeEventListener('click', handler)
		}
	})

	const handleInputClick = (e) => {
		setSearchValue('')
		if (selectedValue) {
			setPlaceHolder(selectedValue?.label)
		}
	}

	const onItemClick = (option) => {
		setSelectedValue(option)
		onChange && onChange(option)
	}

	const isSelected = (option) => {
		if (!selectedValue) {
			return false
		}

		return selectedValue.value === option.value
	}

	const handleSearch = (e) => {
		if (isSearchable) {
			setSearchValue(e.target.value)
		}
	}

	const getOptions = () => {
		if (!searchValue) {
			return options
		}

		return options.filter(
			(option) =>
				option.label.toLowerCase().indexOf(searchValue.toLowerCase()) >=
				0
		)
	}

	useEffect(() => {
		if (selectedValue) {
			setSearchValue(selectedValue.label)
		}
	}, [selectedValue])

	useEffect(() => {
		const newOptions = options.filter(
			(option) =>
				option.label.toLowerCase().indexOf(searchValue.toLowerCase()) >=
				0
		)
		if (newOptions.length <= 0) {
			setIsOptions(false)
		}
		if (searchValue === '') {
			setIsOptions(true)
		}
	}, [options, searchValue])

	useEffect(() => {
		if (defaultValue) {
			setSelectedValue(defaultValue)
		}
	}, [defaultValue])

	const convertedStyle = (obj) => {
		if (obj) {
			let jsonString = JSON.stringify(obj)
			jsonString = jsonString.replace(/["{}]/g, '')
			jsonString = jsonString.replace(/,/g, ';')
			const convertedString = jsonString.replace(
				/[A-Z]/g,
				(match) => '-' + match.toLowerCase()
			)
			return convertedString
		}
	}

	return (
		<Div
			align={align}
			isOptions={isOptions}
			styles={{
				...styles,
				controlHover: convertedStyle(styles?.controlHover),
			}}
		>
			<div
				className="custom-select__control"
				ref={controlRef}
				onClick={handleInputClick}
			>
				<Input
					isSearchable={isSearchable}
					className={`single-value ${
						!selectedValue || selectedValue.length === 0
							? 'placeholder'
							: ''
					}`}
					styles={{
						...styles,
						singleValueHover: convertedStyle(
							styles?.singleValueHover
						),
					}}
					onChange={handleSearch}
					value={searchValue}
					placeholder={placeHolder}
					readOnly={!isSearchable}
				/>
				<div
					className="custom-select__indicator"
					style={styles?.indicator}
				>
					<Icon
						isOpen={showMenu}
						color={convertedStyle(styles?.indicator?.color)}
					/>
				</div>
			</div>

			{showMenu && (
				<div
					className="custom-select__menu"
					ref={menuRef}
					style={styles?.menu}
				>
					{isOptions
						? getOptions().map((option) => (
								<div
									onClick={() => onItemClick(option)}
									key={option.value}
									className={`custom-select__item ${
										isSelected(option) && 'selected'
									}`}
								>
									{option.label}
								</div>
						  ))
						: noOptionsMessage}
				</div>
			)}
		</Div>
	)
}

export default CustomSelect

const Div = styled.div`
	& {
		position: relative;

		width: max-content;
		width: -webkit-max-content;
		width: -moz-max-content;

		${(props) => {
			return css`
				${props.styles.selectContainer}
			`
		}};
		.custom-select__control {
			display: -webkit-box;
			display: -ms-flexbox;
			display: flex;
			-webkit-box-align: center;
			-ms-flex-align: center;
			align-items: center;
			-webkit-box-pack: justify;
			-ms-flex-pack: justify;
			justify-content: space-between;

			padding: 8px 12px;
			border: 1px solid #ccc;
			border-radius: 4px;

			-webkit-user-select: none;
			-moz-user-select: none;
			-ms-user-select: none;
			user-select: none;
			gap: 6px;

			${(props) => {
				return css`
					${props.styles.control}
				`
			}};
			&:hover {
				${(props) => {
					return css`
						${props.styles.controlHover}
					`
				}};
			}

			.custom-select__indicator {
				svg {
					-webkit-transition: all 0.2s ease-in-out;
					transition: all 0.2s ease-in-out;
				}
				svg.translate {
					-webkit-transform: rotate(180deg);
					-ms-transform: rotate(180deg);
					transform: rotate(180deg);
				}
			}
		}
		.custom-select__menu {
			position: absolute;
			z-index: 99;

			-webkit-transform: translateY(6px);
			-ms-transform: translateY(6px);
			transform: translateY(6px);

			border-radius: 4px;
			box-shadow: 0 4px 8px rgba(0, 123, 255, 0.2);
			overflow: auto;
			background-color: #fff;
			max-height: 200px;
			padding: 4px 0;
			/* min-height: 50px; */
			text-align: ${({ isOptions }) => (isOptions ? 'unset' : 'center')};

			${({ align }) => {
				switch (align) {
					case 'left': {
						return css`
							left: 0;
						`
					}
					case 'right': {
						return css`
							right: 0;
						`
					}
					default: {
						return css`
							left: 0;
							right: 0;
						`
					}
				}
			}}

			&::-webkit-scrollbar {
				width: 5px;
			}

			&::-webkit-scrollbar-track {
				background: #f1f1f1;
			}

			&::-webkit-scrollbar-thumb {
				background: #888;
			}

			/* &:-webkit-scrollbar-thumb:hover {
        background: #555;
      } */

			${(props) => {
				return css`
					${props.styles?.menu}
				`
			}}

			& .custom-select__item {
				padding: 6px 12px;
				cursor: pointer;
				-webkit-transition: background-color 0.35s ease;
				transition: background-color 0.35s ease;

				${(props) => {
					return css`
						${props.styles?.item}
					`
				}}
				&.selected {
					color: #f7941d;
					${(props) => {
						return css`
							${props.styles?.selectedItem}
						`
					}}
				}
				&:hover {
					background-color: #d8d8d8;
					${(props) => {
						return css`
							${props.styles?.itemHover}
						`
					}}
				}
			}
		}
	}
`

const Input = styled.input`
	&.single-value {
		&:focus-visible {
			outline: none;
		}
		border: none;
		min-width: 40px;
		color: #000;
		cursor: ${({ isSearchable }) => (isSearchable ? 'text' : 'default')};

		${(props) => {
			return css`
				${props.styles?.singleValue}
			`
		}}

		&::placeholder {
			color: #82868b;
			${(props) => {
				return css`
					${props.styles?.placeHolder}
				`
			}}
		}
		&:hover {
			${(props) => {
				return css`
					${props.styles?.singleValueHover}
				`
			}}
		}
	}
`
