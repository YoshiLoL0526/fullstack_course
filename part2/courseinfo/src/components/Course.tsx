import Part, { PartProps } from "./Part.tsx";
import Total from "./Total.tsx";

interface CourseData {
    id: number;
    name: string;
    parts: PartProps[];
}

interface CourseProps {
    course: CourseData;
}

const Course: React.FC<CourseProps> = ({ course }) => {
    return (
        <div>
            <h1>{course.name}</h1>
            <ul>
                {course.parts.map((part) => (
                    <Part key={part.id} id={part.id} name={part.name} exercises={part.exercises} />
                ))}
            </ul>
            <Total total={course.parts.reduce((sum, part) => sum + part.exercises, 0)} />
        </div>
    );
};

export default Course;