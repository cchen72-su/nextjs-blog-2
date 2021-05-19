import styles from './row.module.scss'
import classnames from 'classnames/bind'

let cx = classnames.bind(styles)

export default function Row({children,justifyContentCenter}) {

    const rowClasses = cx({
        row : true,
        ['justify-content-center']:justifyContentCenter
    })

    return (
        <div className={rowClasses }>
            {children}
        </div>
    )
}