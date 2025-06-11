
import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

interface LoginFormProps {
  onLogin: () => void
}

const LoginForm = ({ onLogin }: LoginFormProps) => {
  const [isLogin, setIsLogin] = useState(true)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: ""
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simular autenticação
    onLogin()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-8 shadow-lg border-0">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">GestãoPro</h1>
          <p className="text-gray-600">
            {isLogin ? "Entre na sua conta" : "Crie sua conta"}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {!isLogin && (
            <div>
              <Label htmlFor="name">Nome completo</Label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder="Seu nome completo"
                required={!isLogin}
                className="mt-1"
              />
            </div>
          )}
          
          <div>
            <Label htmlFor="email">E-mail</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              placeholder="seu@email.com"
              required
              className="mt-1"
            />
          </div>
          
          <div>
            <Label htmlFor="password">Senha</Label>
            <Input
              id="password"
              type="password"
              value={formData.password}
              onChange={(e) => handleInputChange("password", e.target.value)}
              placeholder="Sua senha"
              required
              className="mt-1"
            />
          </div>

          {!isLogin && (
            <div>
              <Label htmlFor="confirmPassword">Confirmar senha</Label>
              <Input
                id="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                placeholder="Confirme sua senha"
                required={!isLogin}
                className="mt-1"
              />
            </div>
          )}

          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 h-11">
            {isLogin ? "Entrar" : "Criar conta"}
          </Button>
        </form>

        <Separator className="my-6" />

        <div className="text-center">
          <p className="text-sm text-gray-600">
            {isLogin ? "Não tem uma conta?" : "Já tem uma conta?"}
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="ml-1 text-blue-600 hover:text-blue-700 font-medium"
            >
              {isLogin ? "Registre-se" : "Faça login"}
            </button>
          </p>
        </div>
      </Card>
    </div>
  )
}

export default LoginForm
