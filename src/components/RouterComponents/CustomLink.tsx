import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import { ReactElement } from 'react';

type Props = {
    to: string,
    child: ReactElement,
    name: string,
    anotherProp?: string; // ? Makes so the prop is not required
}

export default function CustomLink({to, name, child}: Props ){ // https://www.youtube.com/watch?v=SLfhMt5OUPI&t=1031s
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({path: resolvedPath.pathname})
    return(
        <li>
            <Link to={to} className={isActive ? 'nav-link active' : 'nav-link text-white'}>
            <svg className="bi pe-none me-2" width="16" height="16">{child}</svg>
            {name}
            </Link>
        </li>
    )
}   