import { toast } from "react-toastify";

export const showPipelineToast = (nodes, edges, isDAG) => {
    console.log("Showing toast with data:", { nodes, edges, isDAG });
  toast(
    <div>
      <div className="font-semibold mb-1">Pipeline Status</div>

      <div className="flex justify-between">
        <span>Nodes:</span>
        <span>{nodes}</span>
      </div>

      <div className="flex justify-between">
        <span>Edges:</span>
        <span>{edges}</span>
      </div>

      <div className="flex justify-between">
        <span>DAG:</span>
        <span className={isDAG ? "text-green-600" : "text-red-600"}>
          {!isDAG ? "No ✅" : "Yes , has Cycle ❌"}
        </span>
      </div>
    </div>,
  );

};