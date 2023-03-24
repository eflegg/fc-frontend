import styled from 'styled-components'
import theme from '../Theme'

type InputProps = {
	label: string;
	placeholder: string;
onBlur: any;
	className?: string;
	type: string;
	onChangeHandler: any;
	name: string;
	value: string;
	isRequired: boolean;
}
const InputContainer = styled.div`
    display: flex;
	flex-direction: column;
	color: ${theme.colours.blue};
	font-family: ${theme.type.body};
	font-size: 2.4rem;
	
	input, textarea {
		padding-left: 10px;
		background: ${theme.colours.cream};
		&:focus {
			border:3px dotted ${theme.colours.blue};
			
		}
	}
	
	label {
		color: ${theme.colours.cream};
		font-weight: 300;
	}
`

const InputField: React.FC<InputProps> = ({ label, placeholder, className, type, onChangeHandler, value, isRequired, name, onBlur }) => 

 {
    return (
<InputContainer
			className={` ${
				className ? className : ''
			}`}
		>

			<label htmlFor={name} className="input--default">
				{isRequired ? '*' : null}
				{label}
			</label>
            {type === "text" ? (
	<>
    <input
        type="text"
        name={name}
		id={name}
        onChange={onChangeHandler}
        placeholder={placeholder}
        value={value}
       onBlur={onBlur}
    
    />
</>
            ) : (
				<>

					<textarea
						name={name}

						placeholder={placeholder}
						onChange={onChangeHandler}
						value={value}

					/>

				</>
			)}

		</InputContainer>
	)
}

export default InputField;