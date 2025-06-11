
import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FileText } from "lucide-react"

const Documentos = () => {
  const [documentos, setDocumentos] = useState([
    {
      id: 1,
      tipo: "Recibo",
      cliente: "João Silva",
      valor: "R$ 1.500,00",
      data: "2024-01-15",
      numero: "REC-001",
      status: "emitido"
    },
    {
      id: 2,
      tipo: "NF",
      cliente: "Maria Santos",
      valor: "R$ 2.300,00",
      data: "2024-01-14",
      numero: "NF-001",
      status: "emitido"
    }
  ])

  const [novoDocumento, setNovoDocumento] = useState({
    tipo: "recibo",
    cliente: "",
    valor: "",
    descricao: ""
  })

  const handleInputChange = (field: string, value: string) => {
    setNovoDocumento(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const documento = {
      id: documentos.length + 1,
      tipo: novoDocumento.tipo === "recibo" ? "Recibo" : "NF",
      cliente: novoDocumento.cliente,
      valor: `R$ ${novoDocumento.valor}`,
      data: new Date().toISOString().split('T')[0],
      numero: `${novoDocumento.tipo.toUpperCase()}-${String(documentos.length + 1).padStart(3, '0')}`,
      status: "emitido"
    }
    setDocumentos(prev => [...prev, documento])
    setNovoDocumento({
      tipo: "recibo",
      cliente: "",
      valor: "",
      descricao: ""
    })
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "emitido":
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
        <h1 className="text-3xl font-bold text-gray-900">Recibos e Notas Fiscais</h1>
      </div>

      {/* Emissão de Documento */}
      <Card className="p-6 border-0 shadow-sm bg-white">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Emitir Documento</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="tipo">Tipo de Documento</Label>
              <select
                id="tipo"
                value={novoDocumento.tipo}
                onChange={(e) => handleInputChange("tipo", e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              >
                <option value="recibo">Recibo</option>
                <option value="nf">Nota Fiscal</option>
              </select>
            </div>
            <div>
              <Label htmlFor="cliente">Cliente</Label>
              <Input
                id="cliente"
                value={novoDocumento.cliente}
                onChange={(e) => handleInputChange("cliente", e.target.value)}
                placeholder="Nome do cliente"
                required
              />
            </div>
            <div>
              <Label htmlFor="valor">Valor</Label>
              <Input
                id="valor"
                value={novoDocumento.valor}
                onChange={(e) => handleInputChange("valor", e.target.value)}
                placeholder="1500.00"
                required
              />
            </div>
            <div>
              <Label htmlFor="descricao">Descrição</Label>
              <Input
                id="descricao"
                value={novoDocumento.descricao}
                onChange={(e) => handleInputChange("descricao", e.target.value)}
                placeholder="Descrição do serviço"
                required
              />
            </div>
          </div>
          <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
            Emitir Documento
          </Button>
        </form>
      </Card>

      {/* Lista de Documentos */}
      <Card className="p-6 border-0 shadow-sm bg-white">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Documentos Emitidos</h2>
        <div className="space-y-4">
          {documentos.map((documento) => (
            <div key={documento.id} className="flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <FileText className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">{documento.numero} - {documento.tipo}</h3>
                  <p className="text-sm text-gray-600">{documento.cliente}</p>
                  <p className="text-sm text-gray-600">
                    {new Date(documento.data).toLocaleDateString('pt-BR')}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="text-right">
                  <p className="font-semibold text-gray-900">{documento.valor}</p>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(documento.status)}`}>
                    {documento.status}
                  </span>
                </div>
                <Button variant="outline" size="sm">
                  Visualizar
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}

export default Documentos
