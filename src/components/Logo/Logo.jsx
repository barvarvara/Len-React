import './Logo.scss';

export default function Logo({
                               addStyle,
                               ...props
                             }) {
  return (
    <a href="/" className={`logo ${addStyle}`}> </a>
  )
}