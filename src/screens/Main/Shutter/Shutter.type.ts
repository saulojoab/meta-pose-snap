export interface IShutter {
  loading: boolean;
  takePhoto: () => void;
  loadingMessage: string;
}
