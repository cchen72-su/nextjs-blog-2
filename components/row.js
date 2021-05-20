import styles from './row.module.scss'
import classnames from 'classnames/bind'

let cx = classnames.bind(styles)

export default function Row({children,justifyContentCenter,justifyContentSpaceBetween}) {

    const rowClasses = cx({
        row : true,
        ['justify-content-center']:justifyContentCenter,
        ['justify-content-space-between']:justifyContentSpaceBetween
    })

    return (
        <div className={rowClasses }>
            {children}
        </div>
    )
}