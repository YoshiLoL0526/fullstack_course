export interface PartProps {
    id: number;
    name: string;
    exercises: number;
}

const Part: React.FC<PartProps> = ({ name, exercises }) => (
    <li>
        {name} {exercises}
    </li>
);

export default Part;