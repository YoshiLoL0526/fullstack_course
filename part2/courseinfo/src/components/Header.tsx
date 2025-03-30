interface HeaderProps {
    course: string
}

const Header: React.FC<HeaderProps> = ({ course }) => <h1>{course}</h1>

export default Header