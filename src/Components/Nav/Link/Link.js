import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Link({ href, clickAction = null }) {
    const router = useHistory();
    const hash = router.location.hash.slice(1).replace(/%20/g, " ")
    const classActive = hash === href ? 'link__active' : 'link';

    return (
        <li>
            <a href={`#${href}`} onClick={clickAction} className={classActive}>
                {href}
            </a>
        </li>
    );
}
