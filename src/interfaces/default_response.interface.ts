import MessageResponse from "./message_response.interface";

export default interface DefaultResponse extends MessageResponse {
  success: boolean; // Indicates if the request was success/* This TypeScript code snippet defines an
  data?: unknown; // Holds the data for successful requests (optional)
  error?: string | { [key: string]: unknown }; // Error message or object for failed requests (optional)
  status: number; // HTTP status code
}
