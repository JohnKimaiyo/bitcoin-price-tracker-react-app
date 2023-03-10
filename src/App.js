import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import CryptoTracker from "./CryptoTracker";
import "./index.css";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <CryptoTracker cryptoName="bitcoin" />
    <ReactQueryDevtools />
    <a
      className="api-link"
      href="https://www.coingecko.com/en/api"
      target="_blank"
      rel="noopener noreferrer"
    >
      Powered by CoinGecko API
    </a>
  </QueryClientProvider>
);

export default App;

