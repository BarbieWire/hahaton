import { Accordion } from "flowbite-react";

export function AboutCourse({ course }) {
  return (
    <Accordion>
      {/* Course Overview */}
      <Accordion.Panel>
        <Accordion.Title>Course Overview</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            {course.description || "This course covers the essential concepts of the topic."}
          </p>
        </Accordion.Content>
      </Accordion.Panel>

      {/* Prerequisites */}
      <Accordion.Panel>
        <Accordion.Title>Prerequisites</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            {course.prerequisites || "No prior knowledge required. Anyone can join!"}
          </p>
        </Accordion.Content>
      </Accordion.Panel>

      {/* Curriculum */}
      <Accordion.Panel>
        <Accordion.Title>Curriculum</Accordion.Title>
        <Accordion.Content>
          <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
            {course.curriculum && course.curriculum.length > 0 ? (
              course.curriculum.map((item, index) => (
                <li key={index}>{item}</li>
              ))
            ) : (
              <li>No curriculum available yet.</li>
            )}
          </ul>
        </Accordion.Content>
      </Accordion.Panel>

      {/* Learning Outcomes */}
      <Accordion.Panel>
        <Accordion.Title>Learning Outcomes</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            By the end of this course, you will be able to:
          </p>
          <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
            {course.outcomes && course.outcomes.length > 0 ? (
              course.outcomes.map((outcome, index) => (
                <li key={index}>{outcome}</li>
              ))
            ) : (
              <li>No specific outcomes listed yet.</li>
            )}
          </ul>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
}
