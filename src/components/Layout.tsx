
import { useState } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { 
  Calendar,
  FileText, 
  User,
  LogOut,
  Menu,
  X
} from "lucide-react"
import { cn } from "@/lib/utils"

interface LayoutProps {
  children?: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const navigate = useNavigate()

  const menuItems = [
    { icon: Calendar, label: "Dashboard", path: "/" },
    { icon: User, label: "Clientes", path: "/clientes" },
    { icon: User, label: "Fornecedores", path: "/fornecedores" },
    { icon: Calendar, label: "Calendário", path: "/calendario" },
    { icon: FileText, label: "Recibos/NF", path: "/documentos" },
    { icon: FileText, label: "Relatórios", path: "/relatorios" },
  ]

  const handleNavigation = (path: string) => {
    navigate(path)
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className={cn(
        "bg-white border-r border-gray-200 transition-all duration-300 flex flex-col",
        sidebarOpen ? "w-64" : "w-16"
      )}>
        {/* Header */}
        <div className="p-4 border-b border-gray-200 flex items-center justify-between">
          {sidebarOpen && (
            <h1 className="text-xl font-bold text-gray-900">GestãoPro</h1>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2"
          >
            {sidebarOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => (
            <Button
              key={item.path}
              variant="ghost"
              onClick={() => handleNavigation(item.path)}
              className={cn(
                "w-full justify-start text-gray-700 hover:bg-blue-50 hover:text-blue-700",
                !sidebarOpen && "px-2"
              )}
            >
              <item.icon className="h-5 w-5" />
              {sidebarOpen && <span className="ml-3">{item.label}</span>}
            </Button>
          ))}
        </nav>

        {/* User Section */}
        <div className="p-4 border-t border-gray-200">
          <Button
            variant="ghost"
            className={cn(
              "w-full justify-start text-gray-700 hover:bg-red-50 hover:text-red-700",
              !sidebarOpen && "px-2"
            )}
          >
            <LogOut className="h-5 w-5" />
            {sidebarOpen && <span className="ml-3">Sair</span>}
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-gray-900">Dashboard</h2>
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-600">
                Bem-vindo, Admin
              </div>
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
                A
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-6">
          {children || <Outlet />}
        </main>
      </div>
    </div>
  )
}

export default Layout
