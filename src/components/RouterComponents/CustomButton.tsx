import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import { ReactElement } from 'react';

type Props = {
    to: string,
    name: string
}

export default function CustomLink({to, name}: Props ){ // https://www.youtube.com/watch?v=SLfhMt5OUPI&t=1031s
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({path: resolvedPath.pathname})
    return(
        <Link to={to} className='btn btn-primary'>{name}</Link>
    )
}   