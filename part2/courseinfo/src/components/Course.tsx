import Part, { PartProps } from "./Part.tsx";

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
        </div>
    );
};

export default Course;