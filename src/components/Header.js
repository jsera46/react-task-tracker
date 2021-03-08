import PropTypes from 'prop-types'
import Button from './Button'

const Header = () => {
    const onClick = (e) => {
    }
    
    return (
        <header className='header'>
            <h1>Tast Tracker</h1>
            <Button color='green' text='Add' onClick={onClick} />
        </header>
    )
}

Header.defaultProps = {
    title: 'Tast Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// CSS in JS
// conts headingStyle = {
//     color: 'red',
//     backgroundColor: 'black',
// }
export default Header
