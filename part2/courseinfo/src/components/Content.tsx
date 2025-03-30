import Part, { PartData } from "./Part.tsx";

interface ContentProps {
    parts: Array<PartData>,
}

const Content: React.FC<ContentProps> = ({ parts }) => (
    <ul>
        {parts.map((part) => (
            <Part key={part.id} part={part} />
        ))}
    </ul>
)

export default Content