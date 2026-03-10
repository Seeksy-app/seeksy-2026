// Fully permissive Database type that bypasses Supabase SelectQueryError
// Using `any` for Relationships to prevent the SDK's relation validation

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  __InternalSupabase: {
    PostgrestVersion: "14.1"
  }
  public: {
    Tables: {
      [tableName: string]: {
        Row: Record<string, any>
        Insert: Record<string, any>
        Update: Record<string, any>
        Relationships: any
      }
    }
    Views: {
      [viewName: string]: {
        Row: Record<string, any>
        Relationships: any
      }
    }
    Functions: {
      [fnName: string]: {
        Args: Record<string, any>
        Returns: any
      }
    }
    Enums: {
      [enumName: string]: string
      account_type: 'creator' | 'advertiser' | 'listener'
    }
    CompositeTypes: {
      [typeName: string]: unknown
    }
  }
}
