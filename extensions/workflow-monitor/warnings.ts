import type { WorkflowViolation } from "./workflow-handler.ts";

// All warnings disabled — guardrails still track state but never notify or block.
export function warningForViolation(_violation: WorkflowViolation): string {
  return "";
}

export const getTddViolationWarning = (_detail?: string): string => "";
export const getDebugViolationWarning = (_detail?: string): string => "";
export const getVerificationViolationWarning = (_violation: WorkflowViolation): string => "";
