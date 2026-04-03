import { PageWrapper } from '@/components/PageWrapper'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/projects_/ez-budget')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <PageWrapper>
      <div className="prose">
        <h1>Ez-Budget Web Application</h1>
        <h2>Overview</h2>
        <p>
          Ez-Budget is a web application designed to help users manage their
          finances better by providing a simple an intuitive interface for
          tracking expenses and income. I wanted to create this application to
          help me categorize my spending over time to build better financial
          habits.
        </p>
        <h2>Architecture</h2>
        <p>
          The application is built using React as a single page application to
          serve the frontend from a single endpoint. The client side then makes
          calls to both Google Oauth for user authentication and custom API
          endpoints to manage user data. Both components are served from Google
          cloud using Cloud Run. My database of choice for this project is the
          Datastore document database, allowing me to use a simple schema that
          separates user data into multiple document trees. Keeping user data
          separate for better security.
        </p>
        <h2>Tech Stack</h2>
        <p>
          The application is built using a React frontend powered by a Flask API
          to handle user data. The application is hosted via Google cloud using
          Cloud Run. My database of choice for this project is the Datastore
          document database.
        </p>
      </div>
    </PageWrapper>
  )
}
