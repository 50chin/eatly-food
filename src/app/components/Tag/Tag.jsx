import s from './Tag.module.scss'
import clsx from 'clsx'

export const Tag = ({ children }) => {
    return <button className={clsx(s.button, {[s.healthy]: children === 'Healthy', [s.trending]: children === 'Trending', [s.supreme]: children === 'Supreme'})}>
    {children}
</button>}