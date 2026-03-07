import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/lib/AuthContext';

export default function UserNotRegisteredError() {
    const navigate = useNavigate();
    
    // Using your existing AuthContext instead of base44Client
    const { logout } = useAuth();

    const handleBackToLogin = async () => {
        if (logout) {
            await logout();
        }
        navigate('/');
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-6 bg-slate-50">
            <div className="max-w-md w-full">
                <div className="text-center space-y-6">
                    {/* Icon/Visual Header */}
                    <div className="space-y-2">
                        <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                            <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                        </div>
                        <h1 className="text-3xl font-bold text-slate-900">Access Denied</h1>
                    </div>
                    
                    {/* Main Message */}
                    <div className="space-y-3">
                        <h2 className="text-xl font-medium text-slate-800">
                            User Not Registered
                        </h2>
                        <p className="text-slate-600 leading-relaxed">
                            Your account is authenticated, but it hasn't been registered in our internal database yet. Please contact an administrator to complete your setup.
                        </p>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="pt-6 space-y-3">
                        <button 
                            onClick={handleBackToLogin}
                            className="w-full inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-slate-900 border border-transparent rounded-lg hover:bg-slate-800 transition-colors duration-200"
                        >
                            Return to Login
                        </button>
                        <button 
                            onClick={() => window.location.href = 'mailto:admin@tevco.com'} 
                            className="w-full inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors duration-200"
                        >
                            Contact Support
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}