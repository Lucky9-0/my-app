import React from 'react'

export default function CourseDetailPage({ params }) {
  return (
    <>
      <main>
        <h1>This is Course Detail Page</h1>
      </main>

      <main>
        <h2>Course Detail of {params.course_slug}</h2>
      </main>
    </>
  )
}
