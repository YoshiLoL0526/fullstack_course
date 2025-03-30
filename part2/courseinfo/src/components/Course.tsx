import Part, { PartData } from "./Part.tsx";
import Total from "./Total.tsx";

interface CourseData {
    id: number;
    name: string;
    parts: PartData[];
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
                    <Part key={part.id} part={part} />
                ))}
            </ul>
            <Total total={course.parts.reduce((sum, part) => sum + part.exercises, 0)} />
        </div>
    );
};

export default Course;