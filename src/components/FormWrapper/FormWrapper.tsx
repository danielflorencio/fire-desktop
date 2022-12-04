import { ReactNode } from 'react';

// The only function of this component is to make it easier to share style trough all the form steps.
// BUT, since i'm not gonna be actually using multi step forms, it wont be needed in this project.
// At least not for now, and not for the CiCalc component.

type FormWrapperProps = {
    title: string, 
    children: ReactNode
}

// About the react Node type, it is a special type in react that allows ou to accept any type of children.
// It might be a single child, an array of children, a string...
// Any thing that might be accepted as a react TSX / JSX child. 


export default function FormWrapper({title, children}: FormWrapperProps){
    return(
        <>
            <h2 className='text-center'>{title}</h2>
            <div>{children}</div>
        </>
    )
}