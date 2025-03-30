export interface PartData {
    id: number;
    name: string;
    exercises: number;
}

export interface PartProps {
    part: PartData;
}

const Part: React.FC<PartProps> = ({ part }) => (
    <li>
        {part.name} {part.exercises}
    </li>
);

export default Part;