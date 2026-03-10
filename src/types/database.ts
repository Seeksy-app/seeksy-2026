// Fully permissive Database type that bypasses Supabase SelectQueryError
// for relational queries while maintaining structural compatibility

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

// A permissive table type where all queries resolve to `any`
interface PermissiveTable {
  Row: Record<string, any>
  Insert: Record<string, any>
  Update: Record<string, any>
  Relationships: []  // Empty tuple - prevents SelectQueryError by skipping relation validation
}

export interface Database {
  __InternalSupabase: {
    PostgrestVersion: "14.1"
  }
  public: {
    Tables: {
      [tableName: string]: PermissiveTable
    }
    Views: {
      [viewName: string]: {
        Row: Record<string, any>
        Relationships: []
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
