
import { useState } from "react"
import Layout from "@/components/Layout"
import Dashboard from "@/components/Dashboard"
import LoginForm from "@/components/LoginForm"

const Index = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const handleLogin = () => {
    setIsAuthenticated(true)
  }

  if (!isAuthenticated) {
    return <LoginForm onLogin={handleLogin} />
  }

  return (
    <Layout>
      <Dashboard />
    </Layout>
  )
}

export default Index
