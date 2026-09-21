import React, { useEffect } from "react";
import { CheckCircle2, Info, AlertCircle, X } from "lucide-react";

export interface ToastMessage {
  id: string;
  type: "success" | "info" | "warning";
  title: string;
  message: string;
}

interface ToastProps {
  toasts: ToastMessage[];
  onDismiss: (id: string) => void;
}

export function ToastContainer({ toasts, onDismiss }: ToastProps) {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2.5 max-w-sm w-full pointer-events-none px-4 sm:px-0">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="pointer-events-auto flex items-start gap-3 p-4 rounded-2xl glass-card border border-teal-500/40 shadow-2xl animate-in slide-in-from-bottom-5 fade-in duration-300"
        >
          <div className="mt-0.5 shrink-0">
            {toast.type === "success" && (
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
            )}
            {toast.type === "info" && (
              <Info className="w-5 h-5 text-teal-500" />
            )}
            {toast.type === "warning" && (
              <AlertCircle className="w-5 h-5 text-amber-500" />
            )}
          </div>

          <div className="flex-1 min-w-0">
            <h5 className="text-xs font-bold text-slate-900 dark:text-white">
              {toast.title}
            </h5>
            <p className="text-[11px] text-slate-600 dark:text-slate-300 mt-0.5 leading-relaxed">
              {toast.message}
            </p>
          </div>

          <button
            onClick={() => onDismiss(toast.id)}
            className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-0.5 shrink-0"
            aria-label="Tutup notifikasi"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
}
