
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, User, FileText, ArrowUp, ArrowDown } from "lucide-react"

const Dashboard = () => {
  const stats = [
    {
      title: "Total de Clientes",
      value: "1,234",
      change: "+12%",
      trend: "up",
      icon: User,
      color: "bg-blue-500"
    },
    {
      title: "Recibos Emitidos",
      value: "856",
      change: "+8%",
      trend: "up",
      icon: FileText,
      color: "bg-green-500"
    },
    {
      title: "Agendamentos",
      value: "42",
      change: "-3%",
      trend: "down",
      icon: Calendar,
      color: "bg-purple-500"
    },
    {
      title: "Contas a Receber",
      value: "R$ 25.430",
      change: "+15%",
      trend: "up",
      icon: FileText,
      color: "bg-orange-500"
    }
  ]

  const recentActivities = [
    { id: 1, action: "Novo cliente cadastrado", client: "João Silva", time: "2 horas atrás" },
    { id: 2, action: "Recibo emitido", client: "Maria Santos", time: "4 horas atrás" },
    { id: 3, action: "Agendamento criado", client: "Pedro Costa", time: "6 horas atrás" },
    { id: 4, action: "NF emitida", client: "Ana Lima", time: "1 dia atrás" },
  ]

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title} className="p-6 border-0 shadow-sm bg-white hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900 mt-2">{stat.value}</p>
                <div className="flex items-center mt-2">
                  {stat.trend === "up" ? (
                    <ArrowUp className="h-4 w-4 text-green-500" />
                  ) : (
                    <ArrowDown className="h-4 w-4 text-red-500" />
                  )}
                  <span className={`text-sm ml-1 ${
                    stat.trend === "up" ? "text-green-600" : "text-red-600"
                  }`}>
                    {stat.change}
                  </span>
                </div>
              </div>
              <div className={`p-3 rounded-full ${stat.color}`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activities */}
        <Card className="p-6 border-0 shadow-sm bg-white">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Atividades Recentes</h3>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                <div>
                  <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                  <p className="text-sm text-gray-600">{activity.client}</p>
                </div>
                <p className="text-xs text-gray-500">{activity.time}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Quick Actions */}
        <Card className="p-6 border-0 shadow-sm bg-white">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Ações Rápidas</h3>
          <div className="grid grid-cols-1 gap-3">
            <Button className="justify-start h-12 bg-blue-600 hover:bg-blue-700">
              <User className="h-5 w-5 mr-3" />
              Cadastrar Cliente
            </Button>
            <Button variant="outline" className="justify-start h-12 border-blue-200 text-blue-700 hover:bg-blue-50">
              <FileText className="h-5 w-5 mr-3" />
              Emitir Recibo
            </Button>
            <Button variant="outline" className="justify-start h-12 border-purple-200 text-purple-700 hover:bg-purple-50">
              <Calendar className="h-5 w-5 mr-3" />
              Novo Agendamento
            </Button>
          </div>
        </Card>
      </div>

      {/* Calendar Preview */}
      <Card className="p-6 border-0 shadow-sm bg-white">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Próximos Agendamentos</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-4 rounded-lg border border-gray-200">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
              <div>
                <p className="font-medium text-gray-900">Reunião com João Silva</p>
                <p className="text-sm text-gray-600">Hoje, 14:00</p>
              </div>
            </div>
            <Button variant="outline" size="sm">Ver detalhes</Button>
          </div>
          <div className="flex items-center justify-between p-4 rounded-lg border border-gray-200">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
              <div>
                <p className="font-medium text-gray-900">Consultoria - Maria Santos</p>
                <p className="text-sm text-gray-600">Amanhã, 10:00</p>
              </div>
            </div>
            <Button variant="outline" size="sm">Ver detalhes</Button>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default Dashboard
