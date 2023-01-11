import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import { ReactElement } from 'react';

type Props = {
    to: string,
    icon: ReactElement,
    name: string
}

export default function CustomLink({to, name, icon}: Props ){
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({path: resolvedPath.pathname})
    return(
        <li>
            <Link to={to} className={isActive ? 'nav-link active' : 'nav-link text-white'}>
            <svg className="bi pe-none me-2" width="16" height="16">{icon}</svg>
            {name}
            </Link>
        </li>
    )
}   