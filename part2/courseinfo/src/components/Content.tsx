import Part from './Part.tsx'

interface ContentProps {
    parts: Array<{
        name: string;
        exercises: number;
        id: number;
    }>,
}

const Content: React.FC<ContentProps> = ({ parts }) => (
    <div>
        <Part part={parts[0]} />
        <Part part={parts[1]} />
        <Part part={parts[2]} />
    </div>
)

export default Content