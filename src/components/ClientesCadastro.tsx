
import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { User } from "lucide-react"

const ClientesCadastro = () => {
  const [clientes, setClientes] = useState([
    {
      id: 1,
      nome: "João Silva",
      email: "joao@email.com",
      telefone: "(11) 99999-9999",
      cpf: "123.456.789-00",
      empresa: "Silva LTDA"
    },
    {
      id: 2,
      nome: "Maria Santos",
      email: "maria@email.com",
      telefone: "(11) 88888-8888",
      cpf: "987.654.321-00",
      empresa: "Santos ME"
    }
  ])

  const [novoCliente, setNovoCliente] = useState({
    nome: "",
    email: "",
    telefone: "",
    cpf: "",
    empresa: ""
  })

  const handleInputChange = (field: string, value: string) => {
    setNovoCliente(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const cliente = {
      id: clientes.length + 1,
      ...novoCliente
    }
    setClientes(prev => [...prev, cliente])
    setNovoCliente({
      nome: "",
      email: "",
      telefone: "",
      cpf: "",
      empresa: ""
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Clientes</h1>
      </div>

      {/* Formulário de Cadastro */}
      <Card className="p-6 border-0 shadow-sm bg-white">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Cadastrar Novo Cliente</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="nome">Nome Completo</Label>
              <Input
                id="nome"
                value={novoCliente.nome}
                onChange={(e) => handleInputChange("nome", e.target.value)}
                placeholder="Digite o nome completo"
                required
              />
            </div>
            <div>
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                type="email"
                value={novoCliente.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="Digite o e-mail"
                required
              />
            </div>
            <div>
              <Label htmlFor="telefone">Telefone</Label>
              <Input
                id="telefone"
                value={novoCliente.telefone}
                onChange={(e) => handleInputChange("telefone", e.target.value)}
                placeholder="(11) 99999-9999"
                required
              />
            </div>
            <div>
              <Label htmlFor="cpf">CPF</Label>
              <Input
                id="cpf"
                value={novoCliente.cpf}
                onChange={(e) => handleInputChange("cpf", e.target.value)}
                placeholder="123.456.789-00"
                required
              />
            </div>
            <div className="md:col-span-2">
              <Label htmlFor="empresa">Empresa (opcional)</Label>
              <Input
                id="empresa"
                value={novoCliente.empresa}
                onChange={(e) => handleInputChange("empresa", e.target.value)}
                placeholder="Nome da empresa"
              />
            </div>
          </div>
          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
            Cadastrar Cliente
          </Button>
        </form>
      </Card>

      <Separator />

      {/* Lista de Clientes */}
      <Card className="p-6 border-0 shadow-sm bg-white">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Clientes Cadastrados</h2>
        <div className="space-y-4">
          {clientes.map((cliente) => (
            <div key={cliente.id} className="flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <User className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">{cliente.nome}</h3>
                  <p className="text-sm text-gray-600">{cliente.email}</p>
                  <p className="text-sm text-gray-600">{cliente.telefone}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">{cliente.cpf}</p>
                {cliente.empresa && (
                  <p className="text-sm text-gray-600">{cliente.empresa}</p>
                )}
              </div>
              <Button variant="outline" size="sm">
                Editar
              </Button>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}

export default ClientesCadastro
