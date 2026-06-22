import React, { useState } from 'react';
import { BookOpen, DollarSign, Home, CheckCircle, Clock, FileText, Upload, ChevronRight } from 'lucide-react';

type ApplicationStatus = 'Draft' | 'Submitted' | 'Under Review' | 'Approved' | 'Denied';
type BenefitType = 'Cash Benefit' | 'Scholarship' | 'Monthly Expenses';

interface Application {
  id: string;
  type: BenefitType;
  date: string;
  status: ApplicationStatus;
  amount: number;
}

const mockApplications: Application[] = [
  { id: 'APP-2026-001', type: 'Scholarship', date: 'May 18, 2026', status: 'Approved', amount: 5000 },
  { id: 'APP-2026-042', type: 'Monthly Expenses', date: 'June 01, 2026', status: 'Under Review', amount: 800 },
  { id: 'APP-2026-089', type: 'Cash Benefit', date: 'June 15, 2026', status: 'Submitted', amount: 300 },
];

function App() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'apply' | 'documents'>('dashboard');

  const getStatusColor = (status: ApplicationStatus) => {
    switch (status) {
      case 'Approved': return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'Under Review': return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'Submitted': return 'bg-blue-100 text-blue-800 border-blue-200';
      default: return 'bg-slate-100 text-slate-800 border-slate-200';
    }
  };

  const getStatusIcon = (status: ApplicationStatus) => {
    switch (status) {
      case 'Approved': return <CheckCircle className="w-4 h-4 mr-1" />;
      case 'Under Review': return <Clock className="w-4 h-4 mr-1" />;
      default: return <FileText className="w-4 h-4 mr-1" />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* Header */}
      <header className="bg-indigo-700 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="w-8 h-8 text-indigo-300" />
            <h1 className="text-xl font-bold tracking-tight">Integrated Eligibility System</h1>
            <span className="ml-2 text-sm font-medium bg-indigo-800 px-2 py-0.5 rounded-full text-indigo-200">
              Student Portal
            </span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center font-bold text-sm">
                SV
              </div>
              <span className="text-sm font-medium hidden sm:block">Student User</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row gap-8">
        
        {/* Sidebar Navigation */}
        <aside className="w-full md:w-64 shrink-0">
          <nav className="flex flex-col gap-2">
            <button 
              onClick={() => setActiveTab('dashboard')}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${activeTab === 'dashboard' ? 'bg-indigo-50 text-indigo-700' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'}`}
            >
              <Home className="w-5 h-5" />
              My Dashboard
            </button>
            <button 
              onClick={() => setActiveTab('apply')}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${activeTab === 'apply' ? 'bg-indigo-50 text-indigo-700' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'}`}
            >
              <DollarSign className="w-5 h-5" />
              Apply for Benefits
            </button>
            <button 
              onClick={() => setActiveTab('documents')}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${activeTab === 'documents' ? 'bg-indigo-50 text-indigo-700' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'}`}
            >
              <FileText className="w-5 h-5" />
              My Documents
            </button>
          </nav>

          <div className="mt-8 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Support</h3>
            <p className="text-sm text-slate-600 mb-2">Need help with your application?</p>
            <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-800">Contact Case Worker</a>
          </div>
        </aside>

        {/* Content Area */}
        <div className="flex-1">
          {activeTab === 'dashboard' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Welcome back, Student!</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col">
                  <span className="text-sm font-medium text-slate-500 mb-1">Total Approved</span>
                  <span className="text-3xl font-bold text-slate-900">$5,000</span>
                </div>
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col">
                  <span className="text-sm font-medium text-slate-500 mb-1">Pending Review</span>
                  <span className="text-3xl font-bold text-amber-600">$1,100</span>
                </div>
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col">
                  <span className="text-sm font-medium text-slate-500 mb-1">Active Cases</span>
                  <span className="text-3xl font-bold text-indigo-600">3</span>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-slate-200 bg-slate-50 flex justify-between items-center">
                  <h3 className="font-semibold text-slate-800">Recent Applications</h3>
                  <button className="text-sm font-medium text-indigo-600 hover:text-indigo-800">View All</button>
                </div>
                <div className="divide-y divide-slate-100">
                  {mockApplications.map((app) => (
                    <div key={app.id} className="p-6 hover:bg-slate-50 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <span className="font-medium text-slate-900">{app.type}</span>
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusColor(app.status)}`}>
                            {getStatusIcon(app.status)}
                            {app.status}
                          </span>
                        </div>
                        <div className="text-sm text-slate-500 flex gap-4">
                          <span>ID: {app.id}</span>
                          <span>Submitted: {app.date}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-lg font-semibold text-slate-700">${app.amount.toLocaleString()}</span>
                        <button className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'apply' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 bg-white rounded-xl border border-slate-200 shadow-sm p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Apply for Benefits</h2>
              <p className="text-slate-500 mb-8">Select the type of assistance you need and submit your application for review by a case worker.</p>
              
              <form className="max-w-2xl space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Benefit Type</label>
                  <select className="w-full rounded-lg border-slate-300 border px-4 py-2 focus:border-indigo-500 focus:ring-indigo-500 text-slate-900">
                    <option>Select a benefit type...</option>
                    <option>Scholarship</option>
                    <option>Cash Benefit</option>
                    <option>Monthly Expenses</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Requested Amount ($)</label>
                    <input type="number" className="w-full rounded-lg border-slate-300 border px-4 py-2 focus:border-indigo-500 focus:ring-indigo-500" placeholder="0.00" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Household Size</label>
                    <input type="number" className="w-full rounded-lg border-slate-300 border px-4 py-2 focus:border-indigo-500 focus:ring-indigo-500" placeholder="1" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Annual Household Income ($)</label>
                  <input type="number" className="w-full rounded-lg border-slate-300 border px-4 py-2 focus:border-indigo-500 focus:ring-indigo-500" placeholder="0.00" />
                  <p className="mt-1 text-xs text-slate-500">This will be used to calculate your eligibility score automatically.</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Statement of Need</label>
                  <textarea rows={4} className="w-full rounded-lg border-slate-300 border px-4 py-2 focus:border-indigo-500 focus:ring-indigo-500" placeholder="Please describe your situation..."></textarea>
                </div>

                <div className="pt-4 border-t border-slate-200 flex justify-end">
                  <button type="button" className="px-6 py-2.5 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors">
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          )}

          {activeTab === 'documents' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 bg-white rounded-xl border border-slate-200 shadow-sm p-8 text-center py-20">
              <Upload className="w-16 h-16 text-slate-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-slate-900 mb-2">Upload Supporting Documents</h3>
              <p className="text-slate-500 max-w-md mx-auto mb-6">You will need to provide transcripts, ID, and proof of income for your applications to be approved by a case worker.</p>
              <button className="px-4 py-2 border border-slate-300 shadow-sm text-sm font-medium rounded-lg text-slate-700 bg-white hover:bg-slate-50 transition-colors">
                Select Files
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
