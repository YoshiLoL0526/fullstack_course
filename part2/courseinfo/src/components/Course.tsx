import Header from "./Header.tsx";
import Content from "./Content.tsx";
import { PartData } from "./Part.tsx";
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
            <Header name={course.name} />
            <Content parts={course.parts} />
            <Total total={course.parts.reduce((sum, part) => sum + part.exercises, 0)} />
        </div>
    );
};

export default Course;