
import { useStore } from "./store";
import { testGet  , submitGraph} from "./api/api";
import { showPipelineToast } from "./components/ui/alert";
import { ToastContainer } from "react-toastify";

export const SubmitButton = () => {
  const nodes = useStore((state) => state.nodes);
  const edges = useStore((state) => state.edges);

  const handleSubmit = async () => {
    // console.log("Nodes:", nodes);
    // console.log("Edges:", edges);
    const data = {
        nodes : nodes , 
        edges : edges
    }

    const response = await submitGraph(data);
    console.log("Response from testGets:", response);
    
    showPipelineToast(response.num_nodes, response.num_edges, response.isdag);
   
    console.log("submit called")
  };

  return (
    <div className="flex items-center justify-center">
      <button
        onClick={handleSubmit}
        className="rounded text-white bg-red-300 px-4 py-2.5"
      >
        Submit
      </button>
      <ToastContainer/>
    </div>
  );
};