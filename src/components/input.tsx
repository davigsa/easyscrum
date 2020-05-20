import React, { FunctionComponent, useState } from 'react';
import styled from 'styled-components';
import { FaDice } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';

// import { Container } from './styles';
type inputType = {
    inputTitle?: string,
    inputText: string,
    auxiliarText?: string,
    textButton: string
};

const Input: FunctionComponent<inputType> = ({ inputTitle, inputText, auxiliarText, textButton }) => {

    const [input, setInput] = useState('');
    const history = useHistory();

    const FormContainer = styled.form`
        height: 150px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    `;

    const InputContainer = styled.div`
        display: flex;
        flex-direction: column;
    `;   

    const InputTitle = styled.h2`
        padding-left: 10px;
        margin-bottom: 10px;
        font-style: italic;
        color: #666;
    `;

    const Input = styled.input`
        width: 300px;
        height: 40px;
        border-radius: 10px;
        padding: 0 5px 0 10px;
        border: 0;

        ::placeholder {
            color: #ccc;
            font-style: italic;
        }

        .errorColor {
            border: 1px solid red;
        }
    `;

    const AuxText = styled.small`
        color: #ccc;
        padding-left: 10px;
        margin-top: 5px;

        .error {
            display: none;
        }

        .errorColor {
            color: red;
        }
    `;

    const SubmitButton = styled.button`
        width: 300px;
        height: 40px;
        border-radius: 10px;
        background: #FDC314;
        border: 0;
        font-style: bold;

        :hover {
            cursor: pointer;
            background: #FDB200;
        }

        &.inactive {
            background: #ccc;
            cursor: default;
        }
    `;

    function handleClick(e: any): void {
        e.preventDefault();

        if (input.length > 0) {
            try {
                localStorage.setItem(`${inputText}`, input);
    
                history.push('board');
            } catch(err) {
                alert('Whaaat? Something wrong is happening');
            }
        } else {
            return ;
        }
    };

    function handleChange(e: any): void {
       return setInput(e.target.value);
    }
    
  return (
    <FormContainer onSubmit={handleClick} >
        <InputContainer>
            <InputTitle>{inputTitle}</InputTitle>
            <Input 
                id="input"
                type="text"
                placeholder={inputText}
                value={input}
                onChange={handleChange}
            />
            <AuxText>{auxiliarText}</AuxText>
        </InputContainer>
        <SubmitButton className={input.length > 0 ? 'active' : 'inactive' } type="submit">
            <FaDice size={16} />
            {' '}{textButton}
        </SubmitButton> 
    </FormContainer>
  );
}

export default Input;