
import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calendar as CalendarIcon, User } from "lucide-react"

const Calendario = () => {
  const [agendamentos, setAgendamentos] = useState([
    {
      id: 1,
      cliente: "João Silva",
      data: "2024-01-15",
      hora: "14:00",
      servico: "Consultoria",
      status: "confirmado"
    },
    {
      id: 2,
      cliente: "Maria Santos",
      data: "2024-01-16",
      hora: "10:00",
      servico: "Reunião",
      status: "pendente"
    }
  ])

  const [novoAgendamento, setNovoAgendamento] = useState({
    cliente: "",
    data: "",
    hora: "",
    servico: ""
  })

  const handleInputChange = (field: string, value: string) => {
    setNovoAgendamento(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const agendamento = {
      id: agendamentos.length + 1,
      ...novoAgendamento,
      status: "pendente"
    }
    setAgendamentos(prev => [...prev, agendamento])
    setNovoAgendamento({
      cliente: "",
      data: "",
      hora: "",
      servico: ""
    })
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmado":
        return "bg-green-100 text-green-800"
      case "pendente":
        return "bg-yellow-100 text-yellow-800"
      case "cancelado":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Calendário</h1>
      </div>

      {/* Novo Agendamento */}
      <Card className="p-6 border-0 shadow-sm bg-white">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Novo Agendamento</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="cliente">Cliente</Label>
              <Input
                id="cliente"
                value={novoAgendamento.cliente}
                onChange={(e) => handleInputChange("cliente", e.target.value)}
                placeholder="Nome do cliente"
                required
              />
            </div>
            <div>
              <Label htmlFor="servico">Serviço</Label>
              <Input
                id="servico"
                value={novoAgendamento.servico}
                onChange={(e) => handleInputChange("servico", e.target.value)}
                placeholder="Tipo de serviço"
                required
              />
            </div>
            <div>
              <Label htmlFor="data">Data</Label>
              <Input
                id="data"
                type="date"
                value={novoAgendamento.data}
                onChange={(e) => handleInputChange("data", e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="hora">Horário</Label>
              <Input
                id="hora"
                type="time"
                value={novoAgendamento.hora}
                onChange={(e) => handleInputChange("hora", e.target.value)}
                required
              />
            </div>
          </div>
          <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
            Criar Agendamento
          </Button>
        </form>
      </Card>

      {/* Lista de Agendamentos */}
      <Card className="p-6 border-0 shadow-sm bg-white">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Agendamentos</h2>
        <div className="space-y-4">
          {agendamentos.map((agendamento) => (
            <div key={agendamento.id} className="flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <CalendarIcon className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">{agendamento.cliente}</h3>
                  <p className="text-sm text-gray-600">{agendamento.servico}</p>
                  <p className="text-sm text-gray-600">
                    {new Date(agendamento.data).toLocaleDateString('pt-BR')} às {agendamento.hora}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(agendamento.status)}`}>
                  {agendamento.status}
                </span>
                <Button variant="outline" size="sm">
                  Editar
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}

export default Calendario
