export interface LlamaResponse {
  response: string;
  model: string;
  created_at: string;
  done: boolean;
  done_reason: string;
  total_duration: number;
}
