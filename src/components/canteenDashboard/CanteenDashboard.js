import React, { useState } from "react";
import {
    Bell,
    Settings,
    LogOut,
    ShoppingCart,
    Package,
    Users,
    TrendingUp,
    Clock,
    CheckCircle,
    Eye,
    Edit3,
    Filter,
    RefreshCw,
    DollarSign,
    BarChart3
} from "lucide-react";

// Navigation Header
function Header({ user, onLogout, activeSection, setActiveSection }) {
    const [notifications] = useState(12);

    const navItems = [
        { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
        { id: 'orders', label: 'Orders', icon: ShoppingCart },
        { id: 'inventory', label: 'Inventory', icon: Package },
        { id: 'menu', label: 'Menu', icon: Edit3 },
        { id: 'analytics', label: 'Analytics', icon: TrendingUp },
        { id: 'staff', label: 'Staff', icon: Users }
    ];

    return (
        <header className="bg-white shadow-lg border-b border-gray-200">
            <div className="px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6">
                        <h1 className="text-2xl font-bold text-gray-800">🍽️ Canteen Manager</h1>
                        <nav className="flex space-x-1">
                            {navItems.map(item => (
                                <button
                                    key={item.id}
                                    onClick={() => setActiveSection(item.id)}
                                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${activeSection === item.id
                                            ? 'bg-orange-100 text-orange-600 shadow-sm'
                                            : 'text-gray-600 hover:text-orange-600 hover:bg-gray-100'
                                        }`}
                                >
                                    <item.icon size={18} />
                                    <span className="hidden md:inline">{item.label}</span>
                                </button>
                            ))}
                        </nav>
                    </div>

                    <div className="flex items-center space-x-4">
                        <div className="text-right">
                            <p className="text-sm font-semibold text-gray-800">{user.name}</p>
                            <p className="text-xs text-gray-500">{user.position} • {user.canteenId}</p>
                        </div>

                        <button className="relative p-2 text-gray-600 hover:text-orange-600 hover:bg-gray-100 rounded-lg transition-colors">
                            <Bell size={20} />
                            {notifications > 0 && (
                                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                    {notifications}
                                </span>
                            )}
                        </button>

                        <button className="p-2 text-gray-600 hover:text-orange-600 hover:bg-gray-100 rounded-lg transition-colors">
                            <Settings size={20} />
                        </button>

                        <button
                            onClick={onLogout}
                            className="flex items-center space-x-2 px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors"
                        >
                            <LogOut size={16} />
                            <span>Logout</span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}

// Dashboard Overview
function DashboardOverview() {
    const [stats] = useState({
        totalOrders: 156,
        pendingOrders: 23,
        completedOrders: 133,
        revenue: 2845,
        popularItem: "Chicken Biryani",
        ordersTrend: "+12%"
    });

    const [recentOrders] = useState([
        { id: '#ORD001', customer: 'Alex Johnson', items: 3, total: 45.50, status: 'preparing', time: '2 mins ago' },
        { id: '#ORD002', customer: 'Sarah Chen', items: 2, total: 28.75, status: 'ready', time: '5 mins ago' },
        { id: '#ORD003', customer: 'Mike Wilson', items: 1, total: 15.25, status: 'completed', time: '8 mins ago' },
        { id: '#ORD004', customer: 'Emma Davis', items: 4, total: 62.00, status: 'pending', time: '10 mins ago' },
    ]);

    const getStatusColor = (status) => {
        switch (status) {
            case 'pending': return 'text-yellow-600 bg-yellow-100';
            case 'preparing': return 'text-blue-600 bg-blue-100';
            case 'ready': return 'text-green-600 bg-green-100';
            case 'completed': return 'text-gray-600 bg-gray-100';
            default: return 'text-gray-600 bg-gray-100';
        }
    };

    return (
        <div className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-600 mb-1">Total Orders</p>
                            <p className="text-3xl font-bold text-gray-800">{stats.totalOrders}</p>
                            <p className="text-xs text-green-600 mt-1">{stats.ordersTrend} vs yesterday</p>
                        </div>
                        <div className="bg-blue-100 p-3 rounded-lg">
                            <ShoppingCart className="text-blue-600" size={24} />
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-600 mb-1">Pending Orders</p>
                            <p className="text-3xl font-bold text-yellow-600">{stats.pendingOrders}</p>
                            <p className="text-xs text-gray-500 mt-1">Need attention</p>
                        </div>
                        <div className="bg-yellow-100 p-3 rounded-lg">
                            <Clock className="text-yellow-600" size={24} />
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-600 mb-1">Today's Revenue</p>
                            <p className="text-3xl font-bold text-green-600">${stats.revenue}</p>
                            <p className="text-xs text-gray-500 mt-1">+8.2% vs yesterday</p>
                        </div>
                        <div className="bg-green-100 p-3 rounded-lg">
                            <DollarSign className="text-green-600" size={24} />
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-600 mb-1">Popular Item</p>
                            <p className="text-lg font-bold text-gray-800">{stats.popularItem}</p>
                            <p className="text-xs text-gray-500 mt-1">32 orders today</p>
                        </div>
                        <div className="bg-orange-100 p-3 rounded-lg">
                            <TrendingUp className="text-orange-600" size={24} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Recent Orders */}
            <div className="bg-white rounded-xl shadow-sm border">
                <div className="p-6 border-b">
                    <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-gray-800">Recent Orders</h3>
                        <button className="text-orange-600 hover:text-orange-700 font-medium">View all</button>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="text-left py-4 px-6 font-medium text-gray-600">Order ID</th>
                                <th className="text-left py-4 px-6 font-medium text-gray-600">Customer</th>
                                <th className="text-left py-4 px-6 font-medium text-gray-600">Items</th>
                                <th className="text-left py-4 px-6 font-medium text-gray-600">Total</th>
                                <th className="text-left py-4 px-6 font-medium text-gray-600">Status</th>
                                <th className="text-left py-4 px-6 font-medium text-gray-600">Time</th>
                                <th className="text-left py-4 px-6 font-medium text-gray-600">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recentOrders.map((order, index) => (
                                <tr key={order.id} className="border-b hover:bg-gray-50">
                                    <td className="py-4 px-6 font-medium text-gray-800">{order.id}</td>
                                    <td className="py-4 px-6 text-gray-600">{order.customer}</td>
                                    <td className="py-4 px-6 text-gray-600">{order.items} items</td>
                                    <td className="py-4 px-6 font-medium text-gray-800">${order.total}</td>
                                    <td className="py-4 px-6">
                                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                                            {order.status}
                                        </span>
                                    </td>
                                    <td className="py-4 px-6 text-gray-500 text-sm">{order.time}</td>
                                    <td className="py-4 px-6">
                                        <div className="flex space-x-2">
                                            <button className="p-1 text-gray-400 hover:text-blue-600 transition-colors">
                                                <Eye size={16} />
                                            </button>
                                            <button className="p-1 text-gray-400 hover:text-green-600 transition-colors">
                                                <CheckCircle size={16} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

// Orders Management
function OrdersManagement() {
    const [orders] = useState([
        { id: '#ORD001', customer: 'Alex Johnson', items: ['Chicken Biryani', 'Mango Lassi'], total: 45.50, status: 'preparing', orderTime: '12:30 PM', estimatedTime: '5 mins' },
        { id: '#ORD002', customer: 'Sarah Chen', items: ['Veggie Burger', 'Fries'], total: 28.75, status: 'ready', orderTime: '12:25 PM', estimatedTime: 'Ready' },
        { id: '#ORD003', customer: 'Mike Wilson', items: ['Caesar Salad'], total: 15.25, status: 'completed', orderTime: '12:20 PM', estimatedTime: 'Completed' },
    ]);

    const [filter, setFilter] = useState('all');

    const getStatusColor = (status) => {
        switch (status) {
            case 'pending': return 'text-yellow-600 bg-yellow-100';
            case 'preparing': return 'text-blue-600 bg-blue-100';
            case 'ready': return 'text-green-600 bg-green-100';
            case 'completed': return 'text-gray-600 bg-gray-100';
            default: return 'text-gray-600 bg-gray-100';
        }
    };

    const filteredOrders = filter === 'all' ? orders : orders.filter(order => order.status === filter);

    return (
        <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-gray-800">Order Management</h3>
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                            <Filter size={16} className="text-gray-500" />
                            <select
                                value={filter}
                                onChange={(e) => setFilter(e.target.value)}
                                className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
                            >
                                <option value="all">All Orders</option>
                                <option value="pending">Pending</option>
                                <option value="preparing">Preparing</option>
                                <option value="ready">Ready</option>
                                <option value="completed">Completed</option>
                            </select>
                        </div>
                        <button className="flex items-center space-x-2 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors">
                            <RefreshCw size={16} />
                            <span>Refresh</span>
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredOrders.map((order) => (
                        <div key={order.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                            <div className="flex items-center justify-between mb-3">
                                <h4 className="font-semibold text-gray-800">{order.id}</h4>
                                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                                    {order.status}
                                </span>
                            </div>

                            <div className="space-y-2 mb-4">
                                <p className="text-sm text-gray-600">Customer: {order.customer}</p>
                                <p className="text-sm text-gray-600">Time: {order.orderTime}</p>
                                <p className="text-sm text-gray-600">Estimated: {order.estimatedTime}</p>
                                <p className="font-medium text-gray-800">Total: ${order.total}</p>
                            </div>

                            <div className="mb-4">
                                <p className="text-sm font-medium text-gray-700 mb-2">Items:</p>
                                <ul className="text-sm text-gray-600 space-y-1">
                                    {order.items.map((item, index) => (
                                        <li key={index}>• {item}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex space-x-2">
                                {order.status === 'pending' && (
                                    <button className="flex-1 bg-blue-600 text-white px-3 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors">
                                        Start Preparing
                                    </button>
                                )}
                                {order.status === 'preparing' && (
                                    <button className="flex-1 bg-green-600 text-white px-3 py-2 rounded-lg text-sm hover:bg-green-700 transition-colors">
                                        Mark Ready
                                    </button>
                                )}
                                {order.status === 'ready' && (
                                    <button className="flex-1 bg-gray-600 text-white px-3 py-2 rounded-lg text-sm hover:bg-gray-700 transition-colors">
                                        Complete Order
                                    </button>
                                )}
                                <button className="px-3 py-2 border border-gray-300 text-gray-600 rounded-lg text-sm hover:bg-gray-50 transition-colors">
                                    View Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

// Simple placeholder components for other sections
function InventoryManagement() {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Inventory Management</h3>
            <p className="text-gray-600">Inventory management features coming soon...</p>
        </div>
    );
}

function MenuManagement() {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Menu Management</h3>
            <p className="text-gray-600">Menu management features coming soon...</p>
        </div>
    );
}

function Analytics() {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Analytics</h3>
            <p className="text-gray-600">Analytics dashboard coming soon...</p>
        </div>
    );
}

function StaffManagement() {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Staff Management</h3>
            <p className="text-gray-600">Staff management features coming soon...</p>
        </div>
    );
}

// Main Canteen Dashboard Component
function CanteenDashboard({ user, onLogout }) {
    const [activeSection, setActiveSection] = useState('dashboard');

    const renderActiveSection = () => {
        switch (activeSection) {
            case 'dashboard':
                return <DashboardOverview />;
            case 'orders':
                return <OrdersManagement />;
            case 'inventory':
                return <InventoryManagement />;
            case 'menu':
                return <MenuManagement />;
            case 'analytics':
                return <Analytics />;
            case 'staff':
                return <StaffManagement />;
            default:
                return <DashboardOverview />;
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Header
                user={user}
                onLogout={onLogout}
                activeSection={activeSection}
                setActiveSection={setActiveSection}
            />

            <main className="p-6">
                <div className="max-w-7xl mx-auto">
                    {renderActiveSection()}
                </div>
            </main>
        </div>
    );
}

export default CanteenDashboard;